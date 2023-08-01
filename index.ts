// main.ts
import data from "./symbolsData";
import { type FontWeight, type FontSize, type SFIcon_ } from "./types.d";
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
  icon: SFIcon_;
  class?: string;
  size?: FontSize;
  weight?: FontWeight;
  color?: string;
  rounded?: boolean;
}

// Define the SFIcon component
export default class SFIcon extends SvelteComponent<SFIconProps> {}