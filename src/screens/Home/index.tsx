import { useState } from 'react';
import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export default function Home() {

  const [participants, setParticipants] = useState<string[]>([])
  const [name, setName] = useState('')

  function handleAddParticipant() {
    if (participants.includes(name)) {
      return Alert.alert("Participante existe", "Já existe esse nome na sua lista de participantes")
    }

    setParticipants(state => [...state, name])
    setName('')
    
  }

  function handleRemoveParticipant(nameToRemoved: string) {
    Alert.alert('Remover', `Remover o participante ${nameToRemoved}?`, [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => {
          setParticipants(state => state.filter(participant => participant !== nameToRemoved))
        }
      },
    ])

  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Luca's Party</Text>
      <Text style={styles.guests}>Quantidade de convidados: {participants.length}</Text>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder='Faala dele?' onChangeText={setName} value={name} />

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