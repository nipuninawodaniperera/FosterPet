import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { CodeField } from 'react-native-confirmation-code-field';


const EmailVerificationScreen = ({ navigation }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  // Verification function
  const handleVerification = () => {
    setError('');
    // Implement your verification logic here
   
  };

  // Handle OTP input change
  const handleOtpChange = (value) => {
    setCode(value);
  };

  
  //resend email
const handleResend =()=>{
    //call resend email function
    
}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Email Verification</Text>
      <CodeField
        value={code}
        onChangeText={handleOtpChange}
        cellCount={6}
        rootStyle={styles.codeInputContainer}
        textContentType="oneTimeCode" // for mobile OTP autofill
      />
      {error && <Text style={styles.error}>{error}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleVerification}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
      <Text>
  {' '}
  <Text style={styles.resen} onPress={handleResend}>
    Resend
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
    marginTop:50
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
  resend: {
    marginTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom:100
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default EmailVerificationScreen;
