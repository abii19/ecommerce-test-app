//small - large

export const Button = (props) => {
  const { title, onClick, type = "button", size } = props;
  return (
    <button
      type={type}
      className={`border border-black ${
        size === "small" ? "p-2 text-sm" : "p-4 text-lg"
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
