import { ImageBackground, View, Text } from 'react-native';
import { styles } from './styles';
import { Flight } from '@/components/flight';
import { Ionicons } from "@expo/vector-icons";
import { Info } from '@/components/info';
import QRCode from 'react-native-qrcode-svg';
import { Svg, Line, Circle } from 'react-native-svg';
import { colors } from '@/styles/colors';

export function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground 
       style={styles.header}
       source={require("@/assets/cover.png")}>
       <Text style={styles.title}>Cartão de Embarque</Text>
       <Text style={styles.subtitle}>Falta 20 dias Para sua Viagem</Text>
      </ImageBackground>
      <View style={styles.ticket}>
        <View style={styles.content}>
          <View style={styles.flight}>
            <Flight label="São Paulo" value="GRU" />
            <View style={styles.duration}>
              <Ionicons name="airplane-sharp" size={32} />
              <Text style={styles.hours}> 12h 45min</Text>
            </View>
            <Flight label="Paris" value="CDG" />
          </View>
          <Text style={styles.label}>Passageiro</Text>
          <Text style={styles.name}>Carlos Henrique Silva Nascimento</Text>
          <View style={styles.details}>
            <View style={styles.inline}>
            <Info label='data' value='10 de JAN.' />
            <Info label='Embarque' value='12:00' />
            </View>
          </View>
        </View>
        <View>
          <Svg height={20} width="100%">
            <Line
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke={colors.gray[400]}
              strokeWidth={5}
              strokeDasharray="10,10"
            />
            <Circle r={8} cx="0%" cy="50%" fill={colors.black} />
            <Circle r={8} cx="100%" cy="50%" fill={colors.black} />
          </Svg>
        </View>
        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <View style={styles.inline}>
              <Info label='Voo' value='2377G' />
              <Info label='Assento' value='35' />
            </View>
            <View style={styles.inline}>
              <Info label='Terminal de Embarque' value='5' />
              <Info label='Portão' value='9' />
            </View>
          </View>
          <QRCode value='boarding code' size={130} />
        </View>
      </View>
    </View>
  );
}
