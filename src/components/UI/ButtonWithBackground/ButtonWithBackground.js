import React from 'react';
import { 
    TouchableOpacity, 
    TouchableNativeFeedback, 
    Text, 
    View, 
    StyleSheet,
    Platform 
} from 'react-native';

const buttonWithBackground = (props) => {

    const content = (
        <View style = {[styles.button, {backgroundColor: props.color}, (props.disabled) ? styles.disabled : null ]}>
            <Text style = {[styles.text, (props.disabled) ? styles.disabledText : null]}>
                { props.children }
            </Text>
        </View>
    );

    if (props.disabled) {
        return content;
    }

    if (Platform.OS === 'android') {
        return (
            <TouchableNativeFeedback onPress = {props.onPress}>
                { content }
            </TouchableNativeFeedback>
        );
    }
    else {
        return (
            <TouchableOpacity onPress = {props.onPress}>
                { content }
            </TouchableOpacity>
        );
    }
}

export default buttonWithBackground;

const styles = StyleSheet.create({

    button: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white'
    },
    text: {
        color: 'white'
    },
    disabled: {
        backgroundColor: '#eee',
        borderColor: '#aaa'
    },
    disabledText: {
        color: '#aaa'
    }
})