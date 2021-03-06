import React, {Component} from 'react';
import {Text, View , Image , TouchableOpacity , Dimensions} from 'react-native';
import styles from "../styles"


export default class News extends Component {
    
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View
            style={styles.news.view}
            >
                <Text style={styles.news.title}>{this.props.title}</Text>
                <Text style={styles.news.text}>{this.props.text}</Text>
                {this.props.image ? 
                <Image source={this.props.image} style={styles.news.image}/>
                :null
                }
                <TouchableOpacity style={styles.news.touchable} onPress={() => {
                    this.props.navigation.navigate('New', {item: this.props.item});
                }}>
                    <Text style={styles.news.textButton}>Leia +</Text>
                </TouchableOpacity>
            </View>
        );
    }
}





