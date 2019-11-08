import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TextInput,
    Button,
    Alert
} from 'react-native';
import { Item, Picker, Icon } from 'native-base'

export default class DropDown extends React.Component {
    render() {
        return (
            <View >
                <Item style={{ border: 'none', borderBottomWidth: 1, width: '80%' }} picker>
                    <Picker
                        selectedValue={this.props.title}
                        style={{ height: 50, width: 100 }}
                        onValueChange={this.props.onValueChange}>
                        {this.props.array.map((v, i) => {
                            return <Picker.Item key={i} label={v} value={v} />
                        })}
                    </Picker>
                </Item>
            </View>
        )
    }
}