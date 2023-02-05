import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface ParticipantProps {
  name: string;
  onRemove: (name: string) => void
}

export function Participant({ name, onRemove }: ParticipantProps) {

  function handleRemoveParticipant(nameToRemove: string) {
    onRemove(nameToRemove)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={() => {handleRemoveParticipant(name)}}>
       <Text style={styles.textButton}>-</Text>
      </TouchableOpacity>
    </View>
  )
}