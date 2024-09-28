import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function EnderecoScreen({ onNavigate }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Endereço</Text>
      <TextInput style={styles.input} placeholder="CEP" />
      <TextInput style={styles.input} placeholder="Endereço" />
      <TextInput style={styles.input} placeholder="Número" />
      <TextInput style={styles.input} placeholder="Complemento" />
      <TextInput style={styles.input} placeholder="Referência" />
      <TextInput style={styles.input} placeholder="Bairro" />
      <TextInput style={styles.input} placeholder="Cidade" />
      <TextInput style={styles.input} placeholder="Estado" />
      <TouchableOpacity style={styles.button} onPress={() => onNavigate('Home')}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onNavigate('Home')}>
        <Text style={styles.link}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
