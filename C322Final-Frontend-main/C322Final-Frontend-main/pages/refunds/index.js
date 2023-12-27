import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Item from "@/components/Item";
import styles from "/styles/Customer.module.css"
import { useState, useEffect } from "react";
import Loader from "@/components/Loader"
import RefundSearch from "@/components/RefundSearch";


const inter = Inter({ subsets: ['latin'] })

export default function Refunds() {
    const [searching, setSearching] = useState(true);
    const [loading, setLoading] = useState(false);


    if(searching) {
        return (
            <div className={styles.pageContainer}>
            <div className={styles.customerContainer}>
                <div className={styles.searchBox}>
                    <RefundSearch
                        title1="Enter Order ID:"
                        placeholder1="Enter order ID..."
                        title2="What is your reason for refunding?"
                        placeholder2="Enter reason..."
                    />
                </div>
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
