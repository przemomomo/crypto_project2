import React from 'react';
import CryptoListItem from './CryptoListItem';
import { Crypto, CryptoListProps } from './interfaces';


function CryptoList({ cryptoData, onSelectCrypto }: CryptoListProps) {
  return (
    <div>
      {cryptoData.map((crypto) => (
        <CryptoListItem
          key={crypto.id}
          crypto={crypto}
          onSelectCrypto={onSelectCrypto}
        />
      ))}
    </div>
  );
}

export default CryptoList;