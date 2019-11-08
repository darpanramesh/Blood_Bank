import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TextInput,
    Button
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import { DrawerExample } from '../../Component/index'


export default class Notification extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <DrawerExample navigation={this.props.navigation}>
                    <Container>
                        <Content>
                            <Card>
                                <CardItem header>
                                    <Text>NativeBase</Text>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                        <Text>
                                        //Your text here
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem footer>
                                    <Text>GeekyAnts</Text>
                                </CardItem>
                            </Card>
                        </Content>
                    </Container>
                </DrawerExample>
            </View>
        )
    }
}