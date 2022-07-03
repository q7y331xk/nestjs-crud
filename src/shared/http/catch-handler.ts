import { ResponseException } from "./http.types";

export const catchHandler = (err:  | string) => {
  const errArray = Array.isArray(err) && err.length <= 3;
  if (errArray) throw new ResponseException(...err);
  else throw new ResponseException(err);
};

catchHandler()