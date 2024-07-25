import React, {useEffect} from 'react';
import {View, FlatList, Text, TouchableOpacity, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {fetchPhotos} from '../actions';
import {RootState} from '../reducers';
import {PhotoActionTypes} from '../actions';

const ListScreen = ({navigation}: any) => {
  const dispatch: ThunkDispatch<RootState, void, PhotoActionTypes> =
    useDispatch();
  const photos = useSelector((state: RootState) => state.photos.photos);
  const loading = useSelector((state: RootState) => state.photos.loading);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <FlatList
      data={photos}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('Photo', {photo: item})}>
          <View style={{flexDirection: 'row', margin: 10}}>
            <Image
              source={{uri: item.urls.thumb}}
              style={{width: 100, height: 100}}
            />
            <View style={{marginLeft: 10}}>
              <Text>{item.description || 'No Description'}</Text>
              <Text>by {item.user.name}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default ListScreen;
