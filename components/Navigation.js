import { createStackNavigator } from '@react-navigation/stack'; 
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { useContext } from 'react';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import FilmScreen from '../screens/FilmScreen';
import TravelsScreen from '../screens/TravelsScreen';
import SnackBar from 'react-native-snackbar-component';
import { ValueContext } from './ValueContext'; 

const Stack = createStackNavigator();

export default function Navigation() {
  const { isLoggedIn } = useContext(ValueContext);
  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#008ad3' },
          headerTitleStyle: { fontWeight: '700', fontSize: 22, color: 'white' }, 
          headerTintColor: 'white',
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Viagens"
          component={TravelsScreen}
          options={{ title: 'Viagens Feitas' }}
        />
        <Stack.Screen
          name="Filmes"
          component={FilmScreen}
          options={{ title: 'Filmes Assistidos' }}
        />
      </Stack.Navigator>
      <SnackBar
        textMessage={'Login efetuado com sucesso'}
        visible={isLoggedIn}
        bottom={100}
        backgroundColor={'#008ad3'}
        messageStyle={{ fontWeight: '700',}}
        containerStyle={style.snack}
      />
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  snack: {
    marginHorizontal: 104,
    borderRadius: 25,
    
  },
});
