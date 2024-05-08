/* eslint-disable react/prop-types */

const Button = ({ children, onClick, className = "", disabled = false }) => {
  const buttonClassName = `font-bold font-manRope text-darkGrey px-10 py-5 ease-in-out duration-300 rounded-full font-medium  ${
    disabled ? "" : "hover:scale-105"
  } ${className}`;

  return (
    <button disabled={disabled} className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
