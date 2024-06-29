import { useState } from "react";
import { Get } from "../../Hooks/useBikes";
import Loader from "../../components/Loader";
const Index = () => {
  const [initialFilters, setInitialFilters] = useState({
    page: 1,
    per_page: 10,
    location: "Munich",
  });
  const Bikes = Get(initialFilters);
  if (Bikes.isFetching) return <Loader />;
  return <></>;
};

export default Index;
