const Button = ({ children, containerClass }) => {
  return (
    <div
      className={`transition duration-200 rounded-lg text-white cursor-pointer px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base ${containerClass}`}
    >
      {children}
    </div>
  );
};

export default Button;
