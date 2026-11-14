import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {FontAwesome6} from "@expo/vector-icons/";

const styles = StyleSheet.create({
    parent: {
        backgroundColor: 'white',
        borderColor: '#0B3C5D',
        borderWidth: 3,
        borderRadius: 20,
        margin: 10,
        overflow: 'hidden',
        elevation: 8,
    },
    child: {
        backgroundColor: '#0B3C5D',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        paddingVertical: 8,
    },
    image: {
        width: '100%',
        height: 300,
    },
    desc: {
        borderTopWidth: 4,
        borderColor: '#F4B942',
        color: '#333333',
        textAlign: 'center',
        fontSize: 18,
        padding: 10,
    },
});
const Boat = ({name, description, icon_name, icon_color, poster, name_color}) => {
    return (
        <View style={styles.parent}>
            <Text style={[styles.child, {color: name_color}]}>
                <FontAwesome6 name={icon_name} size={30} color={icon_color} />
                {name}
            </Text>

            <Image source={poster} style={styles.image} />
            <Text style={styles.desc}>
                {description}
            </Text>

        </View>
    );
};

export default Boat;
