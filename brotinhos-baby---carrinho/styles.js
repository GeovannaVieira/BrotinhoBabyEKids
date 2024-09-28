import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#371E56',
  },
  cartItem: {
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  productInfo: {
    flex: 1,
    marginLeft: 15,
    color: '#371E56',
  },
  productName: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  color: '#371E56',
  },
  productVariation: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#9F71E2',
    marginBottom: 10,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  removeButton: {
    justifyContent: 'center',
    padding: 10,
  },
  footer: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#371E56',
  },
  checkoutButton: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#9F71E2',
    borderRadius: 10,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyCart: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  emptyText: {
    fontSize: 18,
    marginBottom: 10,
  },
  linkText: {
    fontSize: 16,
    color: '#4CAF50',
    textDecorationLine: 'underline',
  },
});
