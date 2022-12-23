//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
  Animated,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {openCamera, openGallery} from '../../services/HelperService';
import RNFetchBlob from 'rn-fetch-blob';

// create a component
const Stories = () => {
  const navigation = useNavigation();

  const [profileStatus, setProfileStatus] = React.useState(false);

  const [image, setImage] = React.useState('');
  const [profilePic, setProfilePic] = React.useState(null);

  const launchGallery = () => {
    openGallery(false, response => {
      console.log('response ====gallery=>>>>', response);
      if (response) {
        let uri = response.assets[0];
        const path =
          Platform.OS === 'ios' ? uri.uri.replace('file:///', '') : uri.uri;
        let imageData = {
          name: uri.fileName,
          filename: uri.fileName,
          type: uri.type,
          data: RNFetchBlob.wrap(decodeURIComponent(path)),
        };

        setImage(imageData);
        setProfilePic(uri.uri);
        setProfileStatus(true);
      }
    });
  };

  const storyInfo = [
    {
      id: 1,
      name: 'Mark',
      image: require('../../storage/images/post1.jpeg'),
    },
    {
      id: 2,
      name: 'Louis',
      image: require('../../storage/images/post1.jpeg'),
    },
    {
      id: 3,
      name: 'Smith',
      image: require('../../storage/images/post1.jpeg'),
    },
    {
      id: 4,
      name: 'Shaw',
      image: require('../../storage/images/post1.jpeg'),
    },
    {
      id: 5,
      name: 'Mark',
      image: require('../../storage/images/post1.jpeg'),
    },
  ];

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20}}>
      {storyInfo.map((data, index) => {
        return (
          <Pressable
            key={index}
            onPress={() =>
              navigation.push('Status', {
                name: data.name,
                image: data.image,
                profileStatus: profileStatus,
                profileStatusImg: profilePic,
              })
            }>
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 8,
              }}>
              {data.id == 1 ? (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 15,
                    right: 10,
                    zIndex: 1,
                  }}>
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 20,
                      color: '#405de6',
                      backgroundColor: 'white',
                      borderRadius: 100,
                    }}
                  />
                </View>
              ) : null}
              {data.id == 1 ? (
                <View>
                  {profilePic ? (
                    <>
                      <View
                        style={{
                          width: 68,
                          height: 68,
                          backgroundColor: 'white',
                          borderWidth: 1.8,
                          borderRadius: 34,
                          borderColor: '#c13584',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={{uri: profilePic}}
                          style={{
                            resizeMode: 'cover',
                            width: '92%',
                            height: '92%',
                            borderRadius: 46,
                          }}
                        />
                      </View>
                    </>
                  ) : (
                    <>
                      <Pressable
                        onPress={() => {
                          launchGallery();
                        }}>
                        <View
                          style={{
                            width: 68,
                            height: 68,
                            backgroundColor: 'white',
                            borderWidth: 1.8,
                            borderRadius: 34,
                            borderColor: '#c13584',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Image
                            source={require('../../storage/images/userImage.png')}
                            style={{
                              resizeMode: 'cover',
                              width: '92%',
                              height: '92%',
                              borderRadius: 46,
                            }}
                          />
                        </View>
                      </Pressable>
                    </>
                  )}
                </View>
              ) : (
                <View
                  style={{
                    width: 68,
                    height: 68,
                    backgroundColor: 'white',
                    borderWidth: 1.8,
                    borderRadius: 34,
                    borderColor: '#c13584',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={data.image}
                    style={{
                      resizeMode: 'cover',
                      width: '92%',
                      height: '92%',
                      borderRadius: 46,
                    }}
                  />
                </View>
              )}

              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 10,
                  opacity: data.id == 0 ? 1 : 0.5,
                }}>
                {data.name}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Stories;
