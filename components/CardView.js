import { View, Text, Image, StyleSheet } from 'react-native';

export default function CardView({ image, title, year }) {
  return (
    <View style={style.container}>
      <Image style={style.image} source={{uri: image}}/>
      <View style={style.textContainer}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.year}>{year}</Text>
      </View>
    </View>
  );
}


const style = StyleSheet.create({
  image: {
    width: '100%',
    height: '75%',
  },
  title: {
  fontWeight: '700',
  fontSize: 18
  },
  year: {
  fontSize: 18,
  color: '#5f5f5f'
  },
  container: {
    borderColor: '#cecece',
    borderBottomWidth: 2,
    borderRadius: 5,
    height: 350,
    paddingBottom: 20,
    margin: 16,
    maxHeight: 300,
    borderRightWidth: 1,
    borderLeftWidth: 1
  },
  textContainer: {
    width: '90%',
    height: 300,
    paddingStart: 20,
    marginVertical: 20,
  }
})