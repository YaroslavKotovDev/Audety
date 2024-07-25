import React from 'react';
import {View, Image} from 'react-native';

const PhotoScreen = ({route}: any) => {
  const {photo} = route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={{uri: photo.urls.full}}
        style={{width: '100%', height: '100%'}}
      />
    </View>
  );
};

export default PhotoScreen;
