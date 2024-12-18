import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const dummyQuestions = [
  {
    id: 1,
    question: 'What is React Native?',
    options: ['A Framework', 'A Library', 'A Tool'],
    answer: 0,
  },
  {
    id: 2,
    question: 'Which language does React Native use?',
    options: ['Python', 'JavaScript', 'Java'],
    answer: 1,
  },
];

const QuizScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleOptionPress = (index) => {
    if (index === dummyQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion < dummyQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {dummyQuestions[currentQuestion].question}
      </Text>
      {dummyQuestions[currentQuestion].options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => handleOptionPress(index)}
        >
          <Text>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  question: { fontSize: 20, marginBottom: 20 },
  option: { padding: 10, backgroundColor: '#ddd', marginBottom: 10, borderRadius: 5 },
});

export default QuizScreen;
