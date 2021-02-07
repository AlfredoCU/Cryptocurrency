import { memo } from "react";
import { shape, string } from "prop-types";

const Results = ({ quotation }) => (
  <>
    {Object.keys(quotation).length !== 0 && (
      <div className="px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 text-center p-2">
          <div className="bg-white rounded-full border-4 border-yellow-500 mx-1 my-2 pt-2">
            <p className="text-base lg:text-lg">{quotation.Price}</p>
            <p className="text-sm pb-2">El precio</p>
          </div>
          <div className="bg-white rounded-full border-4 border-red-500 mx-1 my-2 pt-2">
            <p className="text-base lg:text-lg">{quotation.Highday}</p>
            <p className="text-sm pb-2">Precio más alto del día</p>
          </div>
          <div className="bg-white rounded-full border-4 border-blue-500 mx-1 my-2 pt-2">
            <p className="text-base lg:text-lg">{quotation.Logday}</p>
            <p className="text-sm pb-2">Precio más bajo del día</p>
          </div>
          <div className="bg-white rounded-full border-4 border-indigo-500 mx-1 my-2 pt-2">
            <p className="text-base lg:text-lg">{quotation.Hours24}</p>
            <p className="text-sm pb-2">Variación de las últimas 24 horas</p>
          </div>
          <div className="lg:col-span-2 bg-white rounded-full border-4 border-green-500 mx-1 my-2 pt-2">
            <p className="text-base lg:text-lg">{quotation.LastUpdate}</p>
            <p className="text-sm pb-2">Última Actualización</p>
          </div>
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
