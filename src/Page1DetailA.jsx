import { useHistory, useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  const { state } = useLocation();
  console.log(location);
  console.log(state);
  const history = useHistory();
  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1DetailAです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
