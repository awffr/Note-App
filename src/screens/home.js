import React from 'react';
import { FlatList, StyleSheet, View, Text, Image } from 'react-native';
import CustomButton from '../components/customButton'; 

const NoteCard = ({ item, setCurrentPage, setSelectedNote }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text>{item.desc}</Text>
    <View style={styles.buttons}>
      <CustomButton
        backgroundColor="#007BFF"
        color="#FFF"
        text="Edit"
        fontSize={12}
        width={100}
        onPress={() => {
          setSelectedNote(item);
          setCurrentPage('edit');
        }}
      />
      <CustomButton
        backgroundColor="#D82148"
        color="#FFF"
        text="Hapus"
        fontSize={12}
        width={100}
        onPress={() => {
          setSelectedNote(item);
          setCurrentPage('delete');
        }}
      />
    </View>
  </View>
);

const Home = ({ noteList, setCurrentPage, setSelectedNote }) => (
  <View style={styles.container}>
    <Text style={styles.pageTitle}>Your Fav Note App</Text>

    <FlatList
      style={styles.flatList}
      contentContainerStyle={styles.flatListContent}
      showsVerticalScrollIndicator={false}
      data={noteList}
      renderItem={({ item }) => (
        <NoteCard item={item} setCurrentPage={setCurrentPage} setSelectedNote={setSelectedNote} />
      )}
      keyExtractor={(item) => item.id}
    />

    <View style={styles.gifContainer}>
      <Image
        source={require('../../assets/pixel_blue_gif_by_youngwolves.gif')} 
        style={styles.gifImage}
        resizeMode="contain"
      />
    </View>

    <CustomButton
      backgroundColor="#007BFF"
      color="#FFF"
      text="Tambahkan Note"
      width="100%"
      style={styles.addButton}
      onPress={() => {
        setCurrentPage('add');
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 24,
    fontWeight: '700',  
    color: "#007BFF",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
    position: 'relative', 
  },
  flatList: {
    flex: 1,
    width: '100%',
    zIndex: 1, 
  },
  flatListContent: {
    paddingBottom: 200, 
  },
  gifContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 0, 
    alignItems: 'center',
    marginBottom: 40,
  },
  gifImage: {
    width: '100%',
    height: 200, 
  },
  addButton: {
    marginTop: 20,
    zIndex: 1, 
  },
  card: {
    padding: 15,
    marginVertical: 15,
    borderColor: '#007BFF',
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: '#F0F4F8',
    width: '100%',
  },
  cardTitle: {
    fontWeight: '600',
    color: '#007BFF',
    fontSize: 18,
    marginBottom: 10,
  },
  buttons: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Home;
