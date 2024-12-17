const Loader = () => {
  const word = "ChutkiLinks";

  return (
    <div className="flex justify-center items-center h-screen bg-purple-100">
      <div className="flex space-x-1">
        {word.split("").map((char, index) => (
          <span
            key={index}
            className="text-purple-600 text-4xl font-bold animate-pulse"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationDuration: "1s",
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loader;
