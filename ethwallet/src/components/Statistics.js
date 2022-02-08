import React,{Component,useState, useEffect} from 'react';
import { collection, doc, getDoc } from 'firebase/firestore';
import firebase from 'firebase';
import FirestoreData from './FirestoreData'

function Stats() {
  const db = firebase.firestore();
  return (
    <div >
     <FirestoreData />
    </div>
  );
}
// const Stats =()=> {

//   const cityRef = db.collection('items').doc('Kgs');
//   const doc = cityRef.get();
//   if (!doc.exists) {
//     console.log('No such document!');
//   } else {
//     console.log('Document data:', doc.data());
//   }

// const [posts,setPosts] = useState([]);
//       const [wetWaste, setWetWaste] = useState();
//       const [tWetWaste,setTWetWaste] = useState();
//       useState(()=>{
//         db.collection('items')
//         .onSnapshot(snapshot =>{
//           setPosts(snapshot.docs.map(doc=>doc.data()))
//           console.log(snapshot)
//         })
//       },[])
//   return (
//     <div>
//       <h1 className="text-center my-4 heading">Statistics</h1>
//         <h2>Welcome !</h2>
//         {/* {
//           posts.map(
//             (vari)=>(
//               <div>
//                 <h4>{vari.Addr1}{vari.Addr2}</h4>
//                 <h4>{vari.City}</h4>
//                 <h4>{vari.State}</h4>
//                 <h4>{vari.Zip}</h4>
//               </div>
//             )
//           )
//         }
//         <h5>wetWaste</h5> */}
//     </div>
//     );
// }
// ====================================
// const Stats =()=> {
//   const [posts,setPosts] = useState([]);
//   const [wetWaste, setWetWaste] = useState();
//   const [tWetWaste,setTWetWaste] = useState();
//   useState(()=>{
//     db.collection('items')
//     .onSnapshot(snapshot =>{
//       setPosts(snapshot.docs.map(doc=>doc.data()))
//       console.log(snapshot)
//     })
//   },[])

//   return (
//     <div>
//       <h1 className="text-center my-4 heading">Statistics</h1>
//         <h2>Welcome !</h2>
//         {
//           posts.map(
//             (vari)=>(
//               <div>
//                 <h4>{vari.Addr1}{vari.Addr2}</h4>
//                 <h4>{vari.City}</h4>
//                 <h4>{vari.State}</h4>
//                 <h4>{vari.Zip}</h4>
//               </div>
//             )
//           )
//         }
//         <h5>wetWaste</h5>
//     </div>
//     );
// }

// =======================================
// class Stats extends Component{
//   state ={
//     Items: null
//   }
//   componentsDidMount(){
//     db.collection('items')
//     .get()
//     .then( snapshot=>{
//       console.log(snapshot)
//       const items = []
//       snapshot.forEach(doc=>{
//         const data = doc.data()
//         items.push(data)
//       })
//       this.setState({ Items: items })
//     })
//     .catch(error=>console.log(error))
//   }
//   render(){
//     return (
//       <div className="Stats">
//         <h1>Garbage Items</h1>
//         {
//           this.state.Items &&
//           this.state.Items.map( x =>{
//               return(
//                 <div>
//                   <p>{x.Addr1}</p>
//                 </div>
//               )
//           })
//         }
//       </div>
//     )
//   }  
// }
export default Stats;