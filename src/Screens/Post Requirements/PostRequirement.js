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

import {DropDown,DrawerExample} from '../../Component/index';
export default class PostRequirement extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor() {
        super();
        this.state = {
            blood:'Blood Group',
            unit:'',
            urgency:'Urgency',
            country:'Country',
            state:'State',
            city:'City',
            hospital:'Hospital',
            relation:'Relation with patient',
            number:'Number',
            instruction:'Additional Instruction'
        }
    }
    submit = () => {
        console.log(this.state);

    }
    onValueChange= (itemValue, itemIndex) =>{
        this.setState({ language: itemValue })
    }

    render() {
        let array = ['Blood Group','A+','B+','C+','O+','A-','B-','C-','O-'];
        let urgency = ['urgency',];
        let country = ['Country',];
        let state = ['State',];
        let city = ['City',];
        let hospital = ['Hospital',];
        let relation = ['Relation with Patient',];
        return (
               <SafeAreaView style={styles.container}>
                <DrawerExample navigation={this.props.navigation} >
                <ScrollView style={styles.scrollView}>
                <View style={{ marginTop: '20%', alignItems: 'center' }}>
                    <Text style={{ marginBottom: '4%', fontSize: 25 }}> Post Requirement</Text>
                    <DropDown array={array} title={this.state.blood} onValueChange={(itemValue, itemIndex) =>
                            this.setState({ blood: itemValue })
                    }/>
                    <TextInput placeholder='Unit' type='text' onChange={(e) => this.setState({ unit: e.target.value })} style={{ border: 'none', borderBottomWidth: 1, width: '80%' }} />
                    <DropDown array={urgency} title={this.state.urgency} onValueChange={(itemValue, itemIndex) =>
                            this.setState({ urgency: itemValue })
                    }/>
                    <DropDown array={country} title={this.state.country} onValueChange={(itemValue, itemIndex) =>
                            this.setState({ country: itemValue })
                    }/>
                    <DropDown array={state} title={this.state.state} onValueChange={(itemValue, itemIndex) =>
                            this.setState({ state: itemValue })
                    }/>
                    <DropDown array={city} title={this.state.city} onValueChange={(itemValue, itemIndex) =>
                            this.setState({ city: itemValue })
                    }/>
                    <DropDown array={hospital} title={this.state.hospital} onValueChange={(itemValue, itemIndex) =>
                            this.setState({ hospital: itemValue })
                    }/>
                    <DropDown array={relation} title={this.state.relation} onValueChange={(itemValue, itemIndex) =>
                            this.setState({ relation: itemValue })
                    }/>
                    <TextInput placeholder={this.state.number} type='email' onChange={(e) => this.setState({ email: e.target.value })} style={{ border: 'none', borderBottomWidth: 1, width: '80%' }} />
                    <TextInput placeholder={this.state.instruction} type='text' onChange={(e) => this.setState({ address: e.target.value })} style={{ border: 'none', borderBottomWidth: 1, width: '80%', marginBottom:'3%' }} />
                    <Button title='Submit' onPress={() => this.submit()} color='black' />
                    </View>
                    </ScrollView>
                    </DrawerExample>
                    </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container1: {
        flex: 1,
        marginTop: '2%'
    },
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