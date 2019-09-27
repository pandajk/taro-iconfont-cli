/* tslint:disable */
/* eslint-disable */

import Taro, { FunctionComponent } from '@tarojs/taro';

interface Props {
  name: 'alipay' | 'user' | 'setup';
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color } = props;

  // @ts-ignore
  return <iconfont name={name} size={size} color={color} />;
};

IconFont.defaultProps = {
  size: 20,
};

IconFont.config = {
  usingComponents: {
    iconfont: './tt/tt',
  },
};

export default IconFont;
