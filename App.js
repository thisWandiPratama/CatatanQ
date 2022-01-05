// import React from 'react'
// import { View, Text} from 'react-native'
// import TampilanAwal from './src/components/auth/tampilanAwal'
// import Masuk from './src/components/auth/masuk'

// const App = () => {
//   return (
//     <View
//     style={{
//       flex:1
//     }}
//     >
//       {/* <TampilanAwal /> */}
//       <Masuk/>
//     </View>
//   )
// }

// export default App




// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TampilanAwal from './src/components/auth/tampilanAwal'
import Masuk from './src/components/auth/masuk'
import Daftar from './src/components/auth/daftar'
import Home from './src/components/home/home'
import AddCatatan from './src/components/home/addtcatatan'
import Profile from './src/components/home/profile'
import Detail from './src/components/home/detailcatatan'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="tampilanawal" component={TampilanAwal} />
        <Stack.Screen name="masuk" component={Masuk} />
        <Stack.Screen name="daftar" component={Daftar} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="addcatatan" component={AddCatatan} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;