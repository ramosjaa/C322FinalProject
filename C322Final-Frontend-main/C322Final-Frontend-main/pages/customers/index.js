import {useEffect, useState } from "react";
import Loader from "@/components/Loader";


const Customers = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);

    if(loading) {
        return(
            <Loader/>
        )
    } else {
        return(
            <>

            </>
        )
    }
}

export default Customers;