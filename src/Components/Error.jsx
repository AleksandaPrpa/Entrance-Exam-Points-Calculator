import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800 text-white px-4">
      <h1 className="text-9xl font-extrabold tracking-widest text-sky-400 animate-pulse">
        404
      </h1>
      <p className="mt-8 text-lg text-gray-300 text-center max-w-md">
        Oops! The page you're looking for doesn't exist. <br />
        It might have been moved or deleted.
      </p>

      <button
        onClick={() => navigate(-1)}
        className="cursor-pointer mt-10 px-6 py-2 text-white bg-sky-500 rounded-md shadow-md hover:bg-sky-600 transition-all duration-300 hover:scale-105"
      >
        Go Back
      </button>
    </div>
  );
}

export default Error;
