export const Button = ({ label, setCounter }) => {
  const updateCounter = () => {
    if (label === "INCREASE") {
      setCounter((ele) => ele + 1);
    } else if (label === "DECREASE") {
      setCounter((ele) => ele - 1);
    }
  };
  return (
    <button
      style={{
        maxWidth: "6rem",
        cursor: "pointer",
      }}
      onClick={updateCounter}
    >
      {label ? label : "Default"}
    </button>
  );
};
