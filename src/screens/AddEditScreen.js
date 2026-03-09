import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import styles from '../styles/AddEditStyle';

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
      const response = await fetch(`http://192.168.0.147/people/${person.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedPerson),
      });

      if (response.ok) {
        Alert.alert('Sucesso', 'Informações salvas com sucesso!');
        navigation.goBack();
      } else {
        Alert.alert('Erro', 'Falha ao salvar as informações.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro de conexão.');
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
      <Button
        title="Salvar"
        onPress={handleSave}
      />
    </View>
  );
};

export default AddEditScreen;