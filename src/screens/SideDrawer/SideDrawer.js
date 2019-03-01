import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';


class SideDrawer extends React.Component {

    render() {

        return (
            <View style = {[{ width: Dimensions.get('window').width * 0.8}, styles.container]}>
                <View style = {styles.title}>
                    <Text>Side drawer</Text>
                </View>
            </View>
        );
    }
}

export default SideDrawer;

const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
        backgroundColor: 'white',
        flex: 1
    },
    title: {
        margin: 20
    }
})