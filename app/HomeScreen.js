import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const dummyCategories = ['Programming', 'Math', 'Languages', 'Design'];
const dummyFeaturedCourses = [
  { id: 1, title: 'React Native Basics', progress: 40 },
  { id: 2, title: 'Learn JavaScript', progress: 75 },
  { id: 3, title: 'Intro to Python', progress: 60 },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categories</Text>
      <FlatList
        data={dummyCategories}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.category}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text style={styles.header}>Featured Courses</Text>
      <FlatList
        data={dummyFeaturedCourses}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.course}
            onPress={() => navigation.navigate('CourseDetail', { course: item })}
          >
            <Text style={styles.courseTitle}>{item.title}</Text>
            <Text>Progress: {item.progress}%</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  category: { marginRight: 10, padding: 10, backgroundColor: '#ddd', borderRadius: 5 },
  course: { marginVertical: 10, padding: 15, backgroundColor: '#f9f9f9', borderRadius: 5 },
  courseTitle: { fontSize: 16, fontWeight: 'bold' },
});

export default HomeScreen;
