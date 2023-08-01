<script lang="ts">
  /**
   * The San Francisco Icon set for Svelte
   *
   * @param {Object} $$props - The component properties.
   * @prop {boolean} rounded - Whether the icon should have rounded corners.
   * @prop {"ultralight" | "thin" | "light" | "regular" | "medium" | "semibold" | "bold" | "heavy" | "black"} weight - The font weight of the icon.
   * @prop {SFIcon_} icon - The name of the icon to display.
   */
  import { type FontWeight, type FontSize, type SFIcon_ } from "./types.d";
  import { getSFSymbolByName } from "./index";
  import "./style.css";

  // Props
  /** @descriptions HTML/CSS class */
  let className: string = "";
  export { className as class }; // Declare the class prop with a default value

  /**
   * @description Whether the icon should have rounded corners
   * @type {boolean}
   */
  export let rounded: boolean = true;

  /**
   * @description The font weight of the icon
                  Possible values include:
                  - `ultralight`
                  - `thin`
                  - `light`
                  - `regular`
                  - `medium`
                  - `semibold`
                  - `bold`
                  - `heavy`
                  - `black`
   * @type {FontWeight}
   */
  export let weight: FontWeight = "regular"; // ultralight, thin, light, regular, medium, semibold, bold, heavy, black

  /** @description The font size of the icons
                   Possible values include:
                   - `xs`
                   - `sm`
                   - `md`
                   - `lg`
                   - `xl`
                   - `2xl`
                   - `3xl`
                   - `4xl`
                   - `5xl`
                   - `6xl`
                   - `7xl`
                   - `8xl`
                    */
  export let size: FontSize = "3xl"; // xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl, 8xl

  /** @description The color of the icons. Only HEX color codes are supported. */
  export let color: string | undefined = undefined; // Stop complaining
  /**
   * @description The name of the icon to display. You can use [hotpot.ai](https://hotpot.ai/free-icons?s=sfSymbols) to search for some, replacing the periods (".") for dashes ("-")
   *
   */
  export let icon: SFIcon_;
</script>

{#if rounded}
  <!-- Rounded -->
  {#if weight == "ultralight"}
    <sFIcon
      class="text-sf-pro-rounded-ultralight text-{size} {className}"
      style="color: {color || 'currentColor'}"
    >
      {getSFSymbolByName(icon) || "???"}
    </sFIcon>
  {:else if weight == "thin"}
    <sFIcon
      class="text-sf-pro-rounded-thin text-{size} {className}"
      style="color: {color || 'currentColor'}"
    >
      {getSFSymbolByName(icon) || "???"}
    </sFIcon>
  {:else if weight == "light"}
    <sFIcon
      class="text-sf-pro-rounded-light text-{size} {className}"
      style="color: {color || 'currentColor'}"
    >
      {getSFSymbolByName(icon) || "???"}
    </sFIcon>
  {:else if weight == "regular"}
    <sFIcon
      class="text-sf-pro-rounded text-{size} {className}"
      style="color: {color || 'currentColor'}"
    >
      {getSFSymbolByName(icon) || "???"}
    </sFIcon>
  {:else if weight == "medium"}
    <sFIcon
      class="text-sf-pro-rounded-medium text-{size} {className}"
      style="color: {color || 'currentColor'}"
    >
      {getSFSymbolByName(icon) || "???"}
    </sFIcon>
  {:else if weight == "semibold"}
    <sFIcon
      class="text-sf-pro-rounded-semibold text-{size} {className}"
      style="color: {color || 'currentColor'}"
    >
      {getSFSymbolByName(icon) || "???"}
    </sFIcon>
  {:else if weight == "bold"}
    <sFIcon
      class="text-sf-pro-rounded-bold text-{size} {className}"
      style="color: {color || 'currentColor'}"
    >
      {getSFSymbolByName(icon) || "???"}
    </sFIcon>
  {:else if weight == "heavy"}
    <sFIcon
      class="text-sf-pro-rounded-heavy text-{size} {className}"
      style="color: {color || 'currentColor'}"
    >
      {getSFSymbolByName(icon) || "???"}
    </sFIcon>
  {:else if weight == "black"}
    <sFIcon
      class="text-sf-pro-rounded-black text-{size} {className}"
      style="color: {color || 'currentColor'}"
    >
      {getSFSymbolByName(icon) || "???"}
    </sFIcon>
  {/if}
{:else}
  <!-- Display -->
  {#if weight == "ultralight"}
    <sFIcon
      class="text-sf-pro-ultralight text-{size} {className}"
      style="color: {color || 'currentColor'}"
    >
      {getSFSymbolByName(icon) || "???"}
    </sFIcon>
  {:else if weight == "thin"}
    <sFIcon
      class="text-sf-pro-thin text-{size} {className}"
      style="color: {color || 'currentColor'}"
    >
      {getSFSymbolByName(icon) || "???"}
    </sFIcon>
  {:else if weight == "light"}
    <sFIcon
      class="text-sf-pro-light text-{size} {className}"
      style="color: {color || 'currentColor'}"
    >
      {getSFSymbolByName(icon) || "???"}
    </sFIcon>
  {:else if weight == "regular"}
    <sFIcon
      class="text-sf-pro text-{size} {className}"
      style="color: {color || 'currentColor'}"
    >
      {getSFSymbolByName(icon) || "???"}
    </sFIcon>
  {:else if weight == "medium"}
    <sFIcon
      class="text-sf-pro-medium text-{size} {className}"
      style="color: {color || 'currentColor'}"
    >
      {getSFSymbolByName(icon) || "???"}
    </sFIcon>
  {:else if weight == "semibold"}
    <sFIcon
      class="text-sf-pro-semibold text-{size} {className}"
      style="color: {color || 'currentColor'}"
    >
      {getSFSymbolByName(icon) || "???"}
    </sFIcon>
  {:else if weight == "bold"}
    <sFIcon
      class="text-sf-pro-bold text-{size} {className}"
      style="color: {color || 'currentColor'}"
    >
      {getSFSymbolByName(icon) || "???"}
    </sFIcon>
  {:else if weight == "heavy"}
    <sFIcon
      class="text-sf-pro-heavy text-{size} {className}"
      style="color: {color || 'currentColor'}"
    >
      {getSFSymbolByName(icon) || "???"}
    </sFIcon>
  {:else if weight == "black"}
    <sFIcon
      class="text-sf-pro-black text-{size} {className}"
      style="color: {color || 'currentColor'}"
    >
      {getSFSymbolByName(icon) || "???"}
    </sFIcon>
  {/if}
{/if}
