import type { Preview } from "@storybook/react";

import GlobalStyes from '../src/styles/global'
import React from "react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <GlobalStyes />
        <Story />
      </>
    )
  ],
};

export default preview;
