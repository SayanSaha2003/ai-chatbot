const API_URL = import.meta.env.VITE_API_URL;

export const sendMessage = async (messages) => {
    const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages }),
    });

    if (!response.ok) {
        throw new Error("Failed to get AI response");
    }

    return response;
};