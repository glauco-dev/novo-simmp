// firestoreContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import { firestore } from './firebaseConfig';

const FirestoreContext = createContext();

export function FirestoreProvider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = firestore.collection('publicacao');
        const querySnapshot = await collectionRef.get();

        const dataArray = [];
        querySnapshot.forEach((doc) => {
          if (doc.exists) {
            dataArray.push(doc.data());
          }
        });

        setData(dataArray);
      } catch (error) {
        console.error('Erro ao buscar dados do Firestore:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <FirestoreContext.Provider value={{ data }}>
      {children}
    </FirestoreContext.Provider>
  );
}

export function useFirestore() {
  return useContext(FirestoreContext);
}
