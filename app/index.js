// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import login from './login';
// import HomeScreen from './HomeScreen';
// import CourseDetailScreen from './CourseDetailScreen';
// import QuizScreen from './QuizScreen';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={login} />
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
//         <Stack.Screen name="Quiz" component={QuizScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// // export default App;
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// //import HomeScreenNavigation from './components/navigation/HomeScreenNavigation';
// import HomeScreenNavigation from '../components/navigation/HomeScreenNavigation';
// export default function App() {
//   return (
//     <NavigationContainer>
//       <HomeScreenNavigation />
//     </NavigationContainer>
//   );
// }
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreenNavigation from '../components/navigation/HomeScreenNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <HomeScreenNavigation />
    </NavigationContainer>
  );
};

export default App;

