import { FC, ReactNode } from 'react';
import { View, ViewProps } from 'react-native';

import { InputProvider } from '../../contexts/InputContext';
import { useInput } from '../../hooks/useInput';
import { Theme } from '../../styles/Theme';
type Props = ViewProps & {
  _focus?: ViewProps['style'];
  children: ReactNode;
};
export const RootBase: FC<Props> = ({ children, style, _focus, ...props }) => {
  const { size, colors } = Theme;
  const { isFocus } = useInput();
  return (
    <View
      style={[
        {
          height: size[52],
          backgroundColor: '#27272A',
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: colors.inputBorder,
          borderWidth: 2,
          borderRadius: 8,
          paddingHorizontal: 10,
          gap: 10,
        },
        style,
        isFocus ? _focus : {},
      ]}
      {...props}
    >
      {children}
    </View>
  );
};
export const Root: FC<Props> = ({ ...props }) => {
  return (
    <InputProvider>
      <RootBase {...props} />
    </InputProvider>
  );
};
