import { View, Image, TextInput, StyleSheet, Button } from 'react-native'; 
import { useState, useContext } from 'react';
import {Accounts} from '../DATABASE(FAKE)/userdb'
import {ValueContext} from '../components/ValueContext'


export default function LoginScreen({navigation}) {
  const [user, setUser] = useState('');
  const [key, setKey] = useState('');
  const { setIsLoggedIn } = useContext(ValueContext)
  const sigin = 'SIGN IN'
  
  const suspendSnackBar = () => {
    setIsLoggedIn(false)
  }

  const login = () => {
    Accounts.forEach((auth) => {
      if(auth.username == user.trim() && auth.password == key) {
        navigation.navigate('Home', {user: auth})
        setIsLoggedIn(true)
        setTimeout(suspendSnackBar, 1000)
        setUser('')
        setKey('')
      } 
    })
  }

  return (
    <View style={style.container}>
    <View style={style.imgContainer}>
    <Image 
    style={style.gif}
    source={{uri: 'https://media.tenor.com/42FLUDoGy58AAAAi/sonic-ring-sonic.gif'}}/>
    </View>
      <TextInput 
      style={style.input} 
      placeholder={'Username'}
      value={user}
      onChangeText={setUser}
      />
      <TextInput 
      style={[style.input, style.lastInput]} 
      placeholder={'Password'}
      value={key}
      onChangeText={setKey}
      secureTextEntry={true}
      />
      <Button title={sigin} onPress={login}/>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: '10%',
    paddingTop: 70
  },
  input: {
    borderWidth: 1,
    paddingVertical: 10,
    textAlign: 'center'
  },
  gif: {
    width: 100, 
    height: 120,
    //marginStart: '35%',
    marginBottom: 70
  },
  lastInput:{
    marginBottom: 80
  },
  imgContainer: {
    alignItems: 'center'
  }
});
