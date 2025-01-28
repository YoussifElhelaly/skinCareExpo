import React from "react";
import { FlatList, Image, SafeAreaView, SafeAreaViewComponent, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import arrowIcon from '../images/Vector.png'
import image1 from '../images/skinCareProducts/image.png'
import image2 from '../images/skinCareProducts/image3.png'
import image3 from '../images/skinCareProducts/image5.png'
import image4 from '../images/skinCareProducts/image6.png'
import image5 from '../images/skinCareProducts/image7.png'
import image14 from '../images/skinCareProducts/image14.png'
import image15 from '../images/skinCareProducts/image15.png'
import image16 from '../images/skinCareProducts/image16.png'
import image17 from '../images/skinCareProducts/image17.png'
import image20 from '../images/skinCareProducts/image20.png'
import image21 from '../images/skinCareProducts/image21.png'
import image24 from '../images/skinCareProducts/image24.png'
import image22 from '../images/skinCareProducts/image22.png'
import image25 from '../images/skinCareProducts/image25.png'
import image23 from '../images/skinCareProducts/image23.png'
import image19 from '../images/skinCareProducts/image19.png'
import image10 from '../images/skinCareProducts/image10.png'
import Toast from "react-native-toast-message";
import { router, useLocalSearchParams } from "expo-router";
// import image11 from '../images/skinCareProducts/'
export default function skinCareDetails({ navigation, route }) {

    const { selected } = useLocalSearchParams();
    function handleData() {
        if (selected == "Dry Skin Routine") {
            return [
                {
                    title: "1- Face Wash",
                    image: image2,
                },
                {
                    title: "2- Toner ",
                    image: image4,
                },
                {
                    title: "3- serum",
                    image: image10,
                },
                {
                    title: "4-  Moisturizing Cream",
                    image: image3,
                },
                {
                    title: "5- Sun Creme",
                    image: image5,
                },
            ]
        } else if (selected == "Oily Skin Routine") {

            return [
                {
                    title: "1- Face Wash",
                    image: image14,
                },
                {
                    title: "2- Toner ",
                    image: image15,
                },
                {
                    title: "3- serum",
                    image: image16,
                },
                {
                    title: "4-  Moisturizing Cream",
                    image: image17,
                },
                {
                    title: "5- Sun Creme",
                    image: image5,
                },
            ]
        } else if (selected == "Sensitive Skin Routine") {

            return [
                {
                    title: "1- Face Wash",
                    image: image2,
                },
                {
                    title: "2- Toner ",
                    image: image19,
                },
                {
                    title: "3- serum",
                    image: image21,
                },
                {
                    title: "4-  Moisturizing Cream",
                    image: image24,
                },
                {
                    title: "5- Sun Creme",
                    image: image20,
                },
            ]
        } else if (selected == "Combination Skin Routine") {
            return [
                {
                    title: "1- Face Wash",
                    image: image22,
                },
                {
                    title: "2- Toner ",
                    image: image4,
                },
                {
                    title: "3- serum",
                    image: image23,
                },
                {
                    title: "4-  Moisturizing Cream",
                    image: image3,
                },
                {
                    title: "5- Sun Creme",
                    image: image25,
                },
            ]

        }
    }

    return (
        <SafeAreaView style={{
            paddingTop: 20
        }}>
            <View>
                <TouchableOpacity style={{
                    position: "absolute",
                    top: 20,
                    left: 20
                }}
                    onPress={() => {
                        router.back()
                    }}
                >
                    <Image source={arrowIcon}></Image>
                </TouchableOpacity>
            </View>

            <View style={{
                alignSelf: "center",
                backgroundColor: "#E0A1AC",
                borderRadius: 50,
                paddingHorizontal: 20,
                paddingVertical: 10,
                marginTop: 50,
            }}>

                <Text style={{ color: "#B73450" }}>{selected}</Text>
            </View>
            <View style={{
                justifyContent: "center",
                alignSelf: "baseline",
                margin: "auto",
                paddingTop: 20,
            }}>

                <FlatList
                    columnWrapperStyle={{ justifyContent: "start", gap: 10 }}
                    data={handleData()}
                    numColumns={2}
                    renderItem={({ item }) => {

                        return (
                            <View style={{
                                marginBottom: 10,
                            }}>
                                <Image source={item.image} style={{
                                    width: 120,
                                    height: 120,
                                    backgroundColor: "white",
                                    resizeMode: "contain",
                                    padding: 10,
                                    borderRadius: 20,
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 5 },
                                    shadowOpacity: 0.8,
                                    shadowRadius: 2,
                                    elevation: 5,
                                }} />
                                <Text style={{ color: "#7C944A", fontSize: 15, marginVertical: 5, width: 120 }}>{item.title}</Text>
                            </View>
                        )
                    }}
                    ListFooterComponent={
                        <TouchableOpacity
                            style={{
                                alignSelf: "center",
                                backgroundColor: "#B73450",
                                borderRadius: 50,
                                paddingHorizontal: 20,
                                paddingVertical: 10,
                            }}
                            onPress={() => {
                                Toast.show({
                                    type: "success",
                                    text1: "saved"
                                })
                            }}>
                            <Text style={{ color: "white" }}>Save Routine</Text>
                        </TouchableOpacity>
                    }
                />

            </View>

        </SafeAreaView>
    )
}