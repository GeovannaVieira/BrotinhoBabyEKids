import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const topBarHeight = 60; // Estima altura da barra superior
const searchBarHeight = 50; // Estima altura da barra de busca
const categoriesHeight = 40; // Estima altura da lista de categorias
const availableHeight = screenHeight - topBarHeight - searchBarHeight - categoriesHeight; // Calcula o espaço restante para o carrossel

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Alinha os botões à direita
    marginBottom: 16,
    paddingRight: 0, // Diminui a distância do canto direito
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  searchContainer: {
    height: searchBarHeight,
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 16,
  },
  categoryList: {
    height: categoriesHeight,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  categoryItem: {
    marginRight: 15,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#9F71E2',
  },
  carousel: {
    height: availableHeight,  // Carrossel ocupa o restante da tela
  },
  carouselItem: {
    width: screenWidth,
    height: availableHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
  },
  imageTitle: {
    color: '#fff',
    fontSize: 18,
  },
  iconText: {
    fontSize: 24, // Tamanho do ícone
  },
});
