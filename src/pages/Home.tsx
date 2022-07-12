import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Common/Button';

export default function Home() {
  const navigate = useNavigate();
  const handleAction = async () => {
    sessionStorage.removeItem('authToken');
    await navigate('/login');
  };
  useEffect(() => {
    const authToken = sessionStorage.getItem('authToken');
    if (authToken) {
      navigate('/');
    }
    if (!authToken) {
      navigate('/login');
    }
  }, []);
  return (
    <div>
      <h1>Home</h1>
      <Button title="Logout" handleAction={handleAction} />
    </div>
  );
}
