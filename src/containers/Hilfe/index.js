import React from 'react';
import {FlatList, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DATA = ['Kontakt', 'Impressum', 'Datenschutz'];

const Item = ({title, onSelect}) => (
  <TouchableOpacity onPress={() => onSelect(title)} style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Ionicons name="chevron-forward-outline" size={25} />
  </TouchableOpacity>
);

const Hilfe = ({navigation}) => {
  const renderItem = ({item}) => <Item title={item} onSelect={onSelect} />;

  const onSelect = (id) => {
    navigation.navigate(id);
  };

  return (
    <View style={styles.list}>
      <FlatList
        // style={}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Hilfe;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#f2f6f9',
    paddingVertical: 20,
  },
  item: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
  },
});
