import React, {useEffect, useState } from "react";
import Loader from "@/components/Loader";
import styles from "/styles/Customer.module.css"
import SearchBarWithoutButton from "@/components/SearchBarWithoutButton"


const CreateCustomers = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleCreate = (query) => {
        console.log(`Creating customer with name: ${query[0]} and email: ${query[1]}`);
        setLoading(true)
    }

    if(loading) {
        return(
            <div className={styles.customerContainer}>
                <Loader/>
            </div>
        )
    } else {
        return(
            <>
                <div className={styles.pageContainer}>
                    <div className={styles.container}>
                            <SearchBarWithoutButton create={handleCreate}
                                placeholder = "Test"
                            ></SearchBarWithoutButton>
                    </div>
                </div>
            </>
        )
    }
}

export default CreateCustomers;