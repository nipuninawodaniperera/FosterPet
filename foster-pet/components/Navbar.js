import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {

    const navigation = useNavigation();

    const handleSearch = () => {
         navigation.navigate('Home');
      };
      
      const handleSave = () => {
        // Implement the save action here
      };
      
      const handleBooking = () => {
        // Implement the booking action here
      };
      
      const handleSignIn = () => {
       navigation.navigate('Login');
      };
      
      return (
        <View style={styles.navBar}>
      <TouchableOpacity onPress={handleSearch} style={styles.iconContainer}>
        <Icon name="search" size={24} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSave} style={styles.iconContainer}>
        <Icon name="heart" size={24} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleBooking} style={styles.iconContainer}>
        <Icon name="calendar" size={24} color="#333" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignIn} style={styles.iconContainer}>
        <Icon name="user-circle" size={24} color="#333" />
      </TouchableOpacity>
    </View>
      );
  };
  
  const styles = StyleSheet.create({
    navBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      height: 60,
      paddingHorizontal: 16, 
      width: '100%', // Make the navigation bar span the full width
    },
    iconContainer: {
      alignItems: 'center',
      marginLeft:35,
      marginRight:35
    },
  });
  
  export default Navbar;
  