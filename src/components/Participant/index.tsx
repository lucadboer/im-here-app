import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Participant() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Luca Destefano Boer</Text>
      <TouchableOpacity style={styles.button}>
       <Text style={styles.textButton}>-</Text>
      </TouchableOpacity>
    </View>
  )
}