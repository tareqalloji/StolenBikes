import { BASEURL, getRequestWithParams } from "./Main";

export class Hospital {
  async Get(page: number) {
    return await getRequestWithParams(`${BASEURL}/doctors`, { page: page });
  }
}

export const HospitalInstance = new Hospital();
