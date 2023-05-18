import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Crypto, CryptoDetailsProps, CryptoPriceHistory } from './interfaces';


function CryptoDetails({ selectedCrypto, onClearSelectedCrypto }: CryptoDetailsProps) {
  const [priceHistory, setPriceHistory] = useState<CryptoPriceHistory[]>([]);

  useEffect(() => {
    if (selectedCrypto) {
      axios
        .get(`https://api.coincap.io/v2/assets/${selectedCrypto.id}/history?interval=d1`)
        .then((response) => {
          // Filter the price history data based on the specified date
          const filteredPriceHistory = response.data.data.filter(
            (priceData: CryptoPriceHistory) => priceData.time > new Date('2023-05-12').getTime()
          );
          setPriceHistory(filteredPriceHistory);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [selectedCrypto]);

  const formatDate = (time: number) => {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <>
      {selectedCrypto && (
        <div>
          <h2>{selectedCrypto.name}</h2>
          <p>Current Price: {selectedCrypto.priceUsd}</p>
          <button onClick={onClearSelectedCrypto}>Clear</button>
          <h3>Price History:</h3>
          <ul>
            {priceHistory.map((priceData) => (
              <li key={priceData.time}>
                Price: ${priceData.priceUsd} (Time: {formatDate(priceData.time)})
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default CryptoDetails;