const Counts = (props: any) => {
  return (
    <>
      <div className="grid grid-cols-3 pt-5 gap-4">
        <div className="h-20 bg-white shadow-md flex items-center justify-between px-5 rounded-sm">
          <p className="text-black text-lg">NON</p>
          <p className="py-4 text-primary text-2xl">{props.stats.data.non}</p>
        </div>
        <div className="h-20 bg-white shadow-md flex items-center justify-between px-5 rounded-sm">
          <p className="text-black text-lg">STOLEN</p>
          <p className="py-4 text-primary text-2xl">
            {props.stats.data.stolen}
          </p>
        </div>
        <div className="h-20 bg-white shadow-md flex items-center justify-between px-5 rounded-sm">
          <p className="text-black text-lg">PROXIMITY</p>
          <p className="py-4 text-primary text-2xl">
            {props.stats.data.proximity}
          </p>
        </div>
      </div>
    </>
  );
};

export default Counts;
