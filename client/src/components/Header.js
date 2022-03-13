import { useState } from "react"

export default function Header() {
    const [isConnected, setIsConnected] = useState(false)
    const toggleWallet = () => {
        if (isConnected) {
            setIsConnected(false)
        } else {
            setIsConnected(true)
        }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">MyNFTWallet</a>
            <button
              className="btn btn-outline-danger"
              onClick={toggleWallet}
            >{isConnected ? "Disconnect wallet" : "Connect wallet"}</button>
          </div>
        </nav>
    )
}
