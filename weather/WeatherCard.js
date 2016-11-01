import React, {
    Component
} from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';


class WeatherCard extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <View style={styles.card}>
                <Text>Howdy</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    card: {
        borderColor: '#ff0000',
        borderWidth: 1.0,
        height: 75,
        padding: 10
    }
});

export default WeatherCard;
