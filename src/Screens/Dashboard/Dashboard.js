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
    TouchableOpacity
} from 'react-native';
import { Button,Container, Header, Content, Card, CardItem, Body } from 'native-base';
import { DrawerExample } from '../../Component/index'


export default class Dashboard extends React.Component {
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
    Login = () => {
        console.log(this.state)
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <DrawerExample navigation={this.props.navigation}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('PostDetail')}>
                    <Container >
                        <Content >
                            <Card >
                                <CardItem>
                                    <Body>
                                        <Text>
                                        //Your text here
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem footer>
                                    <Button style={{width:'50%',marginRight:5}} bordered success>
                                        <Text style={{textAlign:'center'}}>Volunteer</Text>
                                    </Button>
                                    <Button  style={{width:'50%'}} bordered success>
                                        <Text  style={{textAlign:'center'}}>Comment</Text>
                                    </Button>
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