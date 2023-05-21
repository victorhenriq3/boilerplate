import type { StorybookConfig } from "@storybook/nextjs";

// "../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)",
const config: StorybookConfig = {
  stories: ["../src/components/**/stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ['../public']
};
export default config;
