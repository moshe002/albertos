import { initializeApp } from 'firebase/app'
import { 
    collection,
    getFirestore, 
    addDoc, 
    getDocs
 } from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAq2Z97FgXV8mUMTD85d3tBU1oaiOxU3wQ",
    authDomain: "albertos-orders.firebaseapp.com",
    databaseURL: "https://albertos-orders-default-rtdb.firebaseio.com",
    projectId: "albertos-orders",
    storageBucket: "albertos-orders.appspot.com",
    messagingSenderId: "976026491092",
    appId: "1:976026491092:web:3a5b9ef710c8ec2a810341",
    measurementId: "G-YVRDTP0TQZ"
  };

  // init firebase app
  initializeApp(firebaseConfig)

  // init services 
  const db = getFirestore()

  // collection ref
  const colRef = collection(db, 'orders')

  // get collection data
  getDocs(colRef)
    .then((snapshot) => {
        let order = []
        snapshot.docs.forEach((doc) => {
            order.push({ ...doc.data(), id: doc.id })
        })
        console.log(order)
    })
    .catch(err => {
        console.log(err.message)
    })

  // adding 
  // const addForm = document.querySelector('.form')
  // addForm.addEventListener('submit', (e) => {
  //   e.preventDefault()
  //   addDoc(colRef, {
  //       name: addForm.nameOfBuyer.value,
  //       email: addForm.emailOfBuyer.value,
  //       phoneNumber: addForm.numberOfBuyer.value,
  //       address: addForm.addressOfBuyer.value,
  //       chosenPizza: addForm.pizza.value,
  //       typeOfPizza: addForm.type.value,
  //       sizeOfPizza: addForm.size.value
  //   })

  // })
