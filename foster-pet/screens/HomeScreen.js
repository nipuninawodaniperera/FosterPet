import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker';
import ClickableCard from '../components/ClickableCard';
import Navbar from '../components/Navbar';

const HomeScreen = ({ navigation }) => {
  const [location, setLocation] = useState('');
  const [checkinDate, setCheckinDate] = useState('');
  const [checkoutDate, setCheckoutDate] = useState('');
  const [petType, setPetType] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [petCareType, setPetCareType] = useState('');

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
            <DatePicker
              style={styles.datePicker}
              date={checkinDate}
              mode="date"
              placeholder="Check-in Date"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              onDateChange={date => setCheckinDate(date)}
            />
            <DatePicker
              style={styles.datePicker}
              date={checkoutDate}
              mode="date"
              placeholder="Check-out Date"
              format="YYYY-MM-DD"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              onDateChange={date => setCheckoutDate(date)}
            />
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
          <Picker>
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
