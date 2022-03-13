import React from "react"
import Card from "./components/Card"
import nftsData from "./nftsData"

export default function App() {
  const nftsCards = nftsData.map(nft => <Card key={nft.id} {...nft}/>)

  return (
    <>
      <h1 className="text-center">Opixelum's NFT wallet</h1>

      <div className="container d-flex flex-wrap">
        {nftsCards}
      </div>
    </>
  )
}
