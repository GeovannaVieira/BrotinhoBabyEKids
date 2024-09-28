import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons'; // Ícones de lixeira e controle de quantidade
import styles from './styles'; // Importa os estilos

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Meia Lúdica Tam. 21 a 25 com Antiderrapante Pimpolho', price: 10.50, quantity: 1, variation: 'Panda', image: 'https://cdn.awsli.com.br/2500x2500/2007/2007122/produto/239146325/9876_2_emb-jh0nz5eucu.jpg' },
    { id: '2', name: 'Mordisco - O Monstro do Livro', price: 74.96, quantity: 2, image: 'https://cdn.awsli.com.br/2500x2500/2007/2007122/produto/236107263/mordisco-vzgkjl1ody.jpeg' },
    { id: '3', name: 'Seringa para Lavagem Nasal 20ml NoseWash Patrulha Canina', price: 26.50, quantity: 1, variation: 'Rosa', image: 'https://cdn.awsli.com.br/2500x2500/2007/2007122/produto/228989689/skye-vjbqi9cn3m.jpeg' },
  ]);

  const increaseQuantity = (id) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productVariation}>{item.variation}</Text>
        <Text style={styles.productPrice}>R${(item.price * item.quantity).toFixed(2)}</Text>
        <View style={styles.quantityControl}>
          <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
            <AntDesign name="minus" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => removeItem(item.id)} style={styles.removeButton}>
        <FontAwesome name="trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.cartTitle}>Carrinho</Text>

      {cartItems.length === 0 ? (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyText}>Seu carrinho está vazio.</Text>
          <TouchableOpacity onPress={() => {/* Lógica para navegar para a tela inicial */}}>
            <Text style={styles.linkText}>Voltar à loja</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListFooterComponent={() => (
            <View style={styles.footer}>
              <Text style={styles.totalText}>Subtotal: R${getTotalPrice()}</Text>
              <TouchableOpacity style={styles.checkoutButton}>
                <Text style={styles.checkoutButtonText}>Comprar</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default CartScreen;

