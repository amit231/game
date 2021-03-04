import React,{useState,useEffect} from 'react'
import Game from './components/Game/Game'
import Lock from './components/Lock/Lock'
import Auth from './components/Auth/Auth'
import './App.css'
import {Route,Switch} from 'react-router-dom'
import useAuthReducer from './store/useAuthReducer'
import {AuthProvider} from './store/useAuthContext'
import firebase from 'firebase/app'
import 'firebase/firestore'
import {Provider} from './store/useIndexContext'
function App() {
  const[idd,iddd] = useState(0)
  let [authState,authDispatch]=useAuthReducer();
  let colref=firebase.firestore().collection('Users')
  useEffect(()=>{
    if(authState.user){ console.log(authState.isNewUser)
      if(authState.isNewUser===true){
        let newObj={
           score:0,
           email:authState.user.email,
        }
        console.log(newObj)
        colref.doc(authState.user.uid).set(newObj);
      }
      else{
        colref.doc(authState.user.uid).get().then((document)=>{
          console.log(document.data());
          authDispatch({type:'set-score',payload:document.data().score});
        })
      }
    }
  },[authState.user])




  const logoutHandler= ()=>{
    firebase.auth().signOut()
  }
  return(
    <div className='backFull'>
      <Switch>
      <AuthProvider value={{authState:authState,authDispatch:authDispatch}}>
        <Provider value={{passedIndex:idd}}>
          <Route path='/app' render={(args)=>(<Game logoutHandler={logoutHandler} setId = {iddd}{...args}/>)}/> 
          <Route path='/lock' render={(args)=>(<Lock logoutHandler={logoutHandler} {...args}/> ) }/>
          <Route path='/' exact render={(args)=>(<Auth  {...args}/> )}/>
            </Provider>
      </AuthProvider>
      </Switch>
    </div>
  )
}

export default App
//hello assets m daal usko