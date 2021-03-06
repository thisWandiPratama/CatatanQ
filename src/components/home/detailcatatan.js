import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        const { title, deskripsi } = this.props.route.params;
        return (
            <View
                style={styles.container}
            >
                <Image
                    source={{ uri: "https://i.ibb.co/cFB8jX2/header.png" }}
                    style={styles.header}
                />
                <TouchableOpacity onPress={() => this.props.navigation.navigate("profile")} style={styles.boxlogo}>
                    <Image
                        source={{ uri: "https://i.ibb.co/7GXXKtk/roda.png" }}
                        style={styles.settingheader}
                    />
                </TouchableOpacity>
                {/* <Image
                    source={{ uri: "https://i.ibb.co/56H2LGH/images-1.png" }}
                    style={styles.note}
                /> */}
                <View style={{
                    position: 'absolute',
                    height: Dimensions.get('window').height,
                    width: Dimensions.get('window').width,
                }}>
                    <View style={{
                        marginTop: Dimensions.get('window').height / 4 + 20,
                        marginLeft: 40,
                        marginRight: 40,
                        marginBottom: 40,
                        flex: 1
                    }}>
                        <View style={{
                            height: Dimensions.get('window').height,
                            width: "100%",
                        }}>
                            <Text 
                            style={{
                                textAlign:'center',
                                fontWeight:'bold',
                                fontSize: 20,
                                color:'#000'
                            }}
                            >{title}</Text>
                            <View style={{
                                marginTop: 50,
                                height: 199,
                                width: "100%",
                                backgroundColor: "#C4C4C4",
                                flexDirection: 'row',
                                borderRadius: 10,
                                padding: 10
                            }}>
                                <Text>{deskripsi}</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        height: Dimensions.get('window').height / 3,
        width: Dimensions.get('window').width,
    },
    settingheader: {
        height: 35,
        width: 35
    },
    boxlogo: {
        position: 'absolute',
        right: 3,
        top: 3
    },
    note: {
        height: Dimensions.get('window').height / 2,
        width: Dimensions.get('window').width,
        resizeMode: 'contain',
        marginLeft: 8
    },
    boxAdd: {
        width: 60,
        height: 60,
        backgroundColor: "#F55F44",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        position: 'absolute',
        bottom: 5,
        right: Dimensions.get('window').width / 2.5
    },
    titleAdd: {
        color: "#702C1F",
        fontSize: 40
    }
})

export default Home;
