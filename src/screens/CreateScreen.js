import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import styles from '../styles/CreateStyle';

const CreateScreen = ({ navigation }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = async () => {
    const newPerson = {
      firstname,
      lastname,
      email,
    };

    try {
      const response = await fetch('http://192.168.0.147/people', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPerson),
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Pessoa criada com sucesso!');
        navigation.goBack();
      } else {
        Alert.alert('Erro', 'Falha ao criar a pessoa.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro de conexão.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Nova Pessoa</Text>
      <TextInput
        style={styles.input}
        placeholder="Primeiro Nome"
        value={firstname}
        onChangeText={setFirstname}
      />
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={lastname}
        onChangeText={setLastname}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button
        title="Salvar"
        onPress={handleSave}
      />
    </View>
  );
};

export default CreateScreen;
