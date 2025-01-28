import React from "react";
import { useState } from "react";
import { Text, TouchableHighlight, TouchableOpacity, View } from "react-native"
import Toast from "react-native-toast-message";
import { NavigationProp } from '@react-navigation/native';
import { MultipleSelectList, SelectList } from "react-native-dropdown-select-list";
import { router } from "expo-router";

interface HomeScreenProps {
    navigation: NavigationProp<any>;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
    const [selected, setSelected] = useState("");
    const [multiSelected, setMultiSelected] = useState("");

    const data = [
        { key: '1', value: 'Dry Skin Routine' },
        { key: '2', value: 'Oily Skin Routine' },
        { key: '3', value: 'Sensitive Skin Routine' },
        { key: '4', value: 'Combination Skin Routine' },
    ]

    const data2 = [
        { key: '1', value: 'Skin barrier' },
        { key: '2', value: 'Acne' },
        { key: '3', value: 'Pigmentation' },
        { key: '4', value: 'Eczema' },
    ]
    return (
        <View style={{flex:1 , alignItems : "center" , padding : 50}}>
            <Text>Based on your skin type and condition type, we will build your care routine</Text>
            <SelectList
                boxStyles={{ width: "100%", backgroundColor: "#C9CDAF", color: "white", marginTop:40 }}
                placeholder="Select your skin type"
                dropdownStyles={{ backgroundColor:"#C9CDAF" }}
                dropdownTextStyles={{ color:"#B73450"}}
                setSelected={(val: React.SetStateAction<string>) => setSelected(val)}
                data={data}
                save="value"
            />
            <MultipleSelectList
                boxStyles={{ width: "100%", backgroundColor: "#C9CDAF", color: "white", marginTop:40 }}
                placeholder="Select your skin condition"
                dropdownStyles={{ backgroundColor:"#C9CDAF" }}
                dropdownTextStyles={{ color:"#B73450"}}
                setSelected={(val: React.SetStateAction<string>) => setMultiSelected(val)}
                data={data2}
                save="value"
                
            />
            <TouchableOpacity
                style={{
                    alignSelf: "center",
                    backgroundColor: "#B73450",
                    borderRadius: 50,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                }}
                onPress={() => {
                if (!selected) {
                    Toast.show({
                        type: "error",
                        text1: "please select skin care",
                    })
                } else {   
                    router.push({ pathname: '/skinCareDetails', params: {selected}  })
                }
            }}>
                <Text style={{color:"white"}}>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
    )
}
