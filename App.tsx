import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
export default function App() {
  const [value, setValue] = useState({ friends: 0, price: 0 });
  const [calc, setCalc] = useState({ calc: 0 });
  const handleInputChangeFriends = (e: string) => {
    setValue({ ...value, friends: Number(e) });
  };
  const handleInputChangePrice = (e: string) => {
    setValue({ ...value, price: Number(e) });
  };
  const calcular = () => {
    const { friends, price } = value;
    const calc = price / friends;
    setCalc({ calc: calc });
  };
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(e) => {
          handleInputChangePrice(e);
        }}
        placeholder="Valor"
      />
      <TextInput
        onChangeText={(e) => {
          handleInputChangeFriends(e);
        }}
        placeholder="Amigos"
      />
      <StatusBar style="auto" />
      <Text>O valor do Racha é : {calc.calc}</Text>
      <Button
        title="Caluclar Valor"
        onPress={() => {
          calcular();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
