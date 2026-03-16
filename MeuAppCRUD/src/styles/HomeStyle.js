import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#e0e0e0', 
  },
  title: {
    fontSize: 28,
    fontWeight: '300',
    marginBottom: 24,
    marginTop: 30,
    color: '#333333', 
    letterSpacing: 0.5,
  },
  personContainer: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#cccccc', 
    backgroundColor: '#f0f0f0', 
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#666666', 
    padding: 12,
    borderRadius: 25, 
    marginTop: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#333333', 
    padding: 12,
    borderRadius: 25,
    marginTop: 8,
    alignItems: 'center',
  },
});

export default styles;