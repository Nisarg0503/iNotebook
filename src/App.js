import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; // your Addnote/Home component
import About from "./components/About";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NoteState from "./context/notes/NoteState";
import PrivateRoute from "./components/PrivateRoute"; // we create this
import "./App.css";

function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            {/* Protected Home Route */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />

            {/* Public Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
