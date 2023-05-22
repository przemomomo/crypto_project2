import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { Crypto } from './interfaces';

interface CryptoListItemProps {
  crypto: Crypto;
}

function CryptoListItem({ crypto }: CryptoListItemProps) {
  const { onSelectCrypto } = useContext(AppContext);

  const handleMoveToTop = () => {
    onSelectCrypto(crypto);
  };

  return (
    <div className="crypto-list-container">
      <h2 className="crypto-name">{crypto.name}</h2>
      <p className="crypto-price">Current Price: {crypto.priceUsd}</p>
      <button className="crypto-button" onClick={handleMoveToTop}>
        Check
      </button>
    </div>
  );
}

export default CryptoListItem;