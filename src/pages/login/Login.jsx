import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.css';
import data from '../../data/login.json';
import classNames from 'classnames';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { MdOutlineEmail, MdLockOutline } from 'react-icons/md';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { login } from '../../services/api';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const texts = data['en'];
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [see, setSee] = useState('password');

  const loginApp = async () => {
    if (email === '' || password === '') {
      console.warn('Required Params');
      return;
    }

    const data = {
      'email-address': email,
      password,
    };

    try {
      const result = await login(data);
      console.log(result);
      setUser('logged in');
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.icon}>
        <FaArrowCircleLeft name="arrow-circle-left" />
      </Link>
      <div className={styles.form}>
        <div className={styles.head}>
          <h1 className={styles.title}>{texts.title}</h1>
          <p className={styles.label}>{texts.message}</p>
          <p className={styles.label}>{texts.please_login}</p>
        </div>
        <div className={styles.inputCard}>
          <MdOutlineEmail name="email" className={styles.inputIcon} />
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>{texts.label_email}</label>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder={texts.placeholder_email}
              className={classNames(styles.inputText, styles.input)}
            />
          </div>
        </div>
        <div className={styles.inputCard}>
          <MdLockOutline name="lock-outline" className={styles.inputIcon} />
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>{texts.label_password}</label>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type={see}
              placeholder={texts.placeholder_password}
              className={classNames(styles.inputText, styles.input)}
            />
          </div>
          <div
            className={styles.see}
            onClick={() => setSee(see === 'text' ? 'password' : 'text')}
          >
            {see === 'password' ? (
              <HiEyeOff name="eye-off" className={styles.inputIcon} />
            ) : (
              <HiEye name="eye" className={styles.inputIcon} />
            )}
          </div>
        </div>
        <div className={styles.section}>
          <button className={styles.button} onClick={loginApp}>
            <span className={styles.buttonText}>{texts.login}</span>
          </button>
          <Link className={styles.forgot} to="/">
            <span className={styles.link}>{texts.forgot}</span>
          </Link>
        </div>
        <p className={styles.labelOr}>{texts.continue}</p>
      </div>
      <div className={styles.section}>
        <button className={styles.buttonGoogle}>
          <img
            src="https://avatars.githubusercontent.com/u/1342004?s=200&v=4"
            className={styles.google}
          />
          <span className={styles.textGoogle}>{texts.login_with_google}</span>
        </button>
        <div className={styles.signup}>
          <p className={styles.label}>
            {texts.createAccount}
            <Link to="/signup">
              <span className={styles.link}> {texts.signup}</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
