import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from './pages/Register';
import { Profile } from './pages/Profile';
import Landing from './pages/Landing';
import { useSelector } from 'react-redux';

export function App() {
  const { loginData } = useSelector(state => state.loginSlice);

  // if (!loginData) {
  //   return <Landing />;
  // }

  return (
    <div className="h-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
