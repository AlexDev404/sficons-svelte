// main.ts
import data from "./symbolsData";
import SFIcon from "./SFIcon.svelte";

const nameToSymbolLookup: Record<string, string> = {};

// Populate the lookup object for faster access
for (const item of data) {
  nameToSymbolLookup[item.name] = item.symbol;
}

// Fast and optimized function to get the symbol based on the name
export function getSFSymbolByName(name: string): string | undefined {
  return nameToSymbolLookup[name];
}

// Define the SFIcon component
export default SFIcon;
