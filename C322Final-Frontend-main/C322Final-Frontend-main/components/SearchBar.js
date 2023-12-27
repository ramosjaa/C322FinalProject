import React, { useState } from "react";
import styles from "/styles/SearchBar.module.css"

const SearchBar = ({ search }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        search(query);
    };

    return (
        <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter Order ID..."
                className={styles.search}
            />
            <button type="submit">Search</button>
        </form>
        </div>
    );
};

export default SearchBar;