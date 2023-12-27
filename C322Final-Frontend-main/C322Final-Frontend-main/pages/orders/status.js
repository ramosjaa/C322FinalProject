import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Item from "@/components/Item";
import styles from "/styles/Orders.module.css"
import { useState, useEffect } from "react";
import SearchBar from "@/components/SearchBar";
import Loader from "@/components/Loader"


const inter = Inter({ subsets: ['latin'] })

export default function OrderStatus() {
    const [order, setOrder] = useState([]);
    const [searching, setSearching] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleSearch = (query) => {
        console.log(`Searching for: ${query}`);
        setSearching(false);
        setLoading(true)
    }

    if(searching) {
        return (
            <div className={styles.orderContainer}>
                <div className={styles.searchBox}>
                    <SearchBar search={handleSearch} className={styles.search}/>
                </div>
            </div>
        )
    } else if(loading) {
        return (
            <div className={styles.orderContainer}>
                <Loader/>
            </div>
        )
    } else {
        return (
            <main className="flex min-h-screen flex-col items-center justify-between p-24">

            </main>
        )
    }
}
