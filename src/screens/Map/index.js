import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import MapView, {Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';

const Map = ({route}) => {
  const {item} = route?.params || {};

  const navigation = useNavigation();

  const onBack = () => navigation.goBack();

  const coordinates = {
    latitude: item?.coordinates?.lat,
    longitude: item?.coordinates?.lon,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          ...coordinates,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        <Marker coordinate={coordinates} title={item?.name} />
      </MapView>

      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Image
            source={require('../../assets/back.png')}
            style={styles.back}
          />
        </TouchableOpacity>

        <Text style={styles.title}>
          {item?.name}, {item?.city}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(Map);
