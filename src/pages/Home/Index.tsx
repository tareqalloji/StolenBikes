import { useState } from "react";
import { Get } from "../../Hooks/useBikes";
import Loader from "../../components/Loader";
const Index = () => {
  const [initialFilters, setInitialFilters] = useState({
    page: 1,
    per_page: 2,
    location: "Munich",
  });
  const Bikes = Get(initialFilters);
  return <></>;
};

export default Index;
