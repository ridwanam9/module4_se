import { useState } from 'react';
import { login } from '../api/auth';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const data = await login(email, password);
      console.log('User logged in:', data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
