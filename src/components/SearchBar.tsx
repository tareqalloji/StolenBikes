import { Autocomplete, AutocompleteItem, Avatar } from "@nextui-org/react";
import { useState } from "react";
import { RiSearchEyeLine } from "react-icons/ri";
import { GetByTitle } from "../Hooks/useBikes";
import { useNavigate } from "react-router-dom";
import EmptyImage from "../assets/EmptyImage.svg";

const SearchBar = () => {
  const [initialFilters, setInitialFilters] = useState("");
  const Bikes = GetByTitle(initialFilters);
  const navigate = useNavigate();
  return (
    <>
      <p className="text-2xl mb-5">Search for stolen Bikes</p>
      <Autocomplete
        variant="flat"
        label="Find Bikes"
        isLoading={Bikes.isFetching}
        startContent={<RiSearchEyeLine className="text-xl" />}
        onInputChange={async (e) => {
          await setInitialFilters(e);
          Bikes.refetch();
        }}
        placeholder="Search for Bikes..."
        listboxProps={{
          emptyContent: Bikes.isFetching ? "Loading..." : "No cases found.",
        }}
      >
        {initialFilters != "" &&
          Bikes?.data &&
          Bikes?.data?.map((item: any) => {
            return (
              <AutocompleteItem
                key={item.id}
                textValue={item.title}
                onClick={() => {
                  navigate(`/Case/${item.id}`);
                  setInitialFilters("");
                }}
              >
                <div className="flex gap-2 items-center">
                  <Avatar
                    alt={item.title}
                    className="flex-shrink-0"
                    size="sm"
                    src={item.large_img ? item.large_img : EmptyImage}
                  />
                  <div className="flex flex-col">
                    <span className="text-small">{item.title}</span>
                    <span className="text-tiny text-default-400">
                      {item.description}
                    </span>
                  </div>
                </div>
              </AutocompleteItem>
            );
          })}
      </Autocomplete>
    </>
  );
};

export default SearchBar;
