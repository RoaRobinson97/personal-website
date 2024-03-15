/* eslint-disable no-constant-condition */
import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';
import icon from '../../../public/icon-256.png';
import { Image } from 'components/Image';
import { media } from 'utils/style';
import { useAppContext, useScrollToHash, useWindowSize } from 'hooks';
import { useTheme } from 'components/ThemeProvider';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;
  const { themeId } = useTheme();

  return (
    <Image
    style={{width:(isMobile)?'50px':'100px', filter: (themeId == 'light') ? 'invert(100%)': ''}}
    srcSet={
      (true ==true)
        ? [icon, icon]
        : [icon, icon]
    }
    placeholder={
      icon    }
    alt={`A set of } themed components for the aero design system`}
  />
  );
});
