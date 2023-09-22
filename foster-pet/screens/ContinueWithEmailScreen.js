import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ContinueWithEmailScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  
  const [emailError, setEmailError] = useState('');
  
  //reset password
  const handleContinue = () => {
    setEmailError('');
   
    
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email) {
      setEmailError('Email is required.');
      return;
    } else if (!regex.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    } 

    // Call the reset passowrd function

    
  };

//resend email
const handleSkip =()=>{
    //call resend email function
    navigation.navigate('Home');
}


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Continue with Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      {emailError && <Text style={styles.error}>{emailError}</Text>}
      

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      
      <Text>
  {' '}
  <Text style={styles.skip} onPress={handleSkip}>
    Skip for Now
  </Text>
</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 0,
    marginTop: 20,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: 150,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  error: {
    color: 'red',
    marginTop: 5,
    marginBottom: 10,
  },
  
  skip: {
    marginTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default ContinueWithEmailScreen;
