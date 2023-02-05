import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export default function Home() {

  const participants = ['mae', 'pai', 'heloisa', 'bruno','mae', 'pai', 'heloisa', 'bruno','mae', 'pai', 'heloisa', 'bruno']

  function handleAddParticipant() {
    if (participants.includes('heloisa')) {
      return Alert.alert("Participante existe", "Já existe esse nome na sua lista de participantes")
    }
    console.log('add name');
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {Alert.alert('Participante deletado!')}
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
    console.log('remove');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Luca's Party</Text>
      <Text style={styles.guests}>Convidados :)</Text>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder='Quem é você?' />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <Participant name={item} onRemove={handleRemoveParticipant} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.empityText}>A sua lista está vazia. Adicione novos participantes!</Text>
        )}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map(participant => {
          return <Participant name={participant} onRemove={handleRemoveParticipant} />
        })}
      </ScrollView> */}
      
    </View>
  );
}