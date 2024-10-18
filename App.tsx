import { 
  useFonts, 
  Poppins_500Medium, 
  Poppins_700Bold, 
  Poppins_400Regular, 
  Poppins_800ExtraBold
} from "@expo-google-fonts/poppins";

import { Home } from "@/app/home";

export default function App(){
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_800ExtraBold,
  })

  if (!fontsLoaded) {
    return null
  }


  return <Home/>;
}