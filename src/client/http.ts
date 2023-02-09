import { Axios, AxiosError } from "axios";
import { api } from "./api";

export const getUser = async (username: string) => {
  try {
    const { data } = await api.get(`${username}`);
    console.log({ data });

    return data;
  } catch (error) {
    const err = error as AxiosError;
    if (err?.response?.status === 404) {
      throw "404: O usuário digitado não existe";
    } else {
      throw "Não foi possível retornar um usuário";
    }
  }
};

export const getRepos = async (username: string) => {
  try {
    const { data } = await api.get(`${username}/repos`);
    return data;
  } catch (error) {
    throw "Não foi possível localizar repositórios";
  }
};
