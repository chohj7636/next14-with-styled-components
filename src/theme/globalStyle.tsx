'use client';

import { createGlobalStyle, css, DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: {
      xxs: number;
      xs: number;
      xsm: number;
      sm: number;
      md: number;
      xlg: number;
      lg: number;
      xl: number;
    };
    device: {
      desktop: string;
      bigscreen: string;
    };
    colors: {
      // primary
      primary: '#7851e7';
      purple1: '#e8dcfd';
      purple2: '#d1bafc';
      purple3: '#b597f7';
      purple4: '#9d7bf0';
      purple5: '#7851e7';

      // secondary
      orange1: '#fff2d5';
      orange2: '#ffe2ac';
      orange3: '#ffce83';
      orange4: '#ffba64';
      orange5: '#ff9931';

      green1: '#fafbc9';
      green2: '#f4f894';
      green3: '#e4ea5d';
      green4: '#ced535';
      green5: '#b0b900';

      // gray scale
      white: '#ffffff';
      grey50: '#f9f9f9';
      grey100: '#f5f5f5';
      grey200: '#eeeeee';
      grey300: '#e0e0e0';
      grey400: '#bdbdbd';
      grey500: '#9e9e9e';
      grey600: '#757575';
      grey700: '#616161';
      grey800: '#424242';
      grey900: '#333333';
      black: '#000000';

      // semantic colors
      danger1: '#feeae0';
      danger2: '#fdd1c2';
      danger3: '#fab2a2';
      danger4: '#f6938a';
      danger5: '#f16464';

      warning1: '#fef5d6';
      warning2: '#fee8ae';
      warning3: '#fcd785';
      warning4: '#f9c666';
      warning5: '#f5ab35';

      success1: '#dbfcf1';
      success2: '#b9f9e9';
      success3: '#92ecde';
      success4: '#72dbd3';
      success5: '#47c1c3';

      info1: '#cafcfd';
      info2: '#97f3fc';
      info3: '#62dff6';
      info4: '#3bc5ec';
      info5: '#00a0e1';

      heatmap01: '#f16464';
      heatmap02: '#f26e5d';
      heatmap03: '#f27857';
      heatmap04: '#f38250';
      heatmap05: '#f38b4a';
      heatmap06: '#f49543';
      heatmap07: '#f49f3d';
      heatmap08: '#f5a936';
      heatmap09: '#deae48';
      heatmap10: '#c2b15f';
      heatmap11: '#a6b575';
      heatmap12: '#8ab98c';
      heatmap13: '#6ebca3';
      heatmap14: '#52c0ba';
      heatmap15: '#47c1c3';
    };
  }
}

export const GlobalStyle = createGlobalStyle`${css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&family=Roboto:wght@400;500;700;900&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', 'Roboto', sans-serif;
    line-height: normal;
  }

  html,
  body {
    height: 100%;
    min-width: 1200px;
  }
`}
   
`;

const deviceSizes = {
  $desktop: '0px',
  $bigscreen: '1440px',
};

export const theme: DefaultTheme = {
  spacing: {
    xxs: 4,
    xs: 8,
    xsm: 12,
    sm: 16,
    md: 20,
    xlg: 24,
    lg: 40,
    xl: 60,
  },
  device: {
    desktop: `screen and (min-width: ${deviceSizes.$desktop})`,
    bigscreen: `screen and (min-width: ${deviceSizes.$bigscreen})`,
  },
  colors: {
    // primary
    primary: '#7851e7',
    purple1: '#e8dcfd',
    purple2: '#d1bafc',
    purple3: '#b597f7',
    purple4: '#9d7bf0',
    purple5: '#7851e7',

    // secondary
    orange1: '#fff2d5',
    orange2: '#ffe2ac',
    orange3: '#ffce83',
    orange4: '#ffba64',
    orange5: '#ff9931',

    green1: '#fafbc9',
    green2: '#f4f894',
    green3: '#e4ea5d',
    green4: '#ced535',
    green5: '#b0b900',

    // gray scale
    white: '#ffffff',
    grey50: '#f9f9f9',
    grey100: '#f5f5f5',
    grey200: '#eeeeee',
    grey300: '#e0e0e0',
    grey400: '#bdbdbd',
    grey500: '#9e9e9e',
    grey600: '#757575',
    grey700: '#616161',
    grey800: '#424242',
    grey900: '#333333',
    black: '#000000',

    // semantic colors
    danger1: '#feeae0',
    danger2: '#fdd1c2',
    danger3: '#fab2a2',
    danger4: '#f6938a',
    danger5: '#f16464',

    warning1: '#fef5d6',
    warning2: '#fee8ae',
    warning3: '#fcd785',
    warning4: '#f9c666',
    warning5: '#f5ab35',

    success1: '#dbfcf1',
    success2: '#b9f9e9',
    success3: '#92ecde',
    success4: '#72dbd3',
    success5: '#47c1c3',

    info1: '#cafcfd',
    info2: '#97f3fc',
    info3: '#62dff6',
    info4: '#3bc5ec',
    info5: '#00a0e1',

    heatmap01: '#f16464',
    heatmap02: '#f26e5d',
    heatmap03: '#f27857',
    heatmap04: '#f38250',
    heatmap05: '#f38b4a',
    heatmap06: '#f49543',
    heatmap07: '#f49f3d',
    heatmap08: '#f5a936',
    heatmap09: '#deae48',
    heatmap10: '#c2b15f',
    heatmap11: '#a6b575',
    heatmap12: '#8ab98c',
    heatmap13: '#6ebca3',
    heatmap14: '#52c0ba',
    heatmap15: '#47c1c3',
  },
};
