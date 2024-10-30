// screens/ProductList.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function ProductList({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await require('..//assets//data//products.json');
      setProducts(response);
    };
    fetchProducts();
  }, []);

  const renderProduct = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ProductDetails', { product: item })}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );
  
  return (
    <View style={styles.container}>
      <FlatList data={products} renderItem={renderProduct} keyExtractor={(item) => item.id.toString()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { marginBottom: 16, flexDirection: 'row', alignItems: 'center' },
  image: { width: 50, height: 50, marginRight: 16 },
  name: { fontSize: 16, fontWeight: 'bold' },
  price: { fontSize: 14, color: 'gray', alignSelf: 'right', marginLeft: 30  }
});
