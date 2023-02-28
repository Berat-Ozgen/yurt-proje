import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from './pages/Register';
import { Profile } from './pages/Profile';
import { useEffect } from 'react';
import { baseApiName } from './apiFetch/createAxios';

export function App() {
  const deneme = async () => {
    await baseApiName()
      .get('')
      .then(res => console.log(res.data));
  };

  useEffect(() => {
    deneme();
  }, []);

  return (
    <div className="h-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}
