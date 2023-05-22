import React, { useContext } from 'react';
import CryptoListItem from './CryptoListItem';
import { AppContext } from './AppContext';
import { Crypto } from './interfaces';

function CryptoList() {
  const { cryptoData } = useContext(AppContext);

  return (
    <div>
      {cryptoData.map((crypto) => (
        <CryptoListItem key={crypto.id} crypto={crypto} />
      ))}
    </div>
  );
}

export default CryptoList;