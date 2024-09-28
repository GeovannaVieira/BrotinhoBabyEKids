import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper'; // Certifique-se de que o pacote está instalado
import styles from '../styles'; // Importa o arquivo de estilos

export default function TipoCadastroScreen({ onNavigate }) {
  const [tipoCadastro, setTipoCadastro] = useState('fisica'); // Estado para armazenar o tipo de cadastro
  const [dados, setDados] = useState({}); // Estado para armazenar os dados de cadastro
  const [sexo, setSexo] = useState(''); // Estado para armazenar o sexo

  const handleSubmit = () => {
    console.log('Dados enviados:', { ...dados, sexo });
    onNavigate('Endereco'); // Navega para a tela de Endereço após envio
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tipo de Cadastro</Text>
      <View>
        <Text>Pessoa Física</Text>
        <RadioButton
          value="fisica"
          status={tipoCadastro === 'fisica' ? 'checked' : 'unchecked'}
          onPress={() => setTipoCadastro('fisica')}
        />
        <Text>Pessoa Jurídica</Text>
        <RadioButton
          value="juridica"
          status={tipoCadastro === 'juridica' ? 'checked' : 'unchecked'}
          onPress={() => setTipoCadastro('juridica')}
        />
      </View>

      {tipoCadastro === 'fisica' && (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Nome completo"
            onChangeText={(text) => setDados({ ...dados, nome: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="CPF"
            onChangeText={(text) => setDados({ ...dados, cpf: text })}
          />

          <Text>Sexo</Text>
          <RadioButton.Group onValueChange={setSexo} value={sexo}>
            <View>
              <Text>Masculino</Text>
              <RadioButton value="masculino" />
              <Text>Feminino</Text>
              <RadioButton value="feminino" />
            </View>
          </RadioButton.Group>

          <TextInput
            style={styles.input}
            placeholder="Celular"
            onChangeText={(text) => setDados({ ...dados, celular: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Telefone Fixo"
            onChangeText={(text) => setDados({ ...dados, telefoneFixo: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Data de nascimento"
            onChangeText={(text) => setDados({ ...dados, dataNascimento: text })}
          />
        </View>
      )}

      {tipoCadastro === 'juridica' && (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Nome completo"
            onChangeText={(text) => setDados({ ...dados, nome: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="CNPJ"
            onChangeText={(text) => setDados({ ...dados, cnpj: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Razão Social"
            onChangeText={(text) => setDados({ ...dados, razaoSocial: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Inscrição Estadual"
            onChangeText={(text) => setDados({ ...dados, inscricaoEstadual: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Celular"
            onChangeText={(text) => setDados({ ...dados, celular: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Telefone Fixo"
            onChangeText={(text) => setDados({ ...dados, telefoneFixo: text })}
          />
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onNavigate('Home')}>
        <Text style={styles.link}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
