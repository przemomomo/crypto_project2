import React from 'react';
import { Crypto, CryptoListProps } from './interfaces';


function CryptoListItem({ crypto, onSelectCrypto }: CryptoListItemProps) {
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