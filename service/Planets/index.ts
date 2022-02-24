import data from "./data.json";

const get = async () =>
  new Promise((resolve, _reject) => {
    resolve(data);
  });

const service = {
  get,
};

export default service;
