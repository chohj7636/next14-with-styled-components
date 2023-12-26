'use client';

import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
  width: 100%;
  position: fixed;

  top: 0px;
  left: 0px;

  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.11);
`;

const MainMenu = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  padding-left: 60px;
  padding-right: 60px;

  background-color: white;
`;

const Navigation = () => {
  return (
    <Component>
      <MainMenu>test navi</MainMenu>
    </Component>
  );
};

export default Navigation;
