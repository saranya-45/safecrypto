import React from "react";
import "./MarketPage.css"; // Import the CSS file

const MarketPage = () => {
  // Example data
  const marketData = [
    {
      rank: 1,
      name: "Bitcoin",
      symbol: "BTC",
      price: "$58,756",
      change24h: "-2.32%",
      change7d: "+7.4%",
      marketCap: "$1,161,212,548,832",
      volume: "$24,651,769,028",
      supply: "19,754,746 BTC",
    },
    {
      rank: 2,
      name: "Ethereum",
      symbol: "ETH",
      price: "$2,293.57",
      change24h: "-5.27%",
      change7d: "+0.23%",
      marketCap: "$276,323,320,832",
      volume: "$13,645,977,179",
      supply: "120,339,716.02451 ETH",
    },
    {
      rank: 3,
      name: "Tether",
      symbol: "USDT",
      price: "$1",
      change24h: "+0.04%",
      change7d: "+0.04%",
      marketCap: "$118,935,913,160",
      volume: "$54,837,035,235",
      supply: "118,810,537,791.354 USDT",
    },
    {
      rank: 4,
      name: "Binance Coin",
      symbol: "BNB",
      price: "$547.09",
      change24h: "-1.24%",
      change7d: "+8.37%",
      marketCap: "$79,828,841,835",
      volume: "$961,067,314",
      supply: "145,887,575.79 BNB",
    },
  ];

  return (
    <div className="market-container">
      <header className="market-header">
        <h1 className="market-title">SafeCryptoStocks</h1>
        <nav className="market-nav">
          <a href="/dashboard">Dashboard</a>
          <a href="/market">Market</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/budget">Budget</a>
          <a href="/learn">Learn</a>
        </nav>
      </header>

      <h2 style={{ marginBottom: "20px" }}>Top Cryptocurrencies by Market Cap</h2>

      <table className="market-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h</th>
            <th>7d</th>
            <th>Market Cap</th>
            <th>Volume</th>
            <th>Supply</th>
          </tr>
        </thead>
        <tbody>
          {marketData.map((crypto, index) => (
            <tr key={index}>
              <td>{crypto.rank}</td>
              <td>{crypto.name} ({crypto.symbol})</td>
              <td>{crypto.price}</td>
              <td className={crypto.change24h.startsWith("+") ? "green" : "red"}>
                {crypto.change24h}
              </td>
              <td className={crypto.change7d.startsWith("+") ? "green" : "red"}>
                {crypto.change7d}
              </td>
              <td>{crypto.marketCap}</td>
              <td>{crypto.volume}</td>
              <td>{crypto.supply}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketPage;
