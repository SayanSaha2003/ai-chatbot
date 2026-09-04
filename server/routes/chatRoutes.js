import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/", async (req, res) => {
    const { messages } = req.body;

    try {
        const response = await axios.post(
            // OpenRouter API endpoint f
            "https://openrouter.ai/api/v1/chat/completions",
            // Request body
            {
                model: "gpt-4o-mini",
                messages: [
                    {
                        role: "system",
                        content:
                            "You are a helpful AI assistant. Give clear and concise answers.",
                    },
                    ...messages,
                ],
                temperature: 0.7,
                max_tokens: 500,
                stream: true,
            },
            // Request Configuration
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                },
                responseType: "stream",
            },
        );

        // Set headers for Server-Sent Events (SSE)
        res.setHeader("Content-Type", "text/event-stream");
        res.setHeader("Cache-Control", "no-cache");
        res.setHeader("Connection", "keep-alive");

        // Handle data from streaming response
        let buffer = "";
        response.data.on("data", (chunk) => {
            buffer += chunk.toString();
            const events = buffer.split("\n\n");
            buffer = events.pop();
            for (const event of events) {
                const line = event
                    .split("\n")
                    .find((line) => line.startsWith("data: "));
                if (!line) continue;
                const data = line.slice(6).trim();
                if (data === "[DONE]") {
                    continue;
                }
                const parsed = JSON.parse(data);
                const content = parsed.choices?.[0]?.delta?.content;

                if (content) {
                    res.write(content);
                }
            }
        });

        // Handle end of streaming response
        response.data.on("end", () => {
            res.end();
        });

    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json({
            error: "Failed to get AI response",
        });
    }
});

export default router;
