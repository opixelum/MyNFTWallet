import React from "react"
import Card from "./components/Card"
import nftsData from "./nftsData"

export default function App() {
  const nftsCards = nftsData.map(nft => {
    return (
      <Card
        key={nft.tokenID}
        img={nft.img}
        tokenID={nft.tokenID}
        collection={nft.collection}
        price={nft.price}
        status={nft.status}
      />
    )
  })

  return (
    <>
      <h1 className="text-center">Opixelum's NFT wallet</h1>

      <div className="container d-flex flex-wrap">
        {nftsCards}
      </div>
    </>
  )
}
