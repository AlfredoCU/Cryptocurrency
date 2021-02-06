import { memo } from "react";
import { arrayOf, shape, string, func } from "prop-types";

const Select = ({ elements, label, name, value, handleInputChange }) => (
  <div className="my-2 p-2">
    <label className="font-light" htmlFor={name} id={`label-${name}`}>
      {label}:
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={handleInputChange}
      className="w-full p-2 my-1 rounded text-gray-500 focus:outline-none focus:ring focus:border-blue-300"
    >
      <option value="" disabled>
        Seleccione una opción
      </option>
      {elements &&
        elements.map(element => (
          <option key={element.Id} value={element.Name}>
            {element.FullName}
          </option>
        ))}
    </select>
  </div>
);

Select.propTypes = {
  elements: arrayOf(
    shape({
      Id: string.isRequired,
      Name: string.isRequired,
      FullName: string.isRequired
    })
  ).isRequired,
  label: string.isRequired,
  name: string.isRequired,
  value: string.isRequired,
  handleInputChange: func.isRequired
};

const SelectMemo = memo(Select);
export { SelectMemo as Select };
