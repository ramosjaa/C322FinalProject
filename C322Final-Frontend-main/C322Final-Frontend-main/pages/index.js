import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="welcome">
          <div className="intro">
            <h1>Welcome to our C322 Final Project!</h1>
            <h2>By: Darrion Shack, Josh Sensanbaugher, Jack Ramos</h2>
          </div>
      </div>
    </main>
  )
}
