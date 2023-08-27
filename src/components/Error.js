import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText, data } = err;
  console.log(err);
  return (
    <div>
      <h1>Oops! {data}</h1>
      <h2>
        Error {status}: Page {statusText}{" "}
      </h2>
    </div>
  );
};

export default Error;
