import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#e0e0e0', // Cinza mais escuro
  },
  title: {
    fontSize: 28,
    fontWeight: '300',
    marginBottom: 32,
    color: '#333333', // Cinza escuro
    letterSpacing: 0.5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc', // Cinza médio
    padding: 14,
    marginBottom: 16,
    fontSize: 16,
    color: '#333333',
    backgroundColor: '#f0f0f0', // Cinza claro
    borderRadius: 8, // Mais arredondado
  },
  button: {
    backgroundColor: '#666666', // Cinza escuro
    padding: 12,
    borderRadius: 25, // Muito arredondado
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
