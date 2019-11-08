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

} from 'react-native';
import { Button, Container, Header, Content, Card, CardItem, Body } from 'native-base';
import { DrawerExample } from '../../Component/index'


export default class PostDetail extends React.Component {
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
                    <Text style={{ textAlign: 'center', fontSize: 25, marginTop: 10, marginBottom: 5 }}>Post Detail</Text>
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
                                <Text style={{ alignSelf: 'center' }}>─────────────────────────────────</Text>
                                <CardItem>
                                    <View>
                                        <Text style={{ fontSize: 20 }}>Volunteers</Text>
                                            <Content style={{width:300}}>
                                                <Card >
                                                    <CardItem>
                                                        <View>
                                                        <Text>
                                                            //Your text here
                                                            </Text>
                                                        </View>
                                                    </CardItem>
                                                </Card>
                                            </Content>
                                  </View>
                                </CardItem>
                                <Text style={{ alignSelf: 'center' }}>─────────────────────────────────</Text>
                                <CardItem>
                                    <View>
                                        <Text style={{ fontSize: 20 }}>Comments</Text>
                                        <Content style={{width:300}}>
                                                <Card >
                                                    <CardItem>
                                                        <View>
                                                        <Text>
                                                            //Your text here
                                                            </Text>
                                                        </View>
                                                    </CardItem>
                                                </Card>
                                            </Content>
                                    </View>
                                </CardItem>
                                <CardItem footer>
                    <TextInput placeholder='Comment' type='text' onChange={(e) => this.setState({ name: e.target.value })} style={{height:45,borderWidth: 1, width: '87%' }} />                                   
                                    <Button style={{ width: '15%' }} bordered dark>
                                        <Text style={{ marginLeft:5 }}>Post</Text>
                                    </Button>
                                </CardItem>
                            </Card>
                        </Content>
                    </Container>
                </DrawerExample>
            </View>
        )
    }
}