import React from 'react'
const DisplayStocks = ({name, stockData}) => {
  let stock=stockData.filter(stock => stock.name===name)
  
  return (
    <div>
        <h3>{stock[0].name}</h3>
        <h3>Rs. {stock[0].price}</h3>
    </div>
  )
}

export default DisplayStocks