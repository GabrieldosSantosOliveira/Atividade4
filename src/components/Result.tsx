import { FC } from 'react';
import { View, Text, TouchableOpacity, PixelRatio } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Theme } from '../styles/Theme';
type Props = {
  handleClose: () => void;
  text: string;
};
export const Result: FC<Props> = ({ handleClose, text }) => {
  const { getPixelSizeForLayoutSize } = PixelRatio;
  const { colors, fonts, fontSize } = Theme;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          height: getPixelSizeForLayoutSize(50),
          width: '70%',
          backgroundColor: colors.inputBackground,
          borderRadius: 12,
          paddingHorizontal: 12,
          paddingVertical: 12,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontFamily: fonts.Lexend[600],
            color: colors.white,
            textAlign: 'center',
            fontSize: fontSize[14],
            paddingHorizontal: 20,
          }}
        >
          {text}
        </Text>
        <TouchableOpacity
          onPress={handleClose}
          style={{
            borderTopWidth: 1,
            borderColor: colors.button,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 5,
          }}
        >
          <Text
            style={{
              fontFamily: fonts.Lexend[600],
              color: colors.white,
              fontSize: fontSize[14],
            }}
          >
            Continuar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
