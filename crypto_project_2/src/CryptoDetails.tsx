import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { CryptoPriceHistory } from './interfaces';

function CryptoDetails() {
  const { selectedCrypto, priceHistory, onClearSelectedCrypto } = useContext(AppContext);

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
            {priceHistory.map((priceData: CryptoPriceHistory) => (
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