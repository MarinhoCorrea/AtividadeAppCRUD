import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/CreateStyle';
import { createPerson } from '../api/service';

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
      await createPerson(newPerson);
      Alert.alert('Sucesso', 'Pessoa criada com sucesso!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Falha ao criar a pessoa.');
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
      <TouchableOpacity
        style={styles.button}
        onPress={handleSave}
      >
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateScreen;
