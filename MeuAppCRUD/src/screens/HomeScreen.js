import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert, TextInput, ActivityIndicator } from 'react-native';
import styles from '../styles/HomeStyle';
import { getAllPeople, deletePerson } from '../api/service';

const HomeScreen = ({ navigation }) => {
  const [people, setPeople] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllPeople();
      await new Promise(resolve => setTimeout(resolve, 2000));
      setPeople(data);
    } catch (error) {
        setError('Não foi possível carregar os dados. Verifique sua conexão.');
    } finally {
      setLoading(false);
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
        { text: 'Cancelar'},
        {
          text: 'Excluir',
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

  const filteredPeople = people.filter((person) => {
    const searchLower = searchTerm.toLowerCase();
    return person.firstname.toLowerCase().includes(searchLower) || person.lastname.toLowerCase().includes(searchLower);
  });

  const renderPerson = ({ item }) => (
    <View style={styles.personContainer}>
      <Text>Nome: {item.firstname} {item.lastname}</Text>
      <Text>Email: {item.email}</Text>
      <Text>Telefone: {item.phone}</Text>
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
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar por  nome..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#666666" style={styles.loader} />
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={fetchData}
          >
            <Text style={styles.buttonText}>Tentar Novamente</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('AddEdit')}
          >
            <Text style={styles.buttonText}>Criar Nova Pessoa</Text>
          </TouchableOpacity>
          <FlatList
            data={filteredPeople}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderPerson}
          />
        </>
      )}
    </View>
  );
};



export default HomeScreen;