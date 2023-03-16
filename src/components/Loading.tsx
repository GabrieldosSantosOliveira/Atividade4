import { FC } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { Theme } from '../styles/Theme';
export const Loading: FC = () => {
  const { colors } = Theme;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
      }}
    >
      <ActivityIndicator size="small" color={colors.button} />
    </View>
  );
};
