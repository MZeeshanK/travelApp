import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  Image,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Title from '../../components/Title';
import InfoCard from '../../components/InfoCard';

const AttractionDetails = ({route}) => {
  const {item} = route?.params || {};
  const mainImage = item?.images?.length ? item?.images[0] : null;
  const slicedImages = item?.images?.length ? item?.images?.slice(0, 5) : [];
  const diffImages = item?.images?.length - slicedImages?.length;

  const onBack = () => navigation.goBack();

  const onGalleryNavigate = () =>
    navigation.navigate('Gallery', {images: item?.images});

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.mainImage}
        imageStyle={{borderRadius: 20}}
        source={{uri: mainImage}}>
        <View style={styles.header}>
          <Pressable hitSlop={8} onPress={onBack}>
            <Image
              style={styles.icon}
              source={require('../../assets/back.png')}
            />
          </Pressable>
          <Pressable hitSlop={8}>
            <Image
              style={styles.icon}
              source={require('../../assets/share.png')}
            />
          </Pressable>
        </View>

        <Pressable onPress={onGalleryNavigate} style={styles.footer}>
          {slicedImages?.map((image, index) => (
            <View key={image}>
              <Image source={{uri: image}} style={styles.miniImage} />
              {diffImages > 0 && index === slicedImages?.length - 1 ? (
                <View style={styles.moreImagesContainer}>
                  <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                </View>
              ) : null}
            </View>
          ))}
        </Pressable>
      </ImageBackground>
      <View style={styles.headerContainer}>
        <View>
          <Title style={styles.title} text={item?.name} />
          <Text style={styles.city}>{item?.city}</Text>
        </View>
        <Title text={item?.entry_price} style={styles.title} />
      </View>

      <InfoCard
        icon={require('../../assets/location_circle.png')}
        text={item?.address}
      />
      <InfoCard
        icon={require('../../assets/schedule.png')}
        text={`Open
${item?.opening_time} - ${item?.closing_time}`}
      />
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails);
