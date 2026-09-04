import { useState } from "react";

function App() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if (!input.trim()) return;

        // take the input as the userMessage
        const userMessage = {
            role: "user",
            content: input,
        };

        setMessages((prev) => [...prev, userMessage]); // Add the user's message to the chat UI
        setInput("");

        // Send the user's message along with conversation history to the Express server
        const response = await fetch("http://localhost:5000/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                messages: [...messages, userMessage],
            }),
        });

        const reader = response.body.getReader(); //reads incoming chunks.
        const decoder = new TextDecoder();  //converts binary chunks into normal text.
        let assistantMessage = "";
        // Keep reading response chunks until the stream ends
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            const chunk = decoder.decode(value);  // Convert the received chunk into text
            assistantMessage += chunk;
            console.log(assistantMessage);
        }
    };

    return (
        <div>
            <h1>AI Chatbot</h1>

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
            />

            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default App;
