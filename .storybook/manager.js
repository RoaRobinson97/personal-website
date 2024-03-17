import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://robinsonroa.dev/icon.svg',
    brandTitle: 'Robinson Roa Components',
    brandUrl: 'https://robinsonroa.dev',
  },
});
