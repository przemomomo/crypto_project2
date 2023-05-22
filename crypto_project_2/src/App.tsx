import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoList from './CryptoList';
import CryptoDetails from './CryptoDetails';
import { Crypto } from './interfaces';


function App() {
  const [cryptoData, setCryptoData] = useState<Crypto[]>([]);
  const [selectedCrypto, setSelectedCrypto] = useState<Crypto | null>(null);

  useEffect(() => {
    axios
      .get<Crypto[]>('https://api.coincap.io/v2/assets')
      .then((response) => {
        setCryptoData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSelectCrypto = (crypto: Crypto) => {
    setSelectedCrypto(crypto);
  };

  const handleClearSelectedCrypto = () => {
    setSelectedCrypto(null);
  };

  return (
    <div className="container">
      <h1>Cryptocurrencies</h1>
      <div className="crypto-details">
        <CryptoDetails
          selectedCrypto={selectedCrypto}
          onClearSelectedCrypto={handleClearSelectedCrypto}
        />
      </div>
      <div className="crypto-list">
        <CryptoList cryptoData={cryptoData} onSelectCrypto={handleSelectCrypto} />
      </div>
    </div>
  );
}

export default App;