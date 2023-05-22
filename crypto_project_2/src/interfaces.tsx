interface Crypto {
    id: string;
    name: string;
    priceUsd: number;
  }
  
  interface CryptoListProps {
    cryptoData: Crypto[];
    onSelectCrypto: (crypto: Crypto) => void;
  }
  
  interface CryptoDetailsProps {
    selectedCrypto: Crypto | null;
    onClearSelectedCrypto: () => void;
  }
  
  interface CryptoPriceHistory {
    priceUsd: number;
    time: number;
  }
  
  export { Crypto, CryptoListProps, CryptoDetailsProps, CryptoPriceHistory };