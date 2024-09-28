import React, { useState } from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';
import DadosAcessoScreen from './screens/DadosAcessoScreen';
import TipoCadastroScreen from './screens/TipoCadastroScreen';
import EnderecoScreen from './screens/EnderecoScreen';
import styles from './styles'; // Importa o arquivo de estilos

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const renderScreen = () => {
    if (currentScreen === 'Home') {
      return <HomeScreen onNavigate={setCurrentScreen} />;
    } else if (currentScreen === 'Login') {
      return <LoginScreen onNavigate={setCurrentScreen} />;
    } else if (currentScreen === 'Cadastro') {
      return <CadastroScreen onNavigate={setCurrentScreen} />;
    } else if (currentScreen === 'DadosAcesso') {
      return <DadosAcessoScreen onNavigate={setCurrentScreen} />;
    } else if (currentScreen === 'TipoCadastro') {
      return <TipoCadastroScreen onNavigate={setCurrentScreen} />;
    } else if (currentScreen === 'Endereco') {
      return <EnderecoScreen onNavigate={setCurrentScreen} />;
    }
  };

  return <View style={styles.container}>{renderScreen()}</View>;
}
