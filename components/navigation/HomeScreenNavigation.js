// import "react-native-gesture-handler";
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import HomeScreen from "../../app/HomeScreen";
// import TaskScreen from "../../app/TaskScreen";

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="HomeScreen">
//         <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "Task List" }} />
//         <Stack.Screen name="TaskScreen" component={TaskScreen} options={{ title: "Add New Task" }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from '../../app/HomeScreen';
// import TaskScreen from '../../app/TaskScreen';
// import CourseDetailScreen from '../../app/CourseDetailScreen';

// const Stack = createStackNavigator();

// const HomeScreenNavigation = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Task" component={TaskScreen} />
//       <Stack.Screen name="CourseDetails" component={CourseDetailScreen} />
//     </Stack.Navigator>
//   );
// };

// export default HomeScreenNavigation;
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../app/HomeScreen';
import TaskScreen from '../../app/TaskScreen';
import CourseDetailScreen from '../../app/CourseDetailScreen';
import QuizScreen from '../../app/QuizScreen';
import LoginScreen from '../../app/login';

const Stack = createStackNavigator();

const HomeScreenNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Task" component={TaskScreen} />
      <Stack.Screen name="CourseDetails" component={CourseDetailScreen} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
    </Stack.Navigator>
  );
};

export default HomeScreenNavigation;
