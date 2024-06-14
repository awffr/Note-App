import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchNote = ({ noteList, setFilteredNotes }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = noteList.filter(
      (note) =>
        note.title.toLowerCase().includes(text.toLowerCase()) || note.desc.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredNotes(filtered);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Mau cari apa..."
        value={searchText}
        onChangeText={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 15,
    width: '100%',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#024995',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});

export default SearchNote;