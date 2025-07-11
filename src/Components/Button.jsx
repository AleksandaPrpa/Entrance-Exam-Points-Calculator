function Button({
  children,
  onClick,
  width = "w-auto",
  hoverBgColor = "bg-slate-700",
}) {
  return (
    <button
      onClick={onClick}
      className={`relative cursor-pointer flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-slate-600 rounded-md group ${width}`}
    >
      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-slate-800 rounded group-hover:-mr-4 group-hover:-mt-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-slate-500"></span>
      </span>
      <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-slate-800 rounded group-hover:-ml-4 group-hover:-mb-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-slate-500"></span>
      </span>
      <span
        className={`absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full ${hoverBgColor} rounded-md group-hover:translate-x-0`}
      ></span>
      <span className="relative w-full text-center text-sky-400 transition-colors duration-200 ease-in-out group-hover:text-white">
        {children}
      </span>
    </button>
  );
}

export default Button;
