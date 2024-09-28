import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#91D255',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#9F71E2',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  link: {
    color: '#9F71E2',
    textAlign: 'center',
    marginVertical: 10,
  },
   googleButton: {
    backgroundColor: '#DB4437', 
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  googleButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
 error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default styles;
