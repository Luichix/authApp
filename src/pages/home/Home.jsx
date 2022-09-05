import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import styles from './home.module.css';
import { logout } from '../../services/api';

const Home = () => {
  const { user, setUser } = useContext(AuthContext);

  const logoutApp = async () => {
    try {
      const result = await logout();
      console.log(result);
      setUser(null);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Home</h1>
      {user ? (
        <div className={styles.authLog}>
          <p className={styles.text}>User</p>
          <p className={styles.text}>{user}</p>
          <button>Logout</button>
        </div>
      ) : (
        <div className={styles.authIn}>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
