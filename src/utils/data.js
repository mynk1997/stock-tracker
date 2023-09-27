export const stockData = [
  {
    name: "TCS",
    price: 2390.00,
  },
  { name: "INFY", price: 1290.00 },
  { name: "WIPRO", price: 431.00 },
];

export const getRandomPrice = () => {
  return stockData.map((stock) => ({
    ...stock,
    price: Math.floor(Math.random() * 10000),
  }));
};
