import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Animated,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const Status = ({route, navigation}) => {
  const {name, image, profileStatus, profileStatusImg} = route.params;

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);

    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }, []);

  const [progress, setProgress] = useState(new Animated.Value(0));

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ['0%', '100%'],
  });

  //swipe up
  let AnimatedHeaderValue = new Animated.Value(0);

  const Header_Max_Height = 675;
  const Header_Min_Height = 100;

  const animateHeaderBackgroundColor = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: ['transparent', 'transparent'],
    extrapolate: 'clamp',
  });

  const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: 'clamp',
  });

  const dummyData = [
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
    'item6',
    'item7',
    'item7',
    'item7',
    'item7',
    'item7',
    'item7',
    'item7',
    'item7',
    'item7',
    'item7',
    'item7',
    'item7',
    'item7',
    'item7',
    'item7',
    'item7',
    'item7',
    'item7',
    'item7',
    'item7',
  ];
  //end swipe up

  const renderAnimatedStory = () => {
    return (
      <SafeAreaView style={styles.container}>
        <Animated.View
          style={[
            styles.header,
            {
              height: animateHeaderHeight,
              backgroundColor: animateHeaderBackgroundColor,
            },
          ]}>
          {profileStatus ? (
            <>
              <Image
                source={{uri: profileStatusImg}}
                style={{
                  position: 'absolute',
                  width: '90%',
                  height: 400,
                  resizeMode: 'contain',
                }}
              />
            </>
          ) : (
            <>
              <Image
                source={image}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: 400,
                  resizeMode: 'contain',
                }}
              />
            </>
          )}
        </Animated.View>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: AnimatedHeaderValue,
                  },
                },
              },
            ],
            {useNativeDriver: false},
          )}>
          {console.log('AnimatedHeaderValue', AnimatedHeaderValue)}
          <View style={{marginTop: 100}}>
            {dummyData.map((item, index) => (
              <Text style={styles.textStyle} key={index}>
                {item}
              </Text>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  };

  const renderStory = () => {
    return (
      <View
        style={{
          backgroundColor: 'black',
          height: '100%',
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <View
          style={{
            height: 3,
            width: '95%',
            borderWidth: 1,
            backgroundColor: 'gray',
            position: 'absolute',
            top: 18,
          }}>
          <Animated.View
            style={{
              height: '100%',
              backgroundColor: 'white',
              width: progressAnimation,
            }}></Animated.View>
        </View>
        <View
          style={{
            padding: 15,
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            top: 12,
            left: 0,
            width: '90%',
          }}>
          <View
            style={{
              borderRadius: 100,
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={image}
              style={{
                borderRadius: 100,
                backgroundColor: 'orange',
                resizeMode: 'cover',
                width: '92%',
                height: '92%',
              }}
            />
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '100%',
            }}>
            <Text style={{color: 'white', fontSize: 15, paddingLeft: 10}}>
              {name}
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionic
                name="close"
                style={{fontSize: 20, color: 'white', opacity: 0.6}}
              />
            </TouchableOpacity>
          </View>
        </View>

        {profileStatus ? (
          <>
            <Image
              source={{uri: profileStatusImg}}
              style={{position: 'absolute', width: '100%', height: 600}}
            />
          </>
        ) : (
          <>
            <Image
              source={image}
              style={{position: 'absolute', width: '100%', height: 600}}
            />
          </>
        )}

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginVertical: 10,
            width: '100%',
          }}>
          <TextInput
            placeholder="send message"
            placeholderTextColor="white"
            style={{
              borderColor: 'white',
              borderRadius: 25,
              width: '85%',
              height: 50,
              paddingLeft: 20,
              borderWidth: 1,
              fontSize: 20,
              color: 'white',
            }}
          />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="navigation" style={{fontSize: 30, color: 'white'}} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return <>{profileStatus ? renderAnimatedStory() : renderStory()}</>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    textAlign: 'center',
    color: 'green',
    fontSize: 18,
    padding: 20,
    marginTop: 40,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    zIndex: 1,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
  },
});

export default Status;
