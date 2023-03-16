import {
  useFonts,
  Lexend_700Bold,
  Lexend_600SemiBold,
} from '@expo-google-fonts/lexend';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';
import { Theme } from './src/styles/Theme';
export default function App() {
  const { colors } = Theme;
  const [isFontsLoaded] = useFonts({
    Lexend_600SemiBold,
    Lexend_700Bold,
  });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={colors.background} style="light" />
      {isFontsLoaded ? <Home /> : <Loading />}
    </SafeAreaView>
  );
}
