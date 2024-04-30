"use client";
import React, { useState } from "react";
import styles from "./ResetPassword.module.scss";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    setIsValidEmail(validateEmail(email));
    if (isValidEmail) {
      console.log("Email is valid.");
    }
  };
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <div className={styles.grayBg}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.heading}>サービス名</div>
          <div className={styles.inputCont}>
            <div className={styles.label}>メールアドレス</div>
            <input
              type="email"
              className={`${styles.email} ${!isValidEmail && styles.invalid}`}
              placeholder="Enter your e-mail address"
              value={email}
              onChange={handleChange}
            />
            {!isValidEmail && (
              <div className={styles.error}>Invalid email format</div>
            )}
          </div>
          <div className={styles.btnCont}>
            <button className={styles.btn} onClick={handleSubmit}>
              <div className={styles.btnText}>登録する</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
