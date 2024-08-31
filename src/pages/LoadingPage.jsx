const LoadingPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      {/* <span className="loading loading-ball loading-lg"></span> */}
      <progress className="progress w-44"></progress>
    </div>
  );
};
export default LoadingPage;
