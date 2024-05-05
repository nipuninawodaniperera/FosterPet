import React from 'react';
import { View, Text,  StyleSheet } from 'react-native';

const BookingHouseScreen = ({ navigation }) => {

  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Booking House</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  
  
});

export default BookingHouseScreen;
