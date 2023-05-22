import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Crypto, CryptoPriceHistory, AppContextProps } from './interfaces';

const AppContext = createContext<AppContextProps>({
  cryptoData: [],
  selectedCrypto: null,
  priceHistory: [],
  onSelectCrypto: () => {},
  onClearSelectedCrypto: () => {},
});

const AppProvider: React.FC = ({ children }) => {
  const [cryptoData, setCryptoData] = useState<Crypto[]>([]);
  const [selectedCrypto, setSelectedCrypto] = useState<Crypto | null>(null);
  const [priceHistory, setPriceHistory] = useState<CryptoPriceHistory[]>([]);

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

  useEffect(() => {
    if (selectedCrypto) {
      axios
        .get(`https://api.coincap.io/v2/assets/${selectedCrypto.id}/history?interval=d1`)
        .then((response) => {
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

  const handleSelectCrypto = (crypto: Crypto) => {
    setSelectedCrypto(crypto);
  };

  const handleClearSelectedCrypto = () => {
    setSelectedCrypto(null);
    setPriceHistory([]);
  };

  return (
    <AppContext.Provider
      value={{
        cryptoData,
        selectedCrypto,
        priceHistory,
        onSelectCrypto: handleSelectCrypto,
        onClearSelectedCrypto: handleClearSelectedCrypto,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };