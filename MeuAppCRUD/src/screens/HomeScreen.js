import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import styles from '../styles/HomeStyle';
import { getAllPeople, deletePerson } from '../api/service';

const HomeScreen = ({ navigation }) => {
  const [people, setPeople] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getAllPeople();
      setPeople(data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os dados.');
    }
  };

  useEffect(() => {
    fetchData();

    const unsubscribe = navigation.addListener('focus', fetchData);

    return unsubscribe;
  }, [navigation]);

  const handleDelete = async (id) => {
    Alert.alert(
      'Confirmar Exclusão',
      'Tem certeza que deseja excluir esta pessoa?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            try {
              await deletePerson(id);
              fetchData(); 
            } catch (error) {
              Alert.alert('Erro', 'Não foi possível excluir a pessoa.');
            }
          },
        },
      ]
    );
  };

  const renderPerson = ({ item }) => (
    <View style={styles.personContainer}>
      <Text>Nome: {item.firstname} {item.lastname}</Text>
      <Text>Email: {item.email}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddEdit', { person: item })}
      >
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDelete(item.id)}
      >
        <Text style={styles.buttonText}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Pessoas</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Create')}
      >
        <Text style={styles.buttonText}>Criar Nova Pessoa</Text>
      </TouchableOpacity>
      <FlatList
        data={people}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPerson}
      />
    </View>
  );
};



export default HomeScreen;