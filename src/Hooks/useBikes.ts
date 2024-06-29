import { useQuery } from "react-query";
import { BikeInstance } from "../services/APIs/Bikes";
import handleError from "../utils/handleFetchError"
import toast from "react-hot-toast";
const Get = (params: any) => {
    return useQuery({
        queryKey: ["Bikes"],
        queryFn: async () => await BikeInstance.Get(params).then(res => res?.data.bikes),
        onSuccess: () => toast.success('Data fetched successfully'),
        onError: handleError,
        refetchOnWindowFocus: false
    })
}
const GetById = (id: number) => {
    return useQuery({
        retry: false,
        queryKey: ["Bikes", id],
        queryFn: async () => await BikeInstance.GetById(id).then(res => res?.data),
        onSuccess: () => toast.success('Data fetched successfully'),
        onError: handleError,
        refetchOnWindowFocus: false
    })
}

export { Get, GetById };

