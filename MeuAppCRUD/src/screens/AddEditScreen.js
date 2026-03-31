import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import styles from '../styles/AddEditStyle';
import { updatePerson, createPerson } from '../api/service';

const AddEditScreen = ({ route, navigation }) => {
  const { person } = route.params || {};
  const isEdit = !!person;
  const [firstname, setFirstname] = useState(person?.firstname || '');
  const [lastname, setLastname] = useState(person?.lastname || '');
  const [email, setEmail] = useState(person?.email || '');
  const [phone, setPhone] = useState(person?.phone || '');
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    if (!firstname || !lastname || !email || !phone) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios. Por favor, preencha todos os campos.');
      return;
    }

    const updatedPerson = {
      firstname,
      lastname,
      email,
      phone,
    };

    setLoading(true);
    try {
      if (isEdit) {
        await updatePerson(person.id, updatedPerson);
      } else {
        await createPerson(updatedPerson);
      }
      Alert.alert('Sucesso', isEdit ? 'Informações salvas com sucesso!' : 'Pessoa criada com sucesso!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', isEdit ? 'Falha ao salvar as informações.' : 'Falha ao criar a pessoa.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isEdit ? 'Editar Informações' : 'Criar Nova Pessoa'}</Text>
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
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={phone}
          onChangeText={setPhone}
        />

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleSave}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text style={styles.buttonText}>{isEdit ? 'Salvar' : 'Criar'}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AddEditScreen;