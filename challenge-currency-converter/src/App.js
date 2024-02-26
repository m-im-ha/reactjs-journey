// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [money,setMoney] = useState("");
  const [fromCurrency,setFromCurrency] = useState("USD");
  const [toCurrency,setToCurrency] = useState("USD");
  const [convertedMoney,setConvertedMoney] = useState("");

  // console.log(money);
  // console.log(fromCurrency);
  // console.log(toCurrency);

  function handleMoneyChange(e){
    setMoney(e.target.value);
  }

  function handleFromCurrencyChange(e){
    setFromCurrency(e.target.value);
  }

  function handleToCurrencyChange(e){
    setToCurrency(e.target.value);
  }

  useEffect(function(){
    async function exchangeRate(){
      try {
        const response = await fetch(
          `https://api.frankfurter.app/latest?amount=${money}&from=${fromCurrency}&to=${toCurrency}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch exchange rates");
        }

        const data = await response.json();
        console.log(data)
        // const rate = data.rates[toCurrency];
        // setConvertedMoney(rate);
        const rate = data.rates[toCurrency];
        setConvertedMoney(rate !== undefined ? rate : null);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    // Fetch only if there's a valid amount and the currencies are different
    // if (money && fromCurrency !== toCurrency) {
    //   exchangeRate();
    // } else {
    //   setConvertedMoney(null);
    // }
    exchangeRate();
  }, [money, fromCurrency, toCurrency,convertedMoney]);

  return (
    <div>
      <input type="text" value={money} onChange={handleMoneyChange} />
      <select value={fromCurrency} onChange={handleFromCurrencyChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={toCurrency} onChange={handleToCurrencyChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{convertedMoney}</p>
    </div>
  );
}
