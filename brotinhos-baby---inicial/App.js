import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, SafeAreaView, ScrollView, TextInput, Dimensions } from 'react-native';
import { styles } from './styles';

const screenWidth = Dimensions.get('window').width;

const images = [
  { id: '1', uri: 'https://cdn.awsli.com.br/1920x1920/2007/2007122/banner/banner-site--3--h96362rilw.png', title: 'Nebulizador Portátil' },
  { id: '2', uri: 'https://cdn.awsli.com.br/1920x1920/2007/2007122/banner/banner-site-2-lxpytk.png', title: 'Frete Grátis' },
  { id: '3', uri: 'https://cdn.awsli.com.br/1920x1920/2007/2007122/banner/banner-site--1--1w0xizqzmk.png', title: 'Nosewash' },
  { id: '4', uri: 'https://cdn.awsli.com.br/1920x1920/2007/2007122/banner/banner-site-1-2-ybcehh.png', title: 'Saúde e Bem Estar' },
  { id: '5', uri: 'https://cdn.awsli.com.br/1920x1920/2007/2007122/banner/pagina-livros-koivjp.jpg', title: 'Livros Educativos' },
];

const categories = [
  'Marcas', 'Alimentação', 'Brinquedos', 'Calçados', 'Cuidados',
  'Enxoval', 'Livros', 'Ofertas', 'Passeio', 'Quarto', 'Segurança'
];

export default function HomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  // Função para avançar para a próxima imagem
  const goToNextImage = () => {
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
  };

  // Efeito para trocar as imagens automaticamente
  useEffect(() => {
    const interval = setInterval(goToNextImage, 10000); // Muda de imagem a cada 10 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, [currentIndex]);

  const renderImage = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={{ uri: item.uri }} style={styles.carouselImage} />
      <View style={styles.imageOverlay}>
        <Text style={styles.imageTitle}>{item.title}</Text>
      </View>
    </View>
  );

  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem}>
      <Text style={styles.categoryText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Botões de Carrinho e Perfil */}
      <View style={styles.topButtonsContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Carrinho')}>
          <Text style={{ fontSize: 24 }}>🛒</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Perfil')}>
          <Text style={{ fontSize: 24 }}>👤</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Procure algo..." />
      </View>

      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderCategory}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.categoryList}
      />

      {/* Carrossel com rolagem automática */}
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderImage}
        keyExtractor={(item) => item.id}
        style={styles.carousel}
        onMomentumScrollEnd={(event) => {
          const index = Math.floor(event.nativeEvent.contentOffset.x / screenWidth);
          setCurrentIndex(index); // Atualiza o índice atual quando o usuário arrasta manualmente
        }}
      />
    </SafeAreaView>
  );
}
