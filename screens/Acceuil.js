import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Progress from 'react-native-progress';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Dimensions, Button, Alert } from 'react-native';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

const Acceuil = ({ navigation }) => {
  const replace = () => {
    alert('fffffff');
    navigation.navigate('zebi');
  };

  return (
    <ImageBackground
      source={require('../assets/AcceuilScreen/alten1.png')}
      resizeMode="cover"
      style={styles.image}
    >
      <StatusBar hidden />
      <View className="mt-auto pb-8 ml-24">
        <ProgressBarAnimated
          width={200}
          value={100}
          barAnimationDuration={6000}
          backgroundColorOnComplete="#6CC644"
          backgroundColor="#FF0000"
          onComplete={() => {
            console.log('zeeb');
          }}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex hya 9aadh bsh yekhou par rapport lel ecran
    width: '100%',
    height: '100%',
    //flex: 1,
    //paddingTop: 280,
    //paddingLeft: 60,
    //backgroundColor: '#ddf0e4',
    //alignement des items
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
    //flex: 1,
  },
  textinputstyle: {
    backgroundColor: '#0001',
    height: 50,
    width: 220,
    margin: 13,
    padding: 5,
    color: 'black',
    borderRadius: 5,
  },
});
export default Acceuil;
