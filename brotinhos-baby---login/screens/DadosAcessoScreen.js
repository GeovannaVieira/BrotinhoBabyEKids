import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles';

export default function DadosAcessoScreen({ route, onNavigate }) {
  const { email } = route.params;
  const [emailConfirm, setEmailConfirm] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirm, setSenhaConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (email !== emailConfirm) {
      setError('Os e-mails não coincidem.');
    } else if (senha !== senhaConfirm) {
      setError('As senhas não coincidem.');
    } else {
      console.log('Cadastro realizado com sucesso:', email, senha);
      onNavigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados para Acesso</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        editable={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme seu e-mail"
        value={emailConfirm}
        onChangeText={setEmailConfirm}
      />
      <TextInput
        style={styles.input}
        placeholder="Crie uma senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme sua senha"
        secureTextEntry
        value={senhaConfirm}
        onChangeText={setSenhaConfirm}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onNavigate('Home')}>
        <Text style={styles.link}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
