import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';



class TampilanAwal extends React.Component {



  getToken = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@tokenlogin')
      jsonValue != null ? JSON.parse(jsonValue) : null;
      if (jsonValue !== null) {
        console.log(jsonValue)
        this.props.navigation.replace("home")
      } else {
        this.props.navigation.replace("masuk")
      }
    } catch (e) {
      console.log(e)
    }
  }



  componentDidMount() {
    setTimeout(() => {
      this.getToken()
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container} >
        <Image
          source={{
            uri: 'https://i.ibb.co/8Ddf831/kisspng-vector-graphics-royalty-free-pencil-cartoon-5c0ca74a56dd02-1.png'
          }}
          style={styles.logo}
        />

        <Text
          style={styles.title}
        >KegiatanQ</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    height: '80%',
    width: '100%',
    resizeMode: 'contain',
    top: 0
  },
  title: {
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontStyle: 'italic'

  }
})

export default TampilanAwal