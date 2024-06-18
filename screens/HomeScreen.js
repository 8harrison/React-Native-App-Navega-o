import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import {getAllFilms, getAllTravels} from '../DATABASE(FAKE)/userdb'

export default function HomeScreen({ navigation, route }) {
  const id = route.params.user.id
  const toFilm = () => {
    navigation.navigate('Filmes', {films: getAllFilms(id)});
  };
  const toTravel = () => {
    navigation.navigate('Viagens', {travels: getAllTravels(id)});
  };

  const welcome = 'Bem-vindo(a) ao meu App';
  const description =
    'Eu sou Harrison Monteiro, tenho 31 anos e sou natural do Rio de Janeiro.' + 
    ' Meus Hobbies são: Programar, ir na academia e ler mangás e manhwas.';
  const btnFilmTxt = 'VEJA OS FILMES QUE ASSISTI'
  const btnTravelTxt = 'VEJA MINHAS VIAGENS'

  return (
    <View style={style.container}>
      <Image
        style={style.picture}
        source={{
          uri: 'https://img.quizur.com/f/img64f3dbd26f9252.33723683.jpg?lastEdited=1693703132?o=feed',
        }}
      />
      <Text style={style.welcome}>{welcome}</Text>
      <Text style={style.description}>{description}</Text>
      <Pressable style={style.btn} onPress={toFilm}>
        <Text style={style.btnTxt}>{btnFilmTxt}</Text>
      </Pressable>
      <Pressable style={style.btn} onPress={toTravel}>
        <Text style={style.btnTxt}>{btnTravelTxt}</Text>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  picture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 50,
    marginBottom: 20
  },
  welcome: {
    fontSize: 27,
    marginBottom: 20
  },
  description: {
    color: '#515151',
    width: '63%',
    marginBottom: 40
  },
  btn: {
    backgroundColor: '#008ad3',
    width: '75%',
    paddingVertical: 10,
    borderRadius: 20, 
    marginBottom: 40
  },
  btnTxt: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18
  }
});
