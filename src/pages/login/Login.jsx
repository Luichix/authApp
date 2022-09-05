import React, { useState, useEffect, useContext } from 'react';
import styles from './login.module.css';
import data from '../../data/login.json';
import classNames from 'classnames';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { MdOutlineEmail, MdLockOutline } from 'react-icons/md';
import { HiEye, HiEyeOff } from 'react-icons/hi';

const Login = () => {
  const texts = data['en'];
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [see, setSee] = useState('password');

  return (
    <div className={styles.container}>
      <FaArrowCircleLeft name="arrow-circle-left" className={styles.icon} />
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
          <button className={styles.button} onClick={() => {}}>
            <span className={styles.buttonText}>{texts.login}</span>
          </button>
          <buttton className={styles.forgot} onClick={() => {}}>
            <span className={styles.link}>{texts.forgot}</span>
          </buttton>
        </div>
        <p className={styles.labelOr}>{texts.continue}</p>
      </div>
      <div className={styles.section}>
        <div>
          <button className={styles.buttonGoogle}>
            <img
              src="https://avatars.githubusercontent.com/u/1342004?s=200&v=4"
              className={styles.google}
            />
            <span className={styles.textGoogle}>{texts.login_with_google}</span>
          </button>
        </div>
        <div className={styles.signup}>
          <p className={styles.label}>
            {texts.createAccount}
            <a onClick={() => {}}>
              <span className={styles.link}> {texts.signup}</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
