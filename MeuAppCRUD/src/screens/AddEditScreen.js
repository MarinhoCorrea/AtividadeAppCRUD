import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/AddEditStyle';
import { updatePerson } from '../api/service';

const AddEditScreen = ({ route, navigation }) => {
  const { person } = route.params;
  const [firstname, setFirstname] = useState(person.firstname);
  const [lastname, setLastname] = useState(person.lastname);
  const [email, setEmail] = useState(person.email);

  const handleSave = async () => {
    const updatedPerson = {
      ...person,
      firstname,
      lastname,
      email,
    };

    try {
      await updatePerson(person.id, updatedPerson);
      Alert.alert('Sucesso', 'Informações salvas com sucesso!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Falha ao salvar as informações.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Informações</Text>
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

export default AddEditScreen;