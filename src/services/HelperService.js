import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const photoOptions = {
  mediaType: 'photo',
  // maxWidth: 300,
  // maxHeight: 300,
  includeBase64: false,
};

const videoOptions = {
  mediaType: 'video',
  durationLimit: 60,
  videoQuality: 'low',
};

export const openGallery = (video, callback) => {
  launchImageLibrary(video ? videoOptions : photoOptions)
    .then(response => {
      if (!response.didCancel) {
        callback(response);
      }
    })
    .catch(error => {});
};

export const openCamera = (video, callback) => {
  launchCamera(video ? videoOptions : photoOptions)
    .then(response => {
      if (!response.didCancel) {
        callback(response);
      }
    })
    .catch(error => {});
};
