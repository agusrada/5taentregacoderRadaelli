import { StyleSheet, Text, View, FlatList } from "react-native";
import ProductItem from "../components/productItem";
import { useState, useEffect } from "react";
import Search from "../components/search";
import { useSelector, useDispatch } from "react-redux";

const ProductsByCategorieScreen = ({navigation, route}) => {

  const [productsByCategory, setProductsByCategory] = useState([])
  const [search, setSearch] = useState('')



  const category = useSelector(state=>state.shopReducer.categorySelected)
  const productsFilteredByCategory = useSelector(state=>state.shopReducer.productsFilteredByCategory)

  useEffect(()=>{
      const productsFiltered = productsFilteredByCategory.filter(
          product=>product.title.toLowerCase().includes(search.toLowerCase()))
      setProductsByCategory(productsFiltered)
  },[category, search])

  const renderProductItem = ({item}) => (
      <ProductItem product={item} navigation={navigation}  />
  )

  const onSearch = (search) => {
      setSearch(search)
  }

  return(
      <>
      <Search onSearchHandlerEvent ={onSearch} />
      <FlatList
          data={productsByCategory}
          renderItem={renderProductItem}
          keyExtractor={item=>item.id}
      />
      </>
  )
}


export default ProductsByCategorieScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
  },
});
