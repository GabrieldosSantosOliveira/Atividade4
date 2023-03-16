import { FontAwesome5 } from '@expo/vector-icons';
import { FC, useState } from 'react';
import { Text, View, Modal, Alert } from 'react-native';

import { Button } from '../components/Button';
import { Input } from '../components/Input/Input';
import { Root } from '../components/Input/Root';
import { Result } from '../components/Result';
import { MoneyFormat } from '../services/MoneyFormat';
import { Theme } from '../styles/Theme';
export const Home: FC = () => {
  const { colors, fonts, fontSize, size } = Theme;
  const [friends, setFriends] = useState<string>('');
  const [money, setMoney] = useState<number>(0);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const handleCalculateSplitValue = () => {
    if (Number(friends) <= 0) {
      return Alert.alert('Informe um valor válido para o numero de amigos');
    }
    if (money <= 0) {
      return Alert.alert('Informe um valor válido para o valor do racha');
    }
    setIsModalVisible(true);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 10,
      }}
    >
      <Text
        style={{
          color: colors.white,
          textAlign: 'center',
          fontSize: fontSize[24],
          fontFamily: fonts.Lexend[700],
          paddingTop: size[52],
        }}
      >
        SplitCount
      </Text>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          paddingVertical: 20,
        }}
      >
        <View style={{ gap: 10, marginTop: 20 }}>
          <Root _focus={{ borderColor: '#fff' }}>
            <FontAwesome5 name="user-friends" size={24} color={colors.white} />
            <Input
              placeholder="Amigos"
              keyboardType="number-pad"
              onChangeText={setFriends}
            />
          </Root>
          <Root _focus={{ borderColor: '#fff' }}>
            <FontAwesome5
              name="money-bill-alt"
              size={24}
              color={colors.white}
            />
            <Input
              placeholder="Valor"
              keyboardType="number-pad"
              value={MoneyFormat(money)}
              onSubmitEditing={handleCalculateSplitValue}
              onChangeText={(text) =>
                setMoney(Number(text.replace(/[^0-9]/g, '')) || 0)
              }
            />
          </Root>
        </View>
        <Button text="Confirmar" onPress={handleCalculateSplitValue} />
      </View>
      <Modal transparent visible={isModalVisible}>
        <Result
          text={`O valor do racha para cada um é de ${MoneyFormat(
            money / Number(friends),
          )}`}
          handleClose={() => setIsModalVisible(false)}
        />
      </Modal>
    </View>
  );
};
