import axios from "axios";

export const Cryptocurrency = async () => {
  try {
    const url =
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

    const {
      data: { Data }
    } = await axios.get(url);

    const cryptocurrency = Data.map(item => {
      return {
        Id: item.CoinInfo.Id,
        Name: item.CoinInfo.Name,
        FullName: item.CoinInfo.FullName
      };
    });

    return cryptocurrency;
  } catch (error) {
    console.error("CRYPTOCURRENCY_ERROR", error);
  }
};
