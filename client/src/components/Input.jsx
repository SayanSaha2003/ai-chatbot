import { useState } from "react";

function Input({ onSend }) {
    const [userMessage, setUserMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!userMessage.trim()) return;

        onSend(userMessage);
        setUserMessage("");
    };

    return (
        <div className="border-t border-gray-200 p-4">
            <form onSubmit={handleSubmit} className="flex items-center gap-3">
                <input
                    type="text"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                />

                <button
                    type="submit"
                    className="rounded-xl bg-blue-500 px-5 py-3 text-white hover:bg-blue-600"
                >
                    ➤
                </button>
            </form>
        </div>
    );
}

export default Input;