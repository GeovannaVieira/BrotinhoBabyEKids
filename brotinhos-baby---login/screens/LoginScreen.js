import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function LoginScreen({ onNavigate }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Navegar para criar conta ou recuperar senha')}>
        <Text style={styles.link}>Esqueceu a senha ou precisa criar?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Logar com Google')} style={styles.googleButton}>
        <Text style={styles.googleButtonText}>Logar com Google</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onNavigate('Home')}>
        <Text style={styles.link}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
