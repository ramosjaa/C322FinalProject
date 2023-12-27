import React, { useState } from "react";
import styles from "/styles/SearchBarWithoutButton.module.css"

const SearchBarWithoutButton = ({ create }) => {
    const [nameQuery, setNameQuery] = useState('');
    const [emailQuery, setEmailQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        create([nameQuery,emailQuery]);
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.searchForm}>
                <div className={styles.inputBox}>
                    <h2 className={styles.heads}>Enter your name:</h2>
                    <input
                        type="text"
                        value={nameQuery}
                        onChange={(e) => setNameQuery(e.target.value)}
                        placeholder="Enter name..."
                        className={styles.search}
                    />
                    <h2 className={styles.heads}>Enter your email:</h2>
                    <input
                        type="text"
                        value={emailQuery}
                        onChange={(e) => setEmailQuery(e.target.value)}
                        placeholder="Enter email..."
                        className={styles.search}
                    />
                </div>
                <button type="submit">Create customer profile</button>
            </form>
        </div>
    );
};

export default SearchBarWithoutButton;