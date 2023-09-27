import React, { useState, useEffect } from "react";
import { getRandomPrice, stockData } from "../utils/data";
import StockDetails from "./StockDetails";

const StockUpdater = () => {
  const [stockList, setStockList] = useState(stockData);

  useEffect(() => {
    const data = getRandomPrice();
    setStockList(data);
  }, []);

  return (
    <div>
      <StockDetails stockData={stockList} />
    </div>
  );
};

export default StockUpdater;
