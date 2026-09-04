import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/", async (req, res) => {
    const { message } = req.body;

    try {
        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "gpt-4o-mini",
                messages: [{ role: "user", content: message }],
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                },
            },
        );
        const reply = response.data.choices[0].message.content;
        res.json({ reply });
    } catch (error) {
        console.error(error.response?.data || error.message);
        res.status(500).json({
            error: "Failed to get AI response",
        });
    }
});

export default router;
