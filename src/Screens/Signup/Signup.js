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
    Alert
} from 'react-native';
import { Item, Picker, Icon } from 'native-base'
import { FacebookLogin,DropDown } from '../../Component/index'
import firebase from 'react-native-firebase'
export default class Login extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            address: '',
            name: '',
            blood:'Blood Group'
        }
    }
    signup = () => {
        console.log(this.state);
        this.props.navigation.navigate('Login');
        let obj = {
            userName:this.state.name,
            email:this.state.email,
            Address:this.state.address,
            bloodGroup:this.state.bloodGroup,
            password:this.state.password,
        }
        firebase.auth().createUserWithEmailAndPassword(obj.email, obj.password).then((res) => {
            firebase.database().ref("/").child("Users").push(obj);
            console.log('SignUp Successfulyy')
        })
        .catch((error) => {
            console.log(error)
        });
        console.log(obj)
    }
    render() {
        let array = ['Blood Group','A+','B+','C+','O+','A-','B-','C-','O-'];
        return (
            <View >
                <View style={{ marginTop: '15%', alignItems: 'center' }}>
                    <Image
                        style={{ width: 80, height: 80, marginBottom: '1%' }}
                        source={require('../../Images/user.png')}
                    />
                    <Text style={{ marginBottom: '2%', fontSize: 25 }}> Sign Up </Text>
                    <TextInput placeholder='name' type='text' onChange={(e) => this.setState({ name: e.target.value })} style={{ border: 'none', borderBottomWidth: 1, width: '80%' }} />
                    <TextInput placeholder='email' type='email' onChange={(e) => this.setState({ email: e.target.value })} style={{ border: 'none', borderBottomWidth: 1, width: '80%' }} />
                    <TextInput placeholder='Address' type='text' onChange={(e) => this.setState({ address: e.target.value })} style={{ border: 'none', borderBottomWidth: 1, width: '80%' }} />
                    <DropDown array={array} blood={this.state.blood} onValueChange={(itemValue, itemIndex) =>
                            this.setState({ blood: itemValue })
                    }/>
                    <TextInput placeholder='Password' secureTextEntry={true} type='password' onChange={(e) => this.setState({ password: e.target.value })} style={{ border: 'none', borderBottomWidth: 1, width: '80%', marginBottom: '3%' }} />
                    <Button title='SignUp' onPress={() => this.signup()} color='black' />
                </View>
                <Text style={{ alignSelf: 'center', marginTop: '5%' }}> ───────────  OR  ───────────</Text>
                <View style={{ alignItems: 'center' }}>
                    <FacebookLogin />
                </View>
                <Text style={{ marginTop: '5%', alignSelf: 'center' }} onPress={() => this.props.navigation.navigate('Login')}>Already Have Account</Text>
            </View>
        )
    }
}