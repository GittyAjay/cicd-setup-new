import {useState} from 'react';
export const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    // Add your login logic here
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
  };
};
