import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Modal, SafeAreaView, ScrollView, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

export default function ProdutoScreen() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);
  const [quantidade, setQuantidade] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const [selectedVariation, setSelectedVariation] = useState('Coração');

  const imagensProduto = [
    { id: 0, uri: 'https://cdn.awsli.com.br/2500x2500/2007/2007122/produto/239146325/9876_1-0zb23nezeo.jpg'},
    { id: 1, uri: 'https://cdn.awsli.com.br/2500x2500/2007/2007122/produto/239146325/9876_3_emb-qorvdmo1k5.jpg', nome: 'Coração' },
    { id: 2, uri: 'https://cdn.awsli.com.br/2500x2500/2007/2007122/produto/239146325/9876_2_emb-jh0nz5eucu.jpg', nome: 'Panda' },
    { id: 3, uri: 'https://cdn.awsli.com.br/2500x2500/2007/2007122/produto/239146325/9876_1_emb-2d3r7pwh0n.jpg', nome: 'Urso' },
    { id: 4, uri: 'https://cdn.awsli.com.br/2500x2500/2007/2007122/produto/239146325/9876_4_emb-xynvz9rid0.jpg', nome: 'Urso Rosa' },
  ];

  const precoProduto = 10.50; // Preço fixo do produto
  const incrementarQuantidade = () => setQuantidade(prev => prev + 1);
  const decrementarQuantidade = () => setQuantidade(prev => (prev > 1 ? prev - 1 : 1));
  const toggleExpanded = () => setExpanded(!expanded);
  const abrirFlyout = () => setIsFlyoutVisible(true);
  const fecharFlyout = () => setIsFlyoutVisible(false);

  // Mapeia as variações para obter o índice correto da imagem
  const obterIndiceDaVariacao = (variacao) => {
    switch (variacao) {
      case 'Coração':
        return 1;
      case 'Panda':
        return 2;
      case 'Urso':
        return 3;
      case 'Urso Rosa':
        return 4;
      default:
        return 0; // Caso padrão (imagine que o índice 0 é para a imagem padrão)
    }
  };

  const selecionarVariacao = (variacao) => {
    setSelectedVariation(variacao);
    setSelectedImage(obterIndiceDaVariacao(variacao)); // Atualiza a imagem quando a variação muda
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Botões de Carrinho e Perfil */}
      <View style={styles.topButtonsContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Carrinho')}>
          <Text>🛒</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Perfil')}>
          <Text>👤</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.imagePlaceholder}>
          <Image source={{ uri: imagensProduto[selectedImage].uri }} style={styles.mainImage} />
          <Text style={styles.imageTitle}>{imagensProduto[selectedImage].nome}</Text>
        </View>
        <FlatList
          data={imagensProduto}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => setSelectedImage(item.id)}>
              <Image source={{ uri: item.uri }} style={styles.galleryImage} />
              <Text style={styles.imageTitle}>{item.nome}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.galleryContainer}
        />

        <Text style={styles.productName}>Meia Lúdica Tam. 21 a 25 com Antiderrapante Pimpolho</Text>
        <Text style={styles.price}>R$ 10,50</Text>
        <Text style={styles.pixPrice}>R$ 9,98 via Pix</Text>

        <View style={styles.productInfoTable}>
          <Text style={styles.infoRow}>Código: LGPVG79AM</Text>
          <Text style={styles.infoRow}>Marca: Pimpolho</Text>
          <Text style={styles.infoRow}>Estoque: 5 unidades</Text>
        </View>
        <Text style={styles.description}>
          Meia Lúdica Infantil Pimpolho com antiderrapante desenvolvida para garantir movimentos mais seguros, confortáveis e flexíveis...
        </Text>

        {!expanded && (
          <TouchableOpacity onPress={toggleExpanded}>
            <Text style={styles.readMore}>Ler mais</Text>
          </TouchableOpacity>
        )}

        {expanded && (
          <Text style={styles.descriptionExpanded}>
            Meia Lúdica Infantil Pimpolho com antiderrapante desenvolvida para garantir movimentos mais seguros, confortáveis e flexíveis. São meias que mantém os pezinhos do pequeno protegidos e aquecidos, proporcionando maior conforto na hora de calçar os calçados, além de esbanjar diversão com suas estampas lúdicas e coloridas. Ótimas para passear ou ficar em casa.
            Composição: Algodão (75%); Poliester (22%); Elastano (3%)
            Conteúdo da embalagem: 1 par de meia
            AVISO: AS MEIAS PIMPOLHO possuem uma modelagem pequena, sugerimos que escolha uma numeração maior que a utilizada pela criança.
          </Text>
        )}
      </ScrollView>

      {/* Botões de Compra e Carrinho - agora fixos */}
      <View style={styles.fixedButtonContainer}>
        <TouchableOpacity style={styles.buyButton} onPress={abrirFlyout}>
          <Text style={styles.buttonText}>Comprar Agora</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cartButton} onPress={abrirFlyout}>
          <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>

      {/* Flyout de Variação e Quantidade */}
      <Modal visible={isFlyoutVisible} transparent={true} animationType="slide">
        <TouchableWithoutFeedback onPress={fecharFlyout}>
          <View style={styles.flyoutOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.flyout}>
          <Text style={styles.flyoutTitle}>Escolha uma variação</Text>

          <Image source={{ uri: imagensProduto[selectedImage].uri }} style={styles.flyoutImage} />

          <View style={styles.variationContainer}>
            {['Coração', 'Panda', 'Urso', 'Urso Rosa'].map(variation => (
              <TouchableOpacity
                key={variation}
                style={[
                  styles.variationButton,
                  selectedVariation === variation && styles.selectedVariationButton,
                ]}
                onPress={() => selecionarVariacao(variation)} // Usa a nova função para selecionar a variação
              >
                <Text>{variation}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.quantityControl}>
            <TouchableOpacity onPress={decrementarQuantidade}>
              <Text style={styles.quantityButton}>-</Text>
            </TouchableOpacity>
            <Text>{quantidade}</Text>
            <TouchableOpacity onPress={incrementarQuantidade}>
              <Text style={styles.quantityButton}>+</Text>
            </TouchableOpacity>
          </View>

          {/* Exibir preço total no flyout */}
          <Text style={styles.priceTotal}>Preço Total: R$ {(precoProduto * quantidade).toFixed(2)}</Text>

          <TouchableOpacity style={styles.completeButton} onPress={fecharFlyout}>
            <Text style={styles.buttonText}>Concluir</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

