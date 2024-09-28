import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function HomeScreen({ onNavigate }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo</Text>
      <TouchableOpacity style={styles.button} onPress={() => onNavigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onNavigate('Cadastro')}>
        <Text style={styles.buttonText}>Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}
