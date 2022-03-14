import React, { useState } from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import nftsData from "./nftsData"
import "./style/app.css"

export default function App() {
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark")
  }

  const [isConnected, setIsConnected] = useState(false)
  const toggleWallet = () => setIsConnected(oldStatus => !oldStatus)

  const nftsCards = nftsData.map(nft => <Card key={nft.id} {...nft}/>)

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} isConnected={isConnected} toggleWallet={toggleWallet}/>

      <div className="container d-flex flex-wrap justify-content-center">
        {
          isConnected ?
          nftsCards :
          <h3>You're not connected.</h3>
        }
      </div>
    </>
  )
}
