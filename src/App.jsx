import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from './pages/Register';
import { Profile } from './pages/Profile';
import { useEffect, useState } from 'react';
import Landing from './pages/Landing';

export function App() {
  const [users, setUsers] = useState(false);

  if (!users) {
    return <Landing setUsers={setUsers} />;
  }

  return (
    <div className="h-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Footer /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
