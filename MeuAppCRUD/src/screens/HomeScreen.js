import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, Alert } from 'react-native';
import styles from '../styles/HomeStyle';

const HomeScreen = ({ navigation }) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('http://192.168.0.147/people')
        .then(response => response.json())
        .then(data => setPeople(data))
        .catch(error => Alert.alert('Erro', 'Não foi possível carregar os dados.'));
    };

    fetchData();

    const unsubscribe = navigation.addListener('focus', fetchData);

    return unsubscribe;
  }, [navigation]);

  const renderPerson = ({ item }) => (
    <View style={styles.personContainer}>
      <Text>Nome: {item.firstname} {item.lastname}</Text>
      <Text>Email: {item.email}</Text>
      <Button
        title="Editar"
        onPress={() => navigation.navigate('AddEdit', { person: item })}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Pessoas</Text>
      <Button
        title="Criar Nova Pessoa"
        onPress={() => navigation.navigate('Create')}
      />
      <FlatList
        data={people}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPerson}
      />
    </View>
  );
};



export default HomeScreen;