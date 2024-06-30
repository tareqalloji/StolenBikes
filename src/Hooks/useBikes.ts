import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { BikeInstance } from "../services/APIs/Bikes";
import handleError from "../utils/handleFetchError";
const Get = (params: any,) => {
    return useQuery({
        queryKey: ["Bikes"],
        queryFn: async () => await BikeInstance.Get(params).then(res => res?.data.bikes),
        onSuccess: () => toast.success('Bikes fetched successfully'),
        onError: handleError,
        refetchOnWindowFocus: false,
    })
}
const GetByTitle = (query: any) => {
    return useQuery({
        queryKey: ["Bikes", query],
        queryFn: async () => await BikeInstance.Get({ query: query }).then(res => res?.data.bikes),
        onError: handleError,
        refetchOnWindowFocus: false,
        enabled: false
    })
}
const GetById = (id: number) => {
    return useQuery({
        retry: false,
        queryKey: ["Bikes", id],
        queryFn: async () => await BikeInstance.GetById(id).then(res => res?.data),
        onSuccess: () => toast.success('Bike details fetched successfully'),
        onError: handleError,
        refetchOnWindowFocus: false
    })
}

const GetCounts = () => {
    return useQuery({
        retry: false,
        queryKey: ["BikeCounts"],
        queryFn: async () => await BikeInstance.Get_Counts().then(res => res?.data),
        onSuccess: () => toast.success('Bike counts fetched successfully'),
        onError: handleError,
        refetchOnWindowFocus: false
    })
}

export { Get, GetById, GetByTitle, GetCounts };

