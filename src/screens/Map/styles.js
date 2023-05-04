import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  header: {
    position: 'absolute',
    top: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    flex: 1,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 42,
    margin: 24,
  },
  back: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    color: '#000',
  },
});

export default styles;
