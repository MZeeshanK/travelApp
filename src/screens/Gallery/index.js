import React from 'react';
import {SafeAreaView, FlatList, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Gallery = ({route}) => {
  const {images} = route?.params || {};
  const navigation = useNavigation();

  const onBack = () => navigation.goBack();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{marginBottom: 32, paddingHorizontal: 24}}
        data={images}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={styles.image} />
        )}
      />
      <TouchableOpacity onPress={onBack} style={styles.backContainer}>
        <Image
          source={require('../../assets/back.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default React.memo(Gallery);
