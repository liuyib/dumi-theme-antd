import React from 'react';
import Icon from '@ant-design/icons';

const SVGIcon: React.FC = () => (
  <svg viewBox="0 0 1920 1920" fill="currentColor">
    <path d="M822.456 787.786h33.337v447.22h168.8V168.89h196.652v1066.115h168.8V168.89h171.331V0h-738.92C605.379 0 428.73 176.659 428.73 393.85c0 217.277 176.65 393.936 393.726 393.936m949.528 650.39H523.268l193.65-193.592-119.416-119.38-397.518 397.398L597.502 1920l119.416-119.38-193.65-193.59h1248.716v-168.855Z" />
  </svg>
);

const RTLIcon: React.FC<{ className?: string }> = (props) => (
  <Icon component={SVGIcon} {...props} />
);

export default RTLIcon;
