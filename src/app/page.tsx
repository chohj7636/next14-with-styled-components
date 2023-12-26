'use client';

import styled, { ThemeProvider, css } from 'styled-components';
import { theme } from '@/theme/globalStyle';
import { useState } from 'react';
import Link from 'next/link';

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

export default function Home() {
  const [click, setClick] = useState(false);
  return (
    <ThemeProvider theme={{ ...theme }}>
      <div>
        <Button $active={click} onClick={() => setClick((prev) => !prev)}>
          t
        </Button>
        <Link href="/test">go test</Link>
      </div>
    </ThemeProvider>
  );
}
