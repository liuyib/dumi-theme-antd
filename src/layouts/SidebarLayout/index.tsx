import { css } from '@emotion/react';
import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import CommonHelmet from '../../common/CommonHelmet';
import Content from '../../slots/Content';
import Sidebar from '../../slots/Sidebar';

const useStyle = () => {
  return {
    mainWrap: css`
      display: flex;
      margin-top: 40px;
      min-height: calc(100vh - 40px - 64px);
    `,
  };
};

const SidebarLayout: FC<PropsWithChildren> = ({ children }) => {
  const style = useStyle();
  return (
    <main css={style.mainWrap}>
      <CommonHelmet />
      <Sidebar />
      <Content>{children}</Content>
    </main>
  );
};

export default SidebarLayout;
