// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React,{useState} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,TouchableOpacity,
//   StatusBar,TextInput,Button
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// export default function App(props) {

//   const [getFirst,setFirst] = useState('')
//   const [getSecond,setSecond] = useState('')
//   const [getResult,setResult] = useState('See Hear...')

//   const [num,setNum] = useState('Enter No.')

//   const handleCalculate=()=>{
//     var sum = parseInt(getFirst) + parseInt(getSecond)
//     setResult(sum)
//   }

//   const handeClick=(val)=>{
//     let result = num 

//     if(result === '0'){
//       result = ''
//     }

//     if(val === '='){
//         result = String(eval(result));
//     }

//     else if(val === 'Del'){
//       result = ''
//     }

//     else
//     {
//       result += val;
//     }    
     
//     setNum(result)
//   }

//   const MyBtn=({val,highlight})=>{
//    return(
//      <>
//       <TouchableOpacity style={[styles.btn , {backgroundColor:(highlight ? '#335' : '#5086f8')}]} onPress={()=>{handeClick(val)}}>
//       <Text style={styles.btnText} >
//            {val}
//       </Text>               
//      </TouchableOpacity>
//      </>
//    )
     
//   }

//   return (
//     <>
//     {/* <View style={{padding:20}}>
//       <View style={{display:'flex',alignItems:'center'}}>
//       <Text style={{fontSize:30,fontWeight: "bold",color:'brown'}} >Anuj jI App</Text>
//       </View>
//     <View style={{padding:20,borderWidth:2,borderColor:'grey'}}>
//       <View style={{display:'flex',alignItems:'center'}}>
//       <Text style={{fontSize:15,fontWeight: "bold"}}> Calculate The Sum </Text>
//       </View>
//       <View style={{borderWidth:2,marginBottom:10}}>
//             <TextInput placeholder="10" keyboardType="number-pad" onChangeText={(text)=>setFirst(text)} />
//       </View>

//       <View style={{borderWidth:2,marginBottom:10}}>
//             <TextInput placeholder="20" keyboardType="number-pad" onChangeText={(text)=>setSecond(text)} />
//       </View>

//       <View style={{borderWidth:1,marginBottom:10}}>
//             <Button title='Addition' onPress={()=>handleCalculate()} />
//       </View>

//       <Text>{getResult}</Text>
//       </View>
//       </View> */}

//       <View style={styles.container} >
        
//         <View style={{display:'flex',alignItems:'center',marginBottom:150}}>
//         <Text>Anuj G  Calculator</Text>
//         </View>
        
          
//       <View>
//             {/* <TextInput style={{borderWidth:1,marginBottom:10}}  showSoftInputOnFocus={false} value={num} /> */}
//             <Text style={{borderWidth:1,marginBottom:0,padding:10,fontSize:40}}>{num}</Text>
//       </View>

//         <View style={styles.row}>
//           <MyBtn val={7} />
//           <MyBtn val={8} />
//           <MyBtn val={9} />
//           <MyBtn val={'/'} highlight={true} />          
//          </View>

//          <View style={styles.row}>
//           <MyBtn val={4} />
//           <MyBtn val={5} />
//           <MyBtn val={6} />
//           <MyBtn val={'*'} highlight={true} />
//          </View>

//          <View style={styles.row}>
//           <MyBtn val={1} />
//           <MyBtn val={2} />
//           <MyBtn val={3} />
//           <MyBtn val={'+'} highlight={true}/>
//          </View>

//          <View style={styles.row}>
//           <MyBtn val={'Del'} />
//           <MyBtn val={0} />
//           <MyBtn val={'='} />
//           <MyBtn val={'-'} highlight={true} />
//          </View>

            
             

//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({

//   container:{
//     flex:1,
//     justifyContent:'flex-end'
//   },

//   btnText:{
//     fontSize:30,
//     textAlign:'center',
//     color:'white'
//   },

//   btn:{
//     backgroundColor:'#5086f8',
//     flex:1,
//     padding:20,
    
//   },

//   row:{
//     flexDirection:'row'
//   },


//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// // export default App;
