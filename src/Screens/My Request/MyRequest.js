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
    Button,
    TouchableOpacity
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import { DrawerExample } from '../../Component/index'


export default class MyRequest extends React.Component {
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
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('MyPosts')}>
                    <Container>
                        <Content>
                            <Card>
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
                    </TouchableOpacity>
                </DrawerExample>
            </View>
        )
    }
}