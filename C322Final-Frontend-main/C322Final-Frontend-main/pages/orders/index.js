import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Item from "@/components/Item";
import styles from "/styles/Orders.module.css"

const inter = Inter({ subsets: ['latin'] })

export default function OrderHome() {
    const handleClick = (e) => {

    }

    const addToOrder = (item) => {
        console.log(`Added: ${item.name}`)

    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className={styles.container}>
            <div className={styles.orderHome}>
            <Item
                itemName="All-Purpose Flour"
                price="3.99"
                comments="A versatile ingredient used in many baked goods, from breads to cakes."
                addToOrder={addToOrder}
            ></Item>
            <Item
                itemName="Granulated Sugar"
                price="2.49"
                comments="A common sweetener used in everything from cookies to pies."
            ></Item>
            <Item
                itemName="Butter"
                price="4.99"
                comments="Provides richness and flavor in baked goods like cakes and pastries."
            ></Item>
                <Item
                    itemName="Eggs"
                    price="1.99"
                    comments="Used as a binding agent and to add structure and texture to baked goods."
                ></Item>
                <Item
                    itemName="Baking Powder"
                    price="1.49"
                    comments="A leavening agent that helps baked goods rise."
                ></Item>
                <Item
                    itemName="Vanilla Extract"
                    price="4.99"
                    comments="A flavoring used in many baked goods, from cookies to cakes."
                ></Item>
            </div>
            </div>
            <button onClick={handleClick}>Submit Order</button>
        </main>
    )
}
