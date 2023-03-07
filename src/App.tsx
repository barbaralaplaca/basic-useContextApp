import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';

type GlobalContent = {
  copy: string,
  setCopy: (c:any) => void,
}

const MyGlobalContext = createContext<GlobalContent>({
  copy: '',
  setCopy: () => {},
})

function App() {
  const [copy, setCopy] = useState('Hello world')
  return (
    <div className='app'>
    <MyGlobalContext.Provider value = {{ copy, setCopy }}>
        <Home />
        <Login />
        <Profile />
    </MyGlobalContext.Provider>
    </div>
  );
}

export { App, MyGlobalContext };
