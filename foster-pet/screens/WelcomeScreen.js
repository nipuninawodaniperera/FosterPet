import React,{useEffect} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {

  useEffect(() => {
    // Auto-navigate to the login page after 10 seconds
    const timer = setTimeout(() => {
      navigation.navigate('Email');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to FosterPet</Text>
      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Handle login button press
            navigation.navigate('Login');
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Handle signup button press
            navigation.navigate('Signup');
          }}
        >
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View> */}
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
  buttonContainer: {
    flexDirection: 'row', // Arrange buttons horizontally
  },
  button: {
    flex: 1, // Equal width for both buttons
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width:100
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
