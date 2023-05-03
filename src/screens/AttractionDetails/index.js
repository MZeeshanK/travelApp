import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const AttractionDetails = ({route}) => {
  const {item} = route?.params || {};
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{margin: 32, color: '#000'}}
        onPress={() => navigation.goBack()}>
        Back
      </Text>
      <Text>{item?.name}</Text>
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails);
