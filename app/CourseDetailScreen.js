import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const dummyLessons = [
  { id: 1, title: 'Introduction' },
  { id: 2, title: 'Basic Setup' },
  { id: 3, title: 'First App' },
  { id: 4, title: 'State Management' },
];

const CourseDetailScreen = ({ route }) => {
  const { course } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.description}>
        Explore the course in depth. Track your progress and learn at your own pace!
      </Text>
      <FlatList
        data={dummyLessons}
        renderItem={({ item }) => (
          <View style={styles.lesson}>
            <Text>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button title="Start Course" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  description: { fontSize: 16, color: '#555', marginBottom: 20 },
  lesson: { padding: 10, backgroundColor: '#eee', marginBottom: 5, borderRadius: 5 },
});

export default CourseDetailScreen;
