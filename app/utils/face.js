import { Platform } from 'react-native';
import _ from 'lodash';
import settings from '../config/settings';
import RNFetchBlob from 'react-native-fetch-blob';

export const getFaceInfo = imagePath => {
  const faceApiUrl = settings.FACE_API_URL;
  const faceApiKey = settings.FACE_API_KEY;
  const isRemoteImage = _.includes(imagePath, 'https');
  const imageUrl = !isRemoteImage && Platform.OS === 'ios' ? _.replace(imagePath, 'file://', '')  : imagePath;
  const headers = {
    'Content-Type': isRemoteImage ? 'application/json' : 'application/octet-stream',
    'Ocp-Apim-Subscription-Key': faceApiKey,
  };
  const body = isRemoteImage ? JSON.stringify({ url: imageUrl }) : RNFetchBlob.wrap(imageUrl);
  return new Promise((resolve, reject) => {
    RNFetchBlob.fetch('POST', faceApiUrl, headers, body)
      .then(res => {
        const data = _.get(res, 'data');
        const faceInfo = _.isEmpty(data) ? null : JSON.parse(data);
        const error = _.get(faceInfo, 'error');

        if(!_.isEmpty(error)) return reject(error);
        if (_.isEmpty(faceInfo)) return reject("no people in the image");
        return resolve(faceInfo);
      })
      .catch(error => reject())
  });
};

