import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  imagePlaceholder: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  mainImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  galleryContainer: {
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  galleryImage: {
    width: 80,
    height: 80,
    marginHorizontal: 5,
  },
  imageTitle: {
    textAlign: 'center',
    marginTop: 5,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#371E56',
  },
  price: {
    fontSize: 20,
    color: '#9F71E2',
    marginBottom: 4,
  },
  pixPrice: {
    fontSize: 18,
    color: '#8FC84C',
    marginBottom: 16,
  },
  productInfoTable: {
    marginBottom: 10,
  },
  infoRow: {
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
  },
  descriptionExpanded: {
    fontSize: 16,
    marginTop: 4,
  },
  readMore: {
    color: '#F09929',
    marginTop: 8,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  buyButton: {
    flex: 1,
    backgroundColor: '#8FC84C',
    paddingVertical: 12,
    borderRadius: 8,
    marginRight: 8,
  },
  cartButton: {
    flex: 1,
    backgroundColor: '#9F71E2',
    paddingVertical: 12,
    borderRadius: 8,
    marginLeft: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  flyout: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  flyoutTitle: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
  },
  flyoutImage: {
    width: 150,
    height: 150,
    marginBottom: 16,
    alignSelf: 'center',
  },
  variationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  variationButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  selectedVariationButton: {
    backgroundColor: '#9F71E2',
  },
  quantityControl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  quantityButton: {
    fontSize: 20,
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
  },
  completeButton: {
    backgroundColor: '#8FC84C',
    paddingVertical: 12,
    borderRadius: 8,
  },
  flyoutOverlay: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo semitransparente
},
fixedButtonContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 16,
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#fff', // Pode ser uma cor de fundo ou transparente
  borderTopWidth: 1, // Se você quiser uma linha separando do conteúdo
  borderTopColor: '#ccc',
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
  borderRadius: 20, // Faz o botão circular
  backgroundColor: '#f0f0f0', // Cor de fundo
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 8, // Espaço entre os botões
  shadowColor: '#000', // Sombra para destaque
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 2, // Sombra no Android
},

iconText: {
  fontSize: 24, // Tamanho do ícone
},

});
