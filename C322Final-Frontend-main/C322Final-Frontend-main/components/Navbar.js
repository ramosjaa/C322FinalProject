import { useState } from "react";
import styles from "../styles/Navbar.module.css"
import Link from "next/link";


const Navbar = () => {
    return (
        <>
            <header>
                <nav className={styles.navbar}>
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/">Customers</Link>
                            <ul>
                                <li>
                                    <Link href="/customers">All Customers</Link>
                                </li>
                                <li>
                                    <Link href="/customers/add">New Customer</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/">Orders</Link>
                            <ul>
                                <li>
                                    <Link href="/orders">Create Order</Link>
                                </li>
                                <li>
                                    <Link href="/orders/status">Order Status</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/">Refunds</Link>
                            <ul>
                                <li>
                                    <Link href="/refunds">Get Refund</Link>
                                </li>
                                <li>
                                    <Link href="/refunds/status">Refund Status</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Navbar;