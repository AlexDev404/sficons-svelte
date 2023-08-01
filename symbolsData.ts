// symbolsData.ts
export interface DataItem {
  symbol: string;
  name: string;
}

import data from "./mappings.json";

// Ensure data is an array of DataItem objects
if (!Array.isArray(data)) {
  throw new Error("Invalid data format in mappings.json. Expected an array.");
}

export default data as DataItem[];
