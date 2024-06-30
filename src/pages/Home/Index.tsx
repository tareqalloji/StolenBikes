import { Pagination } from "@nextui-org/react";
import { useState } from "react";
import { Get } from "../../Hooks/useBikes";
import HomeCard from "../../components/HomeCard";
import Loader from "../../components/Loader";
const Index = () => {
  const [initialFilters, setInitialFilters] = useState({
    page: 1,
    per_page: 12,
    location: "Munich",
  });
  const Bikes = Get(initialFilters);
  if (Bikes.isFetching) return <Loader />;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
        {Bikes.data.length > 0 &&
          Bikes.data.map((data: any) => <HomeCard data={data} />)}
      </div>      
    </>
  );
};

export default Index;
