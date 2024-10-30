import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function ProductDetails({ route }) {
  const { product } = route.params;

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Button title="Add to Cart" onPress={() => alert('Added to cart!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, alignItems: 'center' },
  image: { width: 150, height: 150, marginBottom: 16 },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  price: { fontSize: 20, color: 'green', marginBottom: 8 },
  description: { fontSize: 16, color: 'gray', textAlign: 'center', marginBottom: 16 }
});
