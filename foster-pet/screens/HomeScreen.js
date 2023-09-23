import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import ClickableCard from '../components/ClickableCard';
import Navbar from '../components/Navbar';

const HomeScreen = ({ navigation }) => {
  const [location, setLocation] = useState('');
  const [checkinDate, setCheckinDate] = useState(new Date());
  const [checkoutDate, setCheckoutDate] = useState(new Date());
  const [petType, setPetType] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [petCareType, setPetCareType] = useState('');
  const [showCheckinDatePicker,setShowCheckinDatePicker]=useState(false);
  const [showCheckoutDatePicker,setShowCheckoutDatePicker]=useState(false);


  const handleSearch = () => {
    // Implement your search logic here
    // You can access the form values like location, checkinDate, etc.
  };

  const handleCardOnePress = () => {
    // Handle the click event here
    console.log('Card clicked!');
  };

  const handleCardTwoPress = () => {
    // Handle the click event here
    console.log('Card clicked!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Foster Pet</Text>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        
        <View>
          <TextInput
            style={styles.input}
            placeholder="Location"
            value={location}
            onChangeText={text => setLocation(text)}
          />

          <View style={styles.datePickerContainer}>
          <Text >Check-in Date</Text>
          <TextInput
  style={styles.input}
  placeholder="Check-in Date"
  value={checkinDate.toString()} // Display the selected date
  onFocus={() => setShowCheckinDatePicker(true)} // Open the date picker when focused
/>
{showCheckinDatePicker && (
  <DateTimePicker
    value={checkinDate}
    mode="date"
    display="default"
    onChange={(event, selectedDate) => {
      if (event.type === 'set') {
        setCheckinDate(selectedDate);
        setShowCheckinDatePicker(false); // Close the picker
      }
    }}
  />
)}



          </View>
          <View style={styles.datePickerContainer}>
          <Text >Check-out Date</Text>
          

<TextInput
  style={styles.input}
  placeholder="Check-out Date"
  value={checkoutDate.toString()} // Display the selected date
  onFocus={() => setShowCheckoutDatePicker(true)} // Open the date picker when focused
/>
{showCheckoutDatePicker && (
  <DateTimePicker
    value={checkoutDate}
    mode="date"
    display="default"
    onChange={(event, selectedDate) => {
      if (event.type === 'set') {
        setCheckoutDate(selectedDate);
        setShowCheckoutDatePicker(false); // Close the picker
      }
    }}
  />
)}

          </View>
          <View style={styles.rowContainer}>
            <Picker
              style={styles.petTypeInput}
              selectedValue={petType}
              onValueChange={itemValue => setPetType(itemValue)}
            >
              <Picker.Item label="Select Pet Type" value="" />
              <Picker.Item label="Dog" value="Dog" />
              <Picker.Item label="Cat" value="Cat" />
              {/* Add more pet types as needed */}
            </Picker>
            <TextInput
              style={styles.petBreedInput}
              placeholder="Pet Breed"
              value={petBreed}
              onChangeText={text => setPetBreed(text)}
            />
          </View>
          <Picker
          style={styles.petCareTypeInput}
          selectedValue={petCareType}
          onValueChange={itemValue => setPetCareType(itemValue)}>
            <Picker.Item label="Select Pet Care Type" value="" />
            <Picker.Item label="Professional Kennel" value="kennel" />
            <Picker.Item label="Volunteer Pet Sitter" value="vlounteer" />
            <Picker.Item label="Professional Kennel with Vet Care" value="vetcare" />
            {/* Add more pet care types as needed */}
          </Picker>
          <TouchableOpacity style={styles.button} onPress={handleSearch}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.more}>
          <Text>More for you......</Text>
          <ClickableCard
            title=""
            description="Get start as a professional kennel owner"
            onPress={handleCardOnePress}
          />
          <ClickableCard
            title=""
            description="Get start as a volunteer pet sitter"
            onPress={handleCardTwoPress}
          />
          
          
        </View>
      </ScrollView>
      <View>
        <Navbar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30,
    marginHorizontal:10
    
  },
  contentContainer: {
    // flexGrow: 1,
    // justifyContent: 'center',
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
    marginBottom: 15,
    paddingLeft: 10,
  },
  datePickerContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  datePicker: {
    flex: 1,
    marginRight: 10,
  },
  rowContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  petTypeInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
  },
  petBreedInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  petCareTypeInput:{
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  more: {
    marginTop: 100,
  },
});

export default HomeScreen;
