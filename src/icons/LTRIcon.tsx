import React from 'react';
import Icon from '@ant-design/icons';

const SVGIcon: React.FC = () => (
  <svg viewBox="0 0 1920 1920" fill="currentColor">
    <path d="M306.205 1607.01h1290.597l-193.598 193.603L1522.588 1920 1920 1522.577l-397.412-397.423-119.384 119.387 193.598 193.604H306.205v168.864Zm389.661-819.34h33.35v447.153h168.86V168.865h196.722v1065.958h168.86V168.865h171.393V0H695.866C478.712 0 302 176.632 302 393.792c0 217.245 176.712 393.877 393.866 393.877" />
  </svg>
);

const LTRIcon: React.FC<{ className?: string }> = (props) => (
  <Icon component={SVGIcon} {...props} />
);

export default LTRIcon;
