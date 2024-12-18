import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useRoute} from '@react-navigation/native'

const TaskScreen = () => {
  const route = useRoute();
  const { task } = route?.params || {};

  if (!task || Object.keys(task).length === 0) {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>Course not found!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.description}>{task.description}</Text>
      <Text style={styles.detail}>Created at: {task.created_at}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {  justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  description: { fontSize: 16, color: '#555', marginBottom: 16 },
  detail: { fontSize: 14, color: '#888' },
});

export default TaskScreen;
