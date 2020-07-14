import React,{useState} from 'react'
import {useHistory } from 'react-router-dom'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import './login.css';

export default function Login() {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();
    
       const PostData = ()=>{ 
        fetch("http://localhost:5000/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                name,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                store.addNotification({
                    title: "Sorry",
                    message: data.error,
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 2000
                      }
                })
             }
             else{
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                store.addNotification({
                    title: "Congratulate",
                    message: data.message,
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                        duration: 2000
                      }
                })
                 history.push('/company')
             }            
        })
        .catch(err=>{
            console.log(err)
        })
        .catch(err=>{
            console.log(err)
        }) 
    }


    return (
        <div className="container home">
            <div className="row">
                <div className="col-md-12">
            <div class="form-group">
                <label for="inputEmail4">Name</label>
                <input type="text" class="form-control" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name"/>
            </div>
            
           
            <div class="form-group">
                <label for="inputAddress2">Password</label>
                <input type="password" class="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
            </div>
    
            <button type="submit" onClick={()=>PostData()} class="btn btn-primary">Login</button>
        </div>
        </div>
        </div>
    )
}
