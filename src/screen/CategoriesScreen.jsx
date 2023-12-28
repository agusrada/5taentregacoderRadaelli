import { StyleSheet, Text, View, FlatList } from 'react-native'
import CategoryItem from '../components/categoryItem'
import { useSelector } from 'react-redux'



const CategoriesScreen = ({navigation}) => {

  const categories = useSelector(state=>state.shopReducer.categories)

  const renderCategoryItem = ({item}) => (
      <CategoryItem category={item} navigation={navigation} />
  )

  return(
      <>
      {/* <Header title="Categorías" /> */}
      <FlatList style={styles.categories}
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={item=>item}
    />
    </>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  categories:{
    marginBottom: 100,
  }
    
})