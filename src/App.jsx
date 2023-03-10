import { Navbar } from './components/Navbar';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from './pages/Register';
import { Profile } from './pages/Profile';
import Landing from './pages/Landing';
import { useSelector } from 'react-redux';

export function App() {
  const { loginData } = useSelector(state => state.loginSlice);

  if (!loginData) {
    return <Landing />;
  }

  return (
    <div className="h-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Footer /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
