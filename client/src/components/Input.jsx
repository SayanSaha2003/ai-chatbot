function Input() {
    return (
        <div className="border-t border-gray-200 p-4">
            <form className="flex items-center gap-3">
                <input
                    type="text"
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