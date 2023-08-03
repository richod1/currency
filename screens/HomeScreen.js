import React,{ useLayoutEffect } from 'react'
import {Text,View,Image,TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable'
import SignUpScreen from "./SignUpScreen"
import SignOnScreen from "./SignOnScreen"

const HomeScreen=()=>{
    const today=new Date();
    const navigation=useLayoutEffect();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        })
    },[]);
    return(
        <>
<SafeAreaView className="flex-1 relative bg-white h-[100%]">
<Animatable.View iterationCount={"infinite"} animation={"pulse"}
easing="ease-in-out" className="flex-row px-6 mt-12 items-center 
justify-center justify-center space-x-1"
>
    <View className="w-10 h-10 bg-block rounded-full items-center justify-center">
        <Text className="text-white text-[28px] font-semibold text-center">
        ₵-
        </Text>
    </View>
    <Text>₵urrency</Text>
    </Animatable.View>
<View className="mt-[150px] space-y-3 px-6">
    <Text className="text-[34px] font-semibold text-center text-[#030514e8]">Save,Transfer Cash the</Text>
    <Text className="text-[34px] font-semibold text-center text-[#05081d]">Smart Way</Text>
</View>
<View className="mt-12 space-y-3 px-6">
    <Text className="text-[18px] text-grey-700">
        Save,send and invest cash with  ₵urrency,the only wealth management app you need</Text>
</View>
<View className="mt-[110px] justify-center items-center flex-row space-x-1">
    <Animatable.Image animation={"fadeIn"} easing="ease-in-out" source={{uri:"https://thumbnail.imgbin.com/0/3/4/imgbin-ghanaian-cedi-computer-icons-symbol-saudi-riyal-Reki904UfaKNdk6jWrYCympbC_t.jpg"}} className="w-5 h-5 object-cover"/>
    <Animatable.Image animation={"fadeIn"} easing="ease-in-out" source={{uri:"https://thumbnail.imgbin.com/0/3/4/imgbin-ghanaian-cedi-computer-icons-symbol-saudi-riyal-Reki904UfaKNdk6jWrYCympbC_t.jpg"}} className="w-5 h-5 object-cover"/>
    <Animatable.Image animation={"fadeIn"} easing="ease-in-out" source={{uri:"https://thumbnail.imgbin.com/0/3/4/imgbin-ghanaian-cedi-computer-icons-symbol-saudi-riyal-Reki904UfaKNdk6jWrYCympbC_t.jpg"}} className="w-5 h-5 object-cover"/>

</View>
<View className="flex-row mt-[150px] items-center justify-center space-x-2">
    <TouchableOpacity onPress={()=>navigation.navigate("SignOnScreen")}>
        <View className="w-[150px] h-[45px] bg-[#06071e] items-center justify-center rounded-[20px]">
            <Text className="text-white text-[15px] text-center">LOG IN</Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.navigate("SignUpScreen")}>
        <View className="w-[150px] h-[45px] bg-[#06071e] items-center justify-center rounded-[20px]">
            <Text className="text-white text-[15px] text-center">SIGN UP</Text>
        </View>
      </TouchableOpacity>
</View>
<TouchableOpacity>
    <View className="mt-[76px] space-y-3 px-6 items-center justify-center">
        <Text className="text-[10px] text-gray-700">
        © {today.getFullYear()}  Developed by Degraft Frimpong
        </Text>
    </View>
</TouchableOpacity>
</SafeAreaView>
</>

    ) 
}

export default HomeScreen;