import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.todoText}>TODO</Text>
      <Text style={styles.subText}>Game Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  todoText: { fontSize: 40, fontWeight: 'bold', color: '#ff6b6b' },
  subText: { fontSize: 16, color: '#666', marginTop: 10 },
});