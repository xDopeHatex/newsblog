import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import News from "../../components/news/news";
import { GET_POPULAR_NEWS } from "../../redux/constants";
import { getPopularNews } from "../../redux/actions/actionCreator";

const App = () => {
  const { popularNews } = useSelector((store) => store?.news || {});
  const { popularNewsError } = useSelector((store) => store?.errors || {});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularNews());
  }, [dispatch]);

  return (
    <div>
      <News news={popularNews} error={popularNewsError} title="Popular News" />
    </div>
  );
};

export default App;
