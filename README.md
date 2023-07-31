# sficons-svelte
Apple San Francisco Icons for Svelte

## Installation

```shell
npm install @alexdev404/sficons-svelte
```

## Usage

```html
<script>
import SFIcon from "@alexdev404/sficons-svelte"
</script>

<SFIcon icon="video-circle-fill" />
<SFIcon rounded icon="video-circle-fill" />
<SFIcon rounded weight="ultralight" icon="video-circle-fill" />
```

## `SFIcon` Properties

```html
<SFIcon
  icon="video-circle-fill"
  class="bg-gold"
  size="2x"
  color="#ff0000"
  rounded={true | false}
/>
```

## Searching for icons
There aren't really great ways of searching through this but you can totally use the code completion feature on VSCode to search for what you are looking for.
![image](https://github.com/AlexDev404/sficons-svelte/assets/34188635/dfa7c09a-89d3-4502-ac1f-b70417921aa8)
Or you can just use a web-based searching tool like [andrewtavis/sf-symbols-online/](https://github.com/andrewtavis/sf-symbols-online/blob/master/README_dark.md] or (hotpot.ai)[https://hotpot.ai/free-icons?s=sfSymbols]

## Props and their corresponding descriptions
* `icon`: icon from the [SFIcons gallery](https://hotpot.ai/free-icons?s=sfSymbols]
* `class`: `string` values `${your preffered any css class}`
* `size`: `string` values `xs`, `sm`, `lg` or `2x`, `3x`, `4x`, ..., `${number}x`
* `color`: `string` icon color, default `currentColor`
* `rounded`: `boolean` whether you want the icon to be rounded or not
