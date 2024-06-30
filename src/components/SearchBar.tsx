import { Autocomplete, AutocompleteItem, Avatar } from "@nextui-org/react";
import { useState } from "react";
import { RiSearchEyeLine } from "react-icons/ri";
import { GetByTitle } from "../Hooks/useBikes";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [initialFilters, setInitialFilters] = useState("");
  const Bikes = GetByTitle(initialFilters);
  const navigate = useNavigate();
  return (
    <>
      <Autocomplete
        variant="flat"
        label="Find cases"
        isLoading={Bikes.isFetching}
        startContent={<RiSearchEyeLine className="text-xl" />}
        onInputChange={async (e) => {
          await setInitialFilters(e);
          Bikes.refetch();
        }}
        placeholder="Search for..."
        listboxProps={{
          emptyContent: Bikes.isFetching ? "Loading..." : "No cases found.",
        }}
      >
        {Bikes?.data &&
          Bikes?.data?.map((item: any) => {
            return (
              <AutocompleteItem
                key={item.id}
                textValue={item.title}
                onClick={() => navigate(`/Case/${item.id}`)}
              >
                <div className="flex gap-2 items-center">
                  <Avatar
                    alt={item.title}
                    className="flex-shrink-0"
                    size="sm"
                    src={item.large_img}
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
