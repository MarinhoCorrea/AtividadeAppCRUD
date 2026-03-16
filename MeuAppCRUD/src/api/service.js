import api from './api';

export const getAllPeople = async () => {
  try {
    const response = await api.get('/people');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPerson = async (personData) => {
  try {
    const response = await api.post('/people', personData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePerson = async (id, personData) => {
  try {
    const response = await api.put(`/people/${id}`, personData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePerson = async (id) => {
  try {
    const response = await api.delete(`/people/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
