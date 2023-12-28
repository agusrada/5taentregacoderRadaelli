import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import cart_data from '../data/cart_data.json'
import { FlatList } from 'react-native'
import CartItem from '../components/cartItem'
import { useState, useEffect } from 'react'


const CartScreen = () => {

  const[total, setTotal] =useState()

    useEffect(()=>{
        const totalCart = cart_data.reduce((accumulator, currentItem)=>(
            accumulator+=currentItem.price*currentItem.quantity
        ),0)
        setTotal(totalCart)
    },[])

  const renderCartItem =({item}) =>{
    return <CartItem item={item}/>

  }

  return (
    <View style={styles.cartContainer}>
      <FlatList
      data={cart_data}
      renderItem={renderCartItem}
      keyExtractor={item=>item.id}
      >
       
      </FlatList>
      <View style={styles.cartConfirm}>
        <Text style={styles.totalPrice}>total:${total} </Text>
        <TouchableOpacity style={styles.confirmButton} onPress={null}>
          <Text style={styles.textConfirm}>Confirmar Pedido</Text>
          
         </TouchableOpacity>

      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
  },
  cartConfirm: {
    marginBottom: 130,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  totalPrice: {
    fontSize: 16,
    
  },
  confirmButton:{
    backgroundColor: '#219ebc',
    padding:10,
    borderRadius:10,
  },
  textConfirm:{
    
    fontSize:16,
    color: '#fff'
  }  
})