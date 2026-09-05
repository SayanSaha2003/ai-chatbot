export const sendMessage = async (messages) => {
    const response = await fetch("http://localhost:5000/api/chat", {
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