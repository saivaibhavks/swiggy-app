import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "30px",
        gap: "10px",
      }}
    >
      <h1>Oops!!</h1>
      <h3>{err.status}</h3>
      <h3>{err.data}</h3>
      <h3>{err.statusText}</h3>
    </div>
  );
};

export default Error;
