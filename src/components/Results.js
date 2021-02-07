import { memo } from "react";
import { shape, string } from "prop-types";

const Results = ({ quotation }) => (
  <>
    {Object.keys(quotation).length !== 0 && (
      <div className="px-5 lg:px-10 text-right">
        <div className="text-yellow-500 p-2">
          <p className="text-xl pb-2">
            El precio es: <strong>{quotation.Price}</strong>
          </p>
          <p>
            Precio más alto del día: <strong>{quotation.Highday}</strong>
          </p>
          <p>
            Precio más bajo del día: <strong>{quotation.Logday}</strong>
          </p>
          <p className="pt-2">
            Variación de las últimas 24 horas:{" "}
            <strong>{quotation.Hours24}</strong>
          </p>
          <p>
            Última Actualización: <strong>{quotation.LastUpdate}</strong>
          </p>
        </div>
      </div>
    )}
  </>
);

Results.propTypes = {
  quotation: shape({
    Price: string,
    Highday: string,
    Logday: string,
    Hours24: string,
    LastUpdate: string
  })
};

Results.defaultProps = {
  quotation: {}
};

const ResultsMemo = memo(Results);
export { ResultsMemo as Results };
