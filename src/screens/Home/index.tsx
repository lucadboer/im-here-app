import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export default function Home() {

  function handleAddName() {
    console.log('add name');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Luca's Party</Text>
      <Text style={styles.guests}>Convidados :)</Text>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder='Quem é você?' />

        <TouchableOpacity style={styles.button} onPress={handleAddName}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant />
    </View>
  );
}