import React from 'react';
import { AppProvider } from './AppContext';
import CryptoList from './CryptoList';
import CryptoDetails from './CryptoDetails';

function App() {
  return (
    <AppProvider>
      <div className="container">
        <h1>Cryptocurrencies</h1>
        <div className="crypto-details">
          <CryptoDetails />
        </div>
        <div className="crypto-list">
          <CryptoList />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;