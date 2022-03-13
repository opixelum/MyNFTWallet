import React from "react"

export default function Card(props) {
  let badgeText
  switch (props.nft.status) {
    case "sell":
      badgeText = "BUY NOW"
      break

    case "bid":
      badgeText = "PLACE BID"
      break

    default:
      badgeText = null
      break
  }

    return (
        <div className="container p-0 w-50 d-flex flex-column border rounded">
          {badgeText != null &&
          <button 
            className="button position-absolute bg-light text-dark m-1 rounded border-0"
          >{badgeText}</button>}
          <img className="rounded-top" src={props.nft.img} alt={props.nft.num}></img>

          <div className="container">
            <div className="row">
              <div className="col-6">
                <span>{props.nft.collection}</span>
                <span>#{props.nft.id}</span>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <span>Price:</span>
                <span>{props.nft.price} ETH</span>
              </div>
            </div>
          </div>
        </div>
    )
}
