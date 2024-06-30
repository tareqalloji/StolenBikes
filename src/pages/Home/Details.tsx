import { useParams } from "react-router-dom";
import { GetById } from "../../Hooks/useBikes";

const Details = () => {
  const { id } = useParams();
  const Bike = GetById(parseInt(id!));
  return (
    <>
      <pre>{JSON.stringify(Bike.data, null, 2)}</pre>
    </>
  );
};

export default Details;
