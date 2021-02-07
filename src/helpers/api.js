import axios from "axios";

export const COINS = [
  { Id: "1-USD", Name: "USD", FullName: "Dolar de Estados Unidos" },
  { Id: "2-MXN", Name: "MXN", FullName: "Peso Mexicano" },
  { Id: "3-EUR", Name: "EUR", FullName: "Euro" },
  { Id: "4-GBP", Name: "GBP", FullName: "Libra Esterlina" }
];

export const getCryptocurrency = async () => {
  try {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

    const {
      data: { Data }
    } = await axios.get(url);

    const cryptocy = Data.map(item => {
      return {
        Id: item.CoinInfo.Id,
        Name: item.CoinInfo.Name,
        FullName: item.CoinInfo.FullName
      };
    });

    return cryptocy;
  } catch (error) {
    console.error("CRYPTOCURRENCY_ERROR", error);
  }
};

export const getQuotation = async (crypto, coin) => {
  try {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;

    const {
      data: { DISPLAY }
    } = await axios.get(url);

    const quo = DISPLAY[crypto][coin];

    return {
      Price: quo.PRICE,
      Highday: quo.HIGHDAY,
      Logday: quo.LOWDAY,
      Hour24: quo.CHANGEPCT24HOUR,
      LastUpdate: quo.LASTUPDATE
    };
  } catch (error) {
    console.error("QUOTATION_ERROR", error);
  }
};
