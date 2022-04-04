import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import  FontAwesomeGallery from "react-native-vector-icons/FontAwesomeGallery ";

export default function BottomTabs() {
    return (
      <View
        style={{
           flexDirection: "row",
           margin: 10,
            marginHorizontal: 30,
           justifyContent: "space-between",
        }}
      >
       <Icon icon="home" text="Home" />
       <Icon icon="search" text="Browse" />
       <Icon icon="shopping-bag" text="Grocery" />
       <Icon icon="receipt" text="Orders" />
       <Icon icon="user" text="Account" />
    
      </View>
    );
}
const Icon = (props) => (
    <TouchableOpacity>
     <View>
        <FontAwesomeGallery 
          name={props.icon}
          size={25}
          style={{
            marginBottom: 3,
            alignSelf: "center",
          }}
        />
        <Text>{props.text}</Text>
     </View>
    </TouchableOpacity>
    );
  