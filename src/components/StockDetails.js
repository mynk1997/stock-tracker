import React, {useState,useEffect} from 'react'
import { getRandomPrice} from '../utils/data'

const StockDetails = ({stockData}) => {
    const [stockList,setStockList] = useState(stockData)
    useEffect(()=>{
        setInterval(()=>{
            const data= getRandomPrice();
            setStockList(data)
        },5000)
    },[])
  return (
    <div>
        {stockList.map(stock=>{
            return(
                <div key={stock.name}>
                    <h3>{stock.name}</h3>
                    <h3>{stock.price}</h3>
                </div>
            )
        })}
    </div>
  )
}

export default StockDetails