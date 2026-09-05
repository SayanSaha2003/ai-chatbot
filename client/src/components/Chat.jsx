import Input from "./Input";

function Chat() {
    const messages = [
        {
            role: "assistant",
            content:
                "Hello! 👋\nI'm your AI assistant. You can ask me anything — from coding help to learning new topics, or just have a chat!\n\nHow can I help you today?",
        },
        {
            role: "user",
            content: "My favorite language is JavaScript.",
        },
        {
            role: "assistant",
            content:
                "Nice! JavaScript is a great choice. It's versatile and widely used.",
        },
    ];

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100 p-4">
            <div className="flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-lg">
                
                {/* Chat messages */}
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

                {/* Input */}
                <Input />
            </div>
        </div>
    );
}

export default Chat;