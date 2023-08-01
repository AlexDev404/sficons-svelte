// main.ts
import data from "./symbolsData";
import { SvelteComponent } from "svelte";

const nameToSymbolLookup: Record<string, string> = {};

// Populate the lookup object for faster access
for (const item of data) {
  nameToSymbolLookup[item.name] = item.symbol;
}

// Fast and optimized function to get the symbol based on the name
export function getSFSymbolByName(name: string): string | undefined {
  return nameToSymbolLookup[name];
}

// Define the props interface for the SFIcon component
interface SFIconProps {
  icon: string;
  class?: string;
  size?: string;
  weight?: string;
  color?: string;
  rounded?: boolean;
}

// Define the SFIcon component
export default class SFIcon extends SvelteComponent<SFIconProps> {}