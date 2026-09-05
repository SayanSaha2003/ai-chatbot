import Navbar from "./components/Navbar";
import Chat from "./components/Chat";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="flex h-screen flex-col bg-gray-100">
            <Navbar />

            <main className="flex-1 min-h-0">
                <Chat />
            </main>

            <Footer />
        </div>
    );
}

export default App;
