import React, { useState } from "react";
import styles from "/styles/SearchBarWithoutButton.module.css"

const RefundSearch = (props) => {
    const [nameQuery, setNameQuery] = useState('');
    const [emailQuery, setEmailQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Creating refund");
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.searchForm}>
                <div className={styles.inputBox}>
                    <h2 className={styles.heads}>{props.title1}</h2>
                    <input
                        type="text"
                        value={nameQuery}
                        onChange={(e) => setNameQuery(e.target.value)}
                        placeholder={props.placeholder1}
                        className={styles.search}
                    />
                    <h2 className={styles.heads}>{props.title2}</h2>
                    <input
                        type="text"
                        value={emailQuery}
                        onChange={(e) => setEmailQuery(e.target.value)}
                        placeholder={props.placeholder2}
                        className={styles.search}
                    />
                </div>
                <button type="submit">Create Refund</button>
            </form>
        </div>
    );
};

export default RefundSearch;