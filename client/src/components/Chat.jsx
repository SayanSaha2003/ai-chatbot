import { useState } from "react";
import Input from "./Input";

function Chat() {
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content:
                "Hello! 👋\nI'm your AI assistant. You can ask me anything — from coding help to learning new topics, or just have a chat!\n\nHow can I help you today?",
        },
    ]);

    const handleSend = (userMessage) => {
        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                content: userMessage,
            },
        ]);
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100 p-4">
            <div className="flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-lg">

                <div className="flex-1 space-y-6 overflow-y-auto p-6">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex ${
                                message.role === "user"
                                    ? "justify-end"
                                    : "justify-start"
                            }`}
                        >
                            <div
                                className={`max-w-[75%] whitespace-pre-line rounded-2xl px-5 py-3 ${
                                    message.role === "user"
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-100 text-gray-800"
                                }`}
                            >
                                {message.content}
                            </div>
                        </div>
                    ))}
                </div>

                <Input onSend={handleSend} />

            </div>
        </div>
    );
}

export default Chat;