import { Card, CardBody, CardHeader, Chip, Divider } from "@nextui-org/react";
import "leaflet/dist/leaflet.css";
import moment from "moment";
import { BsCalendar2Date, BsGearWideConnected } from "react-icons/bs";
import { CiBarcode } from "react-icons/ci";
import { HiColorSwatch } from "react-icons/hi";
import { IoIosResize } from "react-icons/io";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { VscVersions } from "react-icons/vsc";
import { useParams } from "react-router-dom";
import { GetById } from "../../Hooks/useBikes";
import EmptyCase from "../../components/Details/EmptyCase";
import Map from "../../components/Details/Map";
import DetailsStats from "../../components/Details/Stats";
import Loader from "../../components/Loader";

const Details = () => {
  document.title = "Bike details";
  const { id } = useParams();
  const Bike = GetById(parseInt(id!));
  if (Bike.isFetching) return <Loader />;
  return (
    <>
      {Bike.status === "error" && <EmptyCase />}
      {Bike.status === "success" && (
        <>
          <Card className="p-4 my-4 w-2/3 mx-auto">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <div className="text-2xl uppercase font-bold">
                {Bike.data.status === "stolen" ? (
                  <Chip color="danger" size="sm">
                    Stolen
                  </Chip>
                ) : Bike.data.status === "found" ? (
                  <Chip color="success" size="sm" className="text-white">
                    Found
                  </Chip>
                ) : (
                  <Chip color="primary" size="sm">
                    {Bike.data.status}
                  </Chip>
                )}
              </div>
              <p className="text-lg uppercase font-bold">{Bike.data.title}</p>
              <small className="text-default-500 text-base">
                <span className="font-bold">{Bike.data.status}&nbsp;</span>
                {moment(new Date(Bike.data.date_stolen * 1000)).format(
                  "hh:mm A"
                )}
                <span className="font-bold">&nbsp;&nbsp;from:&nbsp;</span>
                {Bike.data.stolen_location}
              </small>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <img
                alt="Card background"
                className="object-cover rounded-xl max-w-[500px] mx-auto"
                src={Bike.data.large_img}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5">
                <DetailsStats
                  icon={<CiBarcode className="w-6 h-6" />}
                  value={Bike.data.serial}
                  label={"Serial"}
                />
                <DetailsStats
                  icon={<VscVersions className="w-6 h-6" />}
                  value={Bike.data.frame_model}
                  label={"Model"}
                />
                <DetailsStats
                  icon={<MdOutlinePrecisionManufacturing className="w-6 h-6" />}
                  value={Bike.data.manufacturer_name}
                  label={"Manufacturer"}
                />
                <DetailsStats
                  icon={<BsCalendar2Date className="w-6 h-6" />}
                  value={Bike.data.year}
                  label={"Year"}
                />
                <DetailsStats
                  icon={<IoIosResize className="w-6 h-6" />}
                  value={Bike.data.frame_size}
                  label={"Frame size"}
                />
                <DetailsStats
                  icon={<BsGearWideConnected className="w-6 h-6" />}
                  value={Bike.data.frame_material_slug}
                  label={"Frame material"}
                />
                <DetailsStats
                  icon={<HiColorSwatch className="w-6 h-6" />}
                  value={Bike.data.frame_colors.map((color: any) => (
                    <>&nbsp; {color} &nbsp;</>
                  ))}
                  label={"Primary colors"}
                />
              </div>
              <Divider className="my-4" />
              <p className="text-base uppercase font-bold">Location</p>
              {Bike?.data?.stolen_coordinates ? 
              <Map center={Bike?.data?.stolen_coordinates} />
              :
              "Not located in map."
              }
              <Divider className="my-4" />
              <p className="text-base uppercase font-bold">Description</p>
              <small className="text-default-500 text-md">
                {Bike?.data?.description}
              </small>
            </CardBody>
          </Card>
        </>
      )}
    </>
  );
};

export default Details;
