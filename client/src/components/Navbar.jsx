const Navbar = () => {
  return (
    <nav className="border-b bg-white px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">
          AI Chatbot
        </h1>

        <span className="text-sm text-gray-500">
          Powered by AI
        </span>
      </div>
    </nav>
  );
};

export default Navbar;