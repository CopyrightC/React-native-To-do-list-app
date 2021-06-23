import React from "react";
import {View , Text, StyleSheet, TouchableOpacity} from "react-native";



export default function Tasks (props) {
    return(
        <View style = {styles.item}>        
            <View style = {styles.itemMain}>
                <TouchableOpacity style = {styles.square}>

                </TouchableOpacity>
                <Text style = {styles.txt}>{props.text}</Text>
            </View>
            <View style = {styles.select}></View>
        </View>

    )

}

const styles = StyleSheet.create({
    item : {
        backgroundColor : "#E3E9EE",
        padding : 15,
        borderRadius : 10,
        flexDirection : "row",
        alignItems : "center",
        justifyContent : "space-between",
        marginBottom : 20,
    },

    itemMain : {
        flexDirection : "row",
        alignItems : "center",
        flexWrap : "wrap",
    },

    square : {
        width : 20,
        height : 20,
        backgroundColor : "#8BBBCB",
        borderRadius : 5,
        marginRight : 15,
    },
    select : {
        width : 12,
        height : 12,
        borderColor : "#997980",
        borderWidth : 2,
        borderRadius : 4,
        
    },
    txt : {
        maxWidth : "80%"
    }
})