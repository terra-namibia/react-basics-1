import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>UrlParameterです</h1>
      <p>id: {id}です</p>
      <p>query: {query.get("name")}です</p>
    </div>
  );
};
