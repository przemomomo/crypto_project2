import React from 'react';
import { Crypto } from './types';

interface CryptoListItemProps {
  crypto: Crypto;
  onSelectCrypto: (crypto: Crypto) => void;
}

function CryptoListItem({ crypto, onSelectCrypto }: CryptoListItemProps) {
  const handleMoveToTop = () => {
    onSelectCrypto(crypto);
  };

  return (
    <div className="crypto-list-container">
      <h2 className="crypto-name">{crypto.name}</h2>
      <p className="crypto-price">Price: {crypto.priceUsd}</p>
      <button className="crypto-button" onClick={handleMoveToTop}>Check</button>
    </div>
  );
}

export default CryptoListItem;