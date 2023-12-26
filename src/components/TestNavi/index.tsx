'use client';

import { theme } from '@/theme/globalStyle';
import React from 'react';
import styled, { ThemeProvider, css } from 'styled-components';

const Button = styled.button<{ $active: boolean }>`
  width: 200px;
  height: 100px;
  background-color: ${(props) => props.theme.colors.black};
  ${(props) => {
    if (props.$active) {
      return css`
        background-color: red;
      `;
    }
    return css``;
  }}
`;

const TestNavi = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button $active />
      </div>
    </ThemeProvider>
  );
};

export default TestNavi;
