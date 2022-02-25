import { TPlanet } from "../../types/global";
import data from "./data.json";

const get = async () =>
  new Promise<TPlanet[]>((resolve, _reject) => {
    resolve(data);
  });

const service = {
  get,
};

export default service;
