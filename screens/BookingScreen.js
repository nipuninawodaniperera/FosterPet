import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Picker, TextInput, Button } from 'react-native';

const BookingScreen = ({ navigation }) => {
  const [selectedPetType, setSelectedPetType] = useState('');
  const [otherPetType, setOtherPetType] = useState('');
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handlePetTypeChange = (petType) => {
    setSelectedPetType(petType);
    if (petType === 'Other') {
      setShowOtherInput(true);
    } else {
      setShowOtherInput(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Booking Card</Text>
      <Picker
        selectedValue={selectedPetType}
        onValueChange={(itemValue) => handlePetTypeChange(itemValue)}>
        <Picker.Item label="Select Pet Type" value="" />
        <Picker.Item label="Cat" value="Cat" />
        <Picker.Item label="Dog" value="Dog" />
        <Picker.Item label="Other" value="Other" />
      </Picker>
      {showOtherInput && (
        <TextInput
          style={styles.otherInput}
          placeholder="Enter Pet Type"
          value={otherPetType}
          onChangeText={(text) => setOtherPetType(text)}
        />
      )}
      <Button
        title="Submit"
        onPress={() => {
          // Handle submit logic here
          console.log('Selected Pet Type:', selectedPetType);
          if (selectedPetType === 'Other') {
            console.log('Other Pet Type:', otherPetType);
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Adjusted to display items from the top
    alignItems: 'center',
    paddingTop: 50, // Added padding to create space at the top
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  otherInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    width: '80%',
    height: 40,
  },
});

export default BookingScreen;
