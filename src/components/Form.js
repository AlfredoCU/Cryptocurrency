import { memo, useState } from "react";
import { arrayOf, shape, string, func } from "prop-types";
import { Select } from "./Select";
import { Button } from "./Button";
import { useForm } from "../hooks/useForm";

const Form = ({ coins, cryptoc, valuesCoins }) => {
  const [inputs, handleInputChange, reset] = useForm({ coin: "", crypto: "" });

  const [error, setError] = useState(false);

  const { coin, crypto } = inputs;

  const submit = e => {
    e.preventDefault();

    if ((coin.trim() === "") | (crypto.trim() === "")) {
      setError(true);
      return;
    }

    valuesCoins(inputs);
    setError(false);
    reset();
  };

  return (
    <form className="p-5 lg:p-10 text-white uppercase" onSubmit={submit}>
      <h1 className="text-2xl sm:text-3xl font-bold text-center">
        Cotizador de criptomonedas
      </h1>
      <Select
        name="coin"
        value={coin}
        label="Elige tu moneda"
        elements={coins}
        handleInputChange={handleInputChange}
      />
      <Select
        name="crypto"
        value={crypto}
        elements={cryptoc}
        label="Elige tu criptomoneda"
        handleInputChange={handleInputChange}
      />
      {error && (
        <p className="text-center font-light bg-red-700 rounded p-1 m-2">
          Los campos están vacíos
        </p>
      )}
      <Button type="submit" title="Cotizar" />
    </form>
  );
};

Form.propTypes = {
  coins: arrayOf(
    shape({
      Id: string.isRequired,
      Name: string.isRequired,
      FullName: string.isRequired
    }).isRequired
  ),
  cryptoc: arrayOf(
    shape({
      Id: string.isRequired,
      Name: string.isRequired,
      FullName: string.isRequired
    }).isRequired
  ),
  valuesCoins: func.isRequired
};

const FormMemo = memo(Form);
export { FormMemo as Form };
