import {FlatList, View} from 'react-native'
import CardView from '../components/CardView'

export default function FilmScreen({route}) {


const films = route.params.films

  return(
    <View >
    <FlatList
      data={films}
      renderItem={({item: {image, title, year}}) => (
        <CardView image={image} title={title} year={year}/>
      )}
    />
  </View>
  )
}


