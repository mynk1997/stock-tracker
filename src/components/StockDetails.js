import React, { useState, useEffect } from "react";
import { getRandomPrice } from "../utils/data";
import DisplayStocks from "./DisplayStocks";

const StockDetails = ({ stockData }) => {
  const [stockList, setStockList] = useState(stockData);
  const [selectedStock, setSelectedStock] = useState("");
  const [selectedStockDetails, setSelectedStockDetails] = useState("");

  const handleValueChange = (e) => {
    setSelectedStock(e.target.value);
  };

  useEffect(() => {
    setInterval(() => {
      const data = getRandomPrice();
      setStockList(data);
    }, 5000);
  }, []);
  return (
    <div>
      <select onChange={handleValueChange}>
        {stockList.map((stock) => (
          <option key={stock.name} value={stock.name}>
            {stock.name}
          </option>
        ))}
      </select>
      {selectedStock&&<div>
        <DisplayStocks name={selectedStock} stockData={stockList} />
      </div>}
    </div>
  );
};

export default StockDetails;
