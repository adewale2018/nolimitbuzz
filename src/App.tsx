import { Route, BrowserRouter as Router, Routes } from "react-router";

import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/user/:id" element={<UserDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
