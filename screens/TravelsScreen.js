import {View, FlatList} from 'react-native'
import CardView from '../components/CardView'

export default function TravelsScreen({route}) {

  const travels = route.params.travels

  return (
    <View>
      <FlatList
        data={travels}
        renderItem={({item: {image, title, year}}) => (
          <CardView image={image} title={title} year={year}/>
        )}
      />

    </View>
  )
}