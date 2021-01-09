import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {Button, RadioButton, Title} from 'react-native-paper';

const KontaktForm = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    telefonnummer: '',
    abholadresse: '',
    zieladresse: '',
    betreff: '',
    nachricht: '',
    anfrage: 'Möbeltaxi',
  });
  const handleFormValues = (type, text) => {
    formValues[type] = text;
    setFormValues({...formValues});
  };
  const handleSubmit = () => {
    console.log({formValues});
  };

  return (
    <View>
      <TextInput
        onChangeText={(text) => handleFormValues('name', text)}
        placeholder="Name"
        placeholderTextColor="#999"
        style={styles.input}
        value={formValues.name}
      />
      <TextInput
        onChangeText={(text) => handleFormValues('email', text)}
        placeholder="Email"
        placeholderTextColor="#999"
        style={styles.input}
        value={formValues.email}
      />
      <TextInput
        onChangeText={(text) => handleFormValues('telefonnummer', text)}
        placeholder="Telefonnummer"
        placeholderTextColor="#999"
        style={styles.input}
        value={formValues.telefonnummer}
      />
      <View style={styles.radioContainer}>
        <RadioButton.Group
          onValueChange={(v) => handleFormValues('anfrage', v)}
          value={formValues.anfrage}>
          <Title style={styles.radioText}>Art der Anfrage</Title>
          <View style={styles.radio}>
            <Text style={styles.radioText}>Möbeltaxi</Text>
            <RadioButton.Android value="Möbeltaxi" color="#143d58" />
          </View>
          <View style={styles.radio}>
            <Text style={styles.radioText}>Umzüge</Text>
            <RadioButton.Android value="Umzüge" color="#143d58" />
          </View>
          <View style={styles.radio}>
            <Text style={styles.radioText}>Entsorgung</Text>
            <RadioButton.Android value="Entsorgung" color="#143d58" />
          </View>
        </RadioButton.Group>
      </View>
      <TextInput
        onChangeText={(text) => handleFormValues('abholadresse', text)}
        placeholder="Abholadresse"
        placeholderTextColor="#999"
        style={styles.input}
        value={formValues.abholadresse}
      />
      <TextInput
        onChangeText={(text) => handleFormValues('zieladresse', text)}
        placeholder="Zieladresse"
        placeholderTextColor="#999"
        style={styles.input}
        value={formValues.zieladresse}
      />
      <TextInput
        onChangeText={(text) => handleFormValues('betreff', text)}
        placeholder="Betreff"
        placeholderTextColor="#999"
        style={styles.input}
        value={formValues.betreff}
      />
      <TextInput
        onChangeText={(text) => handleFormValues('nachricht', text)}
        placeholder="Nachricht"
        placeholderTextColor="#999"
        multiline
        style={[styles.input, styles.textarea]}
        value={formValues.nachricht}
      />
      <Button
        style={styles.button}
        labelStyle={styles.buttonLabel}
        contentStyle={styles.buttonContent}
        onPress={handleSubmit}>
        Submit
      </Button>
    </View>
  );
};

export default KontaktForm;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#eee',
    height: 50,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
  textarea: {
    height: 100,
  },
  button: {
    backgroundColor: '#f6961b',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  buttonLabel: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
  },
  buttonContent: {
    height: 50,
    fontSize: 18,
  },
  radio: {
    flexDirection: 'row',
  },
  radioText: {
    fontSize: 25,
  },
  radioContainer: {
    marginHorizontal: 20,
  },
});
