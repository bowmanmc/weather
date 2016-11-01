import React, {Component} from 'react';
import {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

import WeatherCard from './WeatherCard';


export default class Application extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            pinned: [{
                idx: 0,
                zip: '45458',
                name: 'Centerville, Ohio',
                forecast: {
                    main: 'Clouds',
                    description: 'few clouds',
                    temp: 45.7
                }
            }, {
                idx: 1,
                zip: '45431',
                name: 'Beavercreek, Ohio',
                forecast: {
                    main: 'Clouds',
                    description: 'few clouds',
                    temp: 54.7
                }
            }]
        }

        this.setState = this.setState.bind(this);
    }

    render() {
        return (
            <View style={styles.application}>
                <WeatherCard key="current" info="current" />
                {
                    this.state.pinned.map(pin => {
                        return (
                            <WeatherCard key={pin.idx} info={pin} />
                        );
                    })
                }
            </View>
        );
    }
}

const baseFontSize = 16;

const styles = StyleSheet.create({
    application: {
        flex: 1,
        backgroundColor: '#222222',
        paddingTop: 30
    }
});
