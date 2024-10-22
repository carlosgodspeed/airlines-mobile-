import { ImageBackground, View, Text } from 'react-native';
import { styles } from './styles';
import { Flight } from '@/components/flight';
import { Ionicons } from "@expo/vector-icons";

export function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground 
       style={styles.header}
       source={require("@/assets/cover.png")}>
       <Text style={styles.title}>Cartão de Embarque</Text>
       <Text style={styles.subtitle}>Falta 20 dias Para sua Viagem ok</Text>
      </ImageBackground>

      <View style={styles.ticket}>
        <View style={styles.content}>
          <View style={styles.flight}>
            <Flight label="São Paulo" value="GRU" />
            <View style={styles.duration}>
              <Ionicons name="airplane-sharp" size={32} />
              <Text style={styles.hours}> 9h 45min</Text>
            </View>
            <Flight label="Paris" value="CDG" />
          </View>
        </View>
      </View>
    </View>
  );
}
