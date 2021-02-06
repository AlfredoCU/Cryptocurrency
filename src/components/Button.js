import { memo } from "react";
import { string } from "prop-types";

const Button = ({ title, type }) => (
  <div className="p-2">
    <button
      type={type}
      className="transition ease-in duration-500 hover:bg-yellow-500 w-full px-5 py-2 bg-blue-500 rounded font-bold focus:outline-white"
    >
      {title}
    </button>
  </div>
);

Button.propTypes = {
  title: string.isRequired,
  type: string.isRequired
};

const ButtonMemo = memo(Button);
export { ButtonMemo as Button };
