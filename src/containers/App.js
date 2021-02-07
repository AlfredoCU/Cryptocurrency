import { useState, useEffect, useCallback } from "react";
import { Img, Form, Results } from "../components/index";
import { COINS, getCryptocurrency, getQuotation } from "../helpers/api";

const App = () => {
  const [crypto, setCrypto] = useState([]);
  const [values, setValues] = useState(null);
  const [quotation, setQuotation] = useState({});

  const valuesCoins = useCallback(
    data => {
      setValues(data);
    },
    [setValues]
  );

  useEffect(() => {
    getCryptocurrency()
      .then(data => setCrypto(data))
      .catch(error => console.error("USE_EFFECT_ERROR", error));
  }, []);

  useEffect(() => {
    if (!!values) {
      const { coin, crypto } = values;
      getQuotation(crypto, coin)
        .then(data => setQuotation(data))
        .catch(error => console.error("USE_EFFECT_ERROR", error));
    } else {
      return;
    }
  }, [values]);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
        <Img />
        <div>
          <Form coins={COINS} cryptoc={crypto} valuesCoins={valuesCoins} />
          <Results quotation={quotation} />
        </div>
      </div>
    </div>
  );
};

export { App };
