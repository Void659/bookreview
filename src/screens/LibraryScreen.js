import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TextInput, StyleSheet, ActivityIndicator, Modal, TouchableOpacity, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { db } from '../config/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export default function RegisterScreen({ navigation }) {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState(null); // Libro seleccionado para mostrar en el modal
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar el modal

  //API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://reactnd-books-api.udacity.com/books', {
          headers: { Authorization: 'whatever-you-want' },
        });
        const data = await response.json();
        setBooks(data.books);
        setFilteredBooks(data.books); //lista todos los libros
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Handle search input changes
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredBooks(books); // Si el campo de búsqueda está vacío, muestra todos los libros
    } else {
      const filtered = books.filter((book) =>
        book.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  };

  const handleBookPress = (book) => {
    setSelectedBook(book);
    setModalVisible(true);
  };

  // cerrar modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedBook(null);
  };

  const renderBookItem = ({ item }) => (
    <TouchableOpacity style={styles.bookItem} onPress={() => handleBookPress(item)}>
      <Image source={{ uri: item.imageLinks.thumbnail }} style={styles.bookImage} />
      <Text style={styles.bookTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigation.replace('Login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Input busqueda */}
      
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar libros..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#6200EE" />
      ) : (
        <FlatList
          data={filteredBooks}
          keyExtractor={(item) => item.id}
          renderItem={renderBookItem}
          contentContainerStyle={styles.listContent}
        />
      )}
      <Button
            title="Cerrar Sesion"
            type="outline"
            onPress={handleSignOut}
            containerStyle={styles.button}
          />

      {/* Modal detalles */}
      {selectedBook && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image
                source={{ uri: selectedBook.imageLinks.thumbnail }}
                style={styles.modalImage}
              />
              <Text style={styles.modalTitle}>{selectedBook.title}</Text>
              <Text style={styles.modalAuthor}>
                Autor: {selectedBook.authors ? selectedBook.authors.join(', ') : 'Desconocido'}
              </Text>
              <Text style={styles.modalDescription}>
                {selectedBook.description || 'No hay descripción disponible.'}
              </Text>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  listContent: {
    paddingBottom: 20,
  },
  bookItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#F9F9F9',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  bookImage: {
    width: 50,
    height: 75,
    marginRight: 15,
    borderRadius: 4,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '90%',
  },
  modalImage: {
    width: 100,
    height: 150,
    marginBottom: 15,
    borderRadius: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalAuthor: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
  },
  closeButton: {
    backgroundColor: '#6200EE',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
