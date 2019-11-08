import React, { Component } from 'react';
import { StyleSheet, SafeAreaView,ScrollView } from 'react-native';
import { View, Drawer, Card, CardItem, Container, Header,Icon, Left, Body, Button, Title, Text, Right } from 'native-base';
import {SideBar} from '../index'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class DrawerExample extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    static navigationOptions = {
        header: null
    };
    closeDrawer() { this.drawer._root.close() };

    openDrawer() {
        this.drawer._root.open()
    };
    render() {

        return (
                <Drawer ref={(ref) => { this.drawer = ref; }}
                    content={<SideBar path={this.props.navigation} navigator={this.navigator} onClose={() => this.closeDrawer()} />}
                >
                    <Header style={{backgroundColor:'#840300'}}>
                        <Left>
                            <TouchableOpacity></TouchableOpacity>
                            <Button onPress={() => this.openDrawer()} transparent>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title style={{ textAlign: 'center' }}>Blood Bank</Title>
                        </Body>
                    </Header>
                    <ScrollView style={styles.scrollView}>
                        <View style={{ marginTop: '1%' }}>
                            {this.props.children}
                        </View>
                    </ScrollView>
                </Drawer>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 1,
    },
    text: {
        fontSize: 42,
    },
    parent: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
});