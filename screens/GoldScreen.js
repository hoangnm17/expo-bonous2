import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GoldScreen() { // Thay đổi tên component tùy ý (GameScreen, ProfileScreen)
  return (
    <View style={styles.container}>
      <Text style={styles.todoText}>TODO</Text>
      <Text style={styles.subText}>Gold Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  todoText: { fontSize: 40, fontWeight: 'bold', color: '#ff6b6b' },
  subText: { fontSize: 16, color: '#666', marginTop: 10 }
});