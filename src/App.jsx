import { React } from 'react';
import Authenticate from './components/Authenticate';
import SignUpForm from './components/SignUpForm';
import './App.css';
import { useState } from 'react';
export default function App() {
  const [token, setToken] = useState(null)

  return (
    <>
     <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </>
  );
}