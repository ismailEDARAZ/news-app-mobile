import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './app/pages/HomePage';
import LoginPage from './app/pages/LoginPage';
import RegisterPage from './app/pages/RegisterPage';
import OnboardingPage from './app/pages/OnboardingPage';
import { NativeBaseProvider } from 'native-base';
import NewsDetailsPage from './app/pages/NewsDetailsPage';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Onboarding" component={OnboardingPage} options={{headerShown: false}} />
          <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}} />
          <Stack.Screen name="Register" component={RegisterPage} options={{headerShown: false}} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Detail" component={NewsDetailsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

