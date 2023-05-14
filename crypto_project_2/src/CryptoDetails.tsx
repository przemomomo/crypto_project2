import React from 'react';

interface Crypto {
  id: string;
  name: string;
  priceUsd: string;
}

interface Props {
  selectedCrypto: Crypto | null;
  onClearSelectedCrypto: () => void;
}

const CryptoDetails = ({ selectedCrypto, onClearSelectedCrypto }: Props) => {
  return (
    <>
      {selectedCrypto && (
        <div>
          <h2>{selectedCrypto.name}</h2>
          <p>Current Price: {selectedCrypto.priceUsd}</p>
          <button onClick={onClearSelectedCrypto}>Clear</button>
        </div>
      )}
    </>
  );
};

export default CryptoDetails;