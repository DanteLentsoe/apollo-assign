import React from 'react';
import {useState, useEffect} from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "../index.css";

export default function CoinView() { 

    // apollo client setup
    const client = new ApolloClient({
        uri: "http://localhost:5000/graphql"
      })
      

    // demo data

    const [coin, setCoin] = useState([
        {name: "Bitcoin", symbol: "BTC", id: 90},
        {name: "Polkadot", symbol: "DOT", id: 2},
        {name: "Tether", symbol: "USDT", id: 3},
        {name: "Litecoin", symbol: "LTC", id: 4},
        {name: "ChainLink", symbol: "LINK", id: 5}
        
    ], [], ()=> {
        const storedData = localStorage.getItem("coin");
        return storedData ? JSON.parse(storedData) : [];
    }
    );
 // local storage
 useEffect(() => {
    localStorage.setItem("coin", JSON.stringify(coin));

}, [coin] );


const handleHide = (id) => {
    const updateList = coin.filter((coin) => coin.id !== id);
    setCoin(updateList);
}; 

 //re-render page
    const [render, setRender] = useState(coin);
    const [display, setDisplay] = useState(false);
 

console.log(typeof coin);
console.log("Data ",coin)

console.log("State of render ",render)



   const handleDisplayInfo= (id) => {

    //const updateList = coin.map((coin) => coin.id !== id);
     let divInfo =  <p>Any Info</p>
     setDisplay(divInfo);
    } 

/*
   const handleShowCoins = (id) => {
       const renderList = coin.filter((coin) => coin.id == id)
       setCoin(renderList); 
   } */

   
   const handleShowCoins = () => {
     setCoin(render);
   }; 

   

    return (
        <ApolloProvider client={client}>
        <div>
        <div className="coin-container">
        

        <div>
        {<button className="btn-style-all" onClick={ () => handleShowCoins()}>Show All Coins</button>}
        </div>

        
        {coin.map((coin) => (
        <div className="coin-box" key={coin.id}>
         <h2>{coin.name}</h2>
         <p>{display}</p>
         <p>{coin.symbol}</p>
         <button onClick={() => handleDisplayInfo(coin.id)} className="btn-style">Show Value</button>
         
           <div className="btn-remove-position">
           <button onClick={() => handleHide(coin.id)} className="btn-style">Remove Coin</button>
           </div>
           </div>
        ))}   

        
        </div>
            
        </div>
        </ApolloProvider>
    )
}
