import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { logOut } from '../reduxSlice/loginPostSlice';
import { baseApiUrl } from '../apiFetch/createAxios';

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginData } = useSelector(state => state.loginSlice);
  const [userInfo, setUserInfo] = useState('');
  const [allUsers, setAllUsers] = useState([]);

  const userInfoFecth = () => {
    baseApiUrl()
      .get('/api/users/get-all-users')
      .then(res => {
        res.status === 200 ? setAllUsers(res.data) : alert('işlem başarısız');
      });
  };

  const navbarInputChange = e => {
    setUserInfo(e.target.value);
  };

  const filtredUsers = allUsers?.filter(item =>
    item.userName.startsWith(userInfo)
  );

  const handleGetUser = (id) => {
    navigate(`/profile/${id}`)
    setUserInfo('')
  }

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to={'/'} className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </Link>
        <div className="flex items-center md:order-2">
          {loginData ? (
            <div className=" flex w-36 justify-between items-center">
              <div>
                <img
                  className="w-10 h-10 rounded-full"
                  src={loginData?.image}
                  alt="Rounded avatar"
                  onClick={() => navigate(`/profile/${loginData._id}`)}
                />
              </div>
              <div>{loginData?.userName.toUpperCase()}</div>
              <div>
                <BiLogOut size={30} onClick={() => dispatch(logOut(navigate))} />
              </div>
            </div>
          ) : (
            <div className="flex gap-5 text-slate-200">
              <Link to={'/login'}>giriş yap</Link>
              <Link to={'/register'}>kayıt ol</Link>
            </div>
          )}
          <div
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                Bonnie Green
              </span>
              <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <span
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </span>
              </li>
              <li>
                <span
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </span>
              </li>
              <li>
                <span
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Earnings
                </span>
              </li>
              <li>
                <span
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </span>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <span
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 relative"
              >
                <input
                  className="outline-none p-[1px] rounded-md w-72 text-gray-100 pl-4"
                  placeholder="kullanıcı ara"
                  value={userInfo}
                  onChange={e => navbarInputChange(e)}
                  onFocus={userInfoFecth}
                />
                <div className="text-white absolute w-full mt-2 rounded bg-slate-700">
                  {userInfo.length > 3 && filtredUsers.map(user => (
                    <div key={user._id} onClick={() => handleGetUser(user._id)} className='px-2 py-1 cursor-pointer'>{user.userName}</div>
                  ))}
                </div>
              </span>
            </li>
            <li>
              <span
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
