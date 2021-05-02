import styles from "./index.module.scss";

const Button = ({
  text = "Select",
  type = "button",
  onClick = () => {},
  className = "",
  ...props
}) => {
  return (
    <button
      {...props}
      type={type}
      onClick={onClick}
      className={`${styles.customizedBtn} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
