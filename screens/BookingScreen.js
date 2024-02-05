import React from 'react';
import { View, Text,  StyleSheet } from 'react-native';

const BookingScreen = ({ navigation }) => {

  

    

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Booking Card</Text>
      
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

export default BookingScreen;
