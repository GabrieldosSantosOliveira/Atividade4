import { FC } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { useInput } from '../../hooks/useInput';
import { Theme } from '../../styles/Theme';

export const Input: FC<TextInputProps> = ({ style, ...props }) => {
  const { setIsFocus } = useInput();
  const { colors, fonts, fontSize } = Theme;
  return (
    <TextInput
      style={[
        {
          flex: 1,
          fontFamily: fonts.Lexend[600],
          fontSize: fontSize[14],
          color: colors.white,
        },
        style,
      ]}
      placeholderTextColor={colors.inputPlaceholder}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      {...props}
    />
  );
};
