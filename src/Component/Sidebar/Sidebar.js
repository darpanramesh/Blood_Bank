import React, { Component } from 'react';
import { Image } from 'react-native'
import { View, Text, List, ListItem, Button, Icon } from 'native-base';

export default class SideBar extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', }}>
                <View >
                    <View >
                        <Button transparent>
                        <Icon onPress={this.props.onClose} name='arrow-back' />
                        </Button>
                        <Image source={require('../../Images/img.jpg')} style={{width:60,height:60,marginLeft:'40%'}} />
                        <Text style={{textAlign:'center',fontSize:20}}>Darpan Goswami</Text>
                    </View>
                </View>
                <Text style={{ alignSelf: 'center',marginTop:10}}>───────────────────────</Text>

                {/* <Text onPress={this.props.onClose}><Image style={{width:40, height:40}} src={require('../../Images/back.png')} />Back</Text> */}
                <List style={{ backgroundColor: 'white' }}>
                    <ListItem>
                        <Text onPress={() => this.props.path.navigate("Home")}>Dashboard</Text>
                    </ListItem>
                    <ListItem>
                        <Text onPress={() => this.props.path.navigate("MyRequest")}>My Request</Text>
                    </ListItem>
                    <ListItem>
                        <Text onPress={() => this.props.path.navigate("PostRequirement")}>Post Requirement</Text>
                    </ListItem>
                    <ListItem>
                        <Text onPress={() => this.props.path.navigate("Notification")}>Notification</Text>
                    </ListItem>
                    <ListItem>
                        <Text onPress={() => this.props.path.navigate("Home")}>Setting</Text>
                    </ListItem>
                    <ListItem>
                        <Text onPress={() => this.props.path.navigate("Login")}>LogOut</Text>
                    </ListItem>
                </List>
            </View>
        )
    }
}