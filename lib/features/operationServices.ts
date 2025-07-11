/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// eslint-disable-next-line react-hooks/rules-of-hooks

const getAllData = async (url: string): Promise<any> => {
  try {
    const res = await axios.get(`${url}`);

    return res.data;
  } catch (error) {
    console.error("Error fetching operations:", error);
    throw error;
  }
};

const getById = async (url: string): Promise<any> => {
  try {
    // console.log("url", url);

    const res = await axios.get(`${url}`);
    // console.log("res", res.data);
    return res.data;
  } catch (error) {
    console.error("Error fetching operations:", error);
    throw error;
  }
};

const operationsService = {
  getAllData,
  getById,
};

export default operationsService;
