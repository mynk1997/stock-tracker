export const stockData = [
  {
    name: "TCS",
    price: "Rs. 2390.00",
  },
  { name: "INFY", price: "Rs. 1290.00" },
  { name: "WIPRO", price: "Rs. 431.00" },
];

export const getRandomPrice=()=>{
    stockData.map(stock=>stock.price="Rs. "+Math.floor(Math.random()*10000))
    console.log(stockData);
    return stockData
}

  