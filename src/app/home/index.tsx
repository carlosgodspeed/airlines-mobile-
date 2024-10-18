import { ImageBackground, View, Text } from 'react-native';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground 
       style={styles.header}
       source={require("@/assets/cover.png")}>
       <Text style={styles.title}>Cartão de Embarque</Text>
       <Text style={styles.subtitle}>Falta 20 dias Para sua Viagem</Text>

      </ImageBackground>
    </View>
  );
}
