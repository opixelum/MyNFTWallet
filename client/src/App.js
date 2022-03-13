import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import nftsData from "./nftsData"

export default function App() {
  const nftsCards = nftsData.map(nft => <Card key={nft.id} {...nft}/>)

  return (
    <>
      <Header/>

      <div className="container d-flex flex-wrap">
        {nftsCards}
      </div>
    </>
  )
}
