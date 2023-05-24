import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import News from "../../components/news/news";
import { GET_LATEST_NEWS } from "../../redux/constants";
import { getLatestNews } from "../../redux/actions/actionCreator";

const LatestNews = () => {
  const { latestNews } = useSelector((store) => store?.news || {});
  const { latestNewsError } = useSelector((store) => store?.errors || {});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLatestNews());
  }, [dispatch]);

  return (
    <div>
      <News news={latestNews} error={latestNewsError} title="Latest News" />
    </div>
  );
};

export default LatestNews;
