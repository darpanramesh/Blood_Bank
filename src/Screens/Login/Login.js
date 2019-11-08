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
} from 'react-native';
import {FacebookLogin} from '../../Component/index'
export default class Login extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }
    Login = () =>{
        console.log(this.state);
        this.props.navigation.navigate('Home');
        // Alert.alert('Login Succesfully')
    }
    render() {
        return (
            <View style={{}}>
                <View style={{marginTop:'20%',alignItems:'center'}}>
                    <Image
                        style={{ width: 80, height: 80, marginBottom:'1%' }}
                        source={require('../../Images/user.png')}
                    />
                    <Text style={{marginBottom:'2%',fontSize:25}}> Login </Text>
                    <TextInput placeholder='email' type='text' onChange={(e)=>this.setState({email:e.target.value})} style={{border:'none',borderBottomWidth:1,width:'80%'}} />
                    <TextInput placeholder='Password' secureTextEntry={true} type='password' onChange={(e)=>this.setState({password:e.target.value})} style={{border:'none',borderBottomWidth:1,width:'80%',marginBottom:'3%'}} />
                    <Button title='Login' onPress={()=>this.Login()} color='black' />
                </View>
                <Text style={{alignSelf:'center',marginTop:'5%'}}> ───────────  OR  ───────────</Text>
                <View style={{alignItems:'center'}}>
                    <FacebookLogin />
                    {/* <PhoneAuthTest /> */}
                </View>
                <Text style={{marginTop:'5%',alignSelf:'center'}} onPress={()=>this.props.navigation.navigate('Signup')}>Create new Account</Text>
            </View>
        )
    }
}