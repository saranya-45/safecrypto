import React, { useState } from "react";
import "./PortfolioPage.css";

const PortfolioPage = () => {
  const [portfolios, setPortfolios] = useState([
    { name: "Crypto Growth", description: "Focused on high-potential cryptocurrencies." },
    { name: "Stable Assets", description: "Includes BTC and ETH for long-term stability." },
    { name: "Altcoin Gems", description: "Emerging altcoins with high growth prospects." },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newPortfolio, setNewPortfolio] = useState({ name: "", description: "" });

  const handleAddPortfolio = () => {
    setShowModal(true);
  };

  const handleSavePortfolio = () => {
    if (newPortfolio.name && newPortfolio.description) {
      setPortfolios([...portfolios, newPortfolio]);
      setNewPortfolio({ name: "", description: "" });
      setShowModal(false);
    }
  };

  const handleDeletePortfolio = (index) => {
    const updatedPortfolios = portfolios.filter((_, i) => i !== index);
    setPortfolios(updatedPortfolios);
  };

  return (
    <div className="portfolio-container">
      {/* Left Side - My Portfolio */}
      <div className="left-side">
        <div className="portfolio-header">
          <h1>My Portfolio</h1>
          <button className="icon-button" onClick={handleAddPortfolio}>+</button>
        </div>
        {portfolios.map((portfolio, index) => (
          <div key={index} className="portfolio-item">
            <div className="portfolio-details">
              <strong>{portfolio.name}</strong>
              <p>{portfolio.description}</p>
            </div>
            <div className="portfolio-actions">
              <button className="icon-button" onClick={() => {}}>✎</button>
              <button className="icon-button" onClick={() => handleDeletePortfolio(index)}>🗑️</button>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side - Current Balance and Assets */}
      <div className="right-side">
        <div className="card">
          <div className="current-balance-header">
            <h2>Current Balance</h2>
            <button className="button">Buy Stock</button>
          </div>
          <p className="balance">$872,043.00</p>
          <p>Profit/Loss: $52,384.00</p>
        </div>

        <div className="card">
          <h2>Your Assets</h2>
          <table className="assets-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>24%</th>
                <th>Holdings</th>
                <th>Avg. Buy Price</th>
                <th>Profit/Loss</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="asset-name">
                  <img className="asset-logo" src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" alt="BNB logo" />
                  BNB
                </td>
                <td>$45,897.00</td>
                <td style={{ color: "red" }}>-1.34%</td>
                <td>$872,043.00</td>
                <td>$42,709.00</td>
                <td>$52,384.00</td>
                <td>
                  <button className="button">+</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td className="asset-name">
                  <img className="asset-logo" src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="ETH logo" />
                  ETH
                </td>
                <td>$3,200.00</td>
                <td style={{ color: "green" }}>+2.10%</td>
                <td>$150,000.00</td>
                <td>$2,900.00</td>
                <td>$30,000.00</td>
                <td>
                  <button className="button">+</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td className="asset-name">
                  <img className="asset-logo" src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" alt="BTC logo" />
                  BTC
                </td>
                <td>$45,000.00</td>
                <td style={{ color: "blue" }}>+0.50%</td>
                <td>$500,000.00</td>
                <td>$40,000.00</td>
                <td>$100,000.00</td>
                <td>
                  <button className="button">+</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Adding Portfolio */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add Portfolio</h2>
            <div>
              <input
                type="text"
                placeholder="Portfolio Name"
                value={newPortfolio.name}
                onChange={(e) => setNewPortfolio({ ...newPortfolio, name: e.target.value })}
              />
            </div>
            <div>
              <textarea
                placeholder="Portfolio Description"
                value={newPortfolio.description}
                onChange={(e) => setNewPortfolio({ ...newPortfolio, description: e.target.value })}
              />
            </div>
            <div className="modal-actions">
              <button onClick={handleSavePortfolio}>Save</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
