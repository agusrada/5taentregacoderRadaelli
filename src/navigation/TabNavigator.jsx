import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import OrdersNavigator from "./OrdersNavigator";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";


const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.TabBar

                }}
            >
                <Tab.Screen
                 name="ShopStack" 
                 component={ShopNavigator}
                 options={{
                    tabBarIcon: ({focused})=>(
                        <Fontisto name="shopping-store" size={24} color={focused?"#219ebc":"black"} />
                    )
                 }}
                 />
                <Tab.Screen
                 name="CartStack"
                component={CartNavigator}
                options={{
                    tabBarIcon: ({focused})=>(
                        <Entypo name="shopping-basket" size={24} color={focused?"#219ebc":"black"} />
                    )
                 }}
                 
                  />
                  <Tab.Screen
                 name="OrderStack"
                component={OrdersNavigator}
                options={{
                    tabBarIcon: ({focused})=>(
                        <MaterialCommunityIcons name="order-bool-descending-variant" size={24} color={focused?"#219ebc":"black"} />
                    )
                 }}
                 
                  />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    TabBar: {
        backgroundColor:'#fdf0d5',
        shadowColor:'#ccc',
        elevation: 1,
        position:'absolute',
        left: 25,
        right: 25,
        bottom: 15,
        height: 60,
        borderRadius: 20,



    }

})