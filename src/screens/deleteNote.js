import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomButton from '../components/customButton';

const DeleteNote = ({ setCurrentPage, deleteNote, note }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Hapus Note</Text>
      <Text style={styles.noteTitle}>{note.title}</Text>
      <Text style={styles.noteDesc}>{note.desc}</Text>
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#D82148"
          color="white"
          text="Yakin mau Hapus?"
          width="100%"
          onPress={() => {
            deleteNote(note.id);
            setCurrentPage('home');
          }}
        />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#DDDDDD"
          color="#203239"
          text="Nope, Kembali ke Home"
          width="100%"
          onPress={() => setCurrentPage('home')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#203239',
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#203239',
    marginTop: 20,
    marginBottom: 10,
  },
  noteDesc: {
    fontSize: 16,
    color: '#203239',
    marginBottom: 20,
  },
  spacerTop: {
    marginTop: 30,
  },
});

export default DeleteNote;
