import React from 'react';
import CryptoListItem from './CryptoListItem';
import Crypto from './types';

interface CryptoListProps {
  cryptoData: Crypto[];
  onSelectCrypto: (crypto: Crypto) => void;
}

function CryptoList({ cryptoData, onSelectCrypto }: CryptoListProps) {
  return (
    <div>
      {cryptoData.map(crypto => (
        <CryptoListItem key={crypto.id} crypto={crypto} onSelectCrypto={onSelectCrypto} />
      ))}
    </div>
  );
}

export default CryptoList;