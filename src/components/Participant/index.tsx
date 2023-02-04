import { Text, View } from "react-native";
import { Button } from "../Button";
import { styles } from "./styles";

export function Participant() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Luca Destefano Boer</Text>
    </View>
  )
}