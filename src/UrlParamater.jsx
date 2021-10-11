import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);

  return (
    <div>
      <h1>UrlParameterです</h1>
      <p>url parameter: {id}です</p>
      <p>query parameter: {query.get("name")}です</p>
    </div>
  );
};
