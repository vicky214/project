import React,{useState} from 'react'
import {useHistory } from 'react-router-dom'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';
import './signup.css';

export default function Signup() {
    const [name,setName] = useState('');
    const [profession,setProfession] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();
    
       
       const PostData = ()=>{ 
        fetch("http://localhost:5000/register",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                name,
                email,
                phone,
                profession,
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
                 history.push('/login')
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
                <label for="inputAddress">Email ID</label>
                <input type="email" class="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email ID" />
            </div>
            <div class="form-group">
                <label for="inputAddress2">Phone Number</label>
                <input type="text" class="form-control" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter Your Phone Number" />
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1">Profession</label>
                <select class="form-control" id="exampleFormControlSelect1" value={profession} onChange={(e)=>setProfession(e.target.value)}>
                <option>Choose Your Profession</option>
                <option>Engineer</option>
                <option>Doctor</option>
                <option>Banker</option>
                <option>Actor/Actoress</option>
                <option>Businessman</option>
                <option>Worker</option>
                <option>Salesman</option>
                <option>Director</option>
                <option>CEO/Manager</option>
                </select>
            </div>
            <div class="form-group">
                <label for="inputAddress2">Password</label>
                <input type="password" class="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
            </div>
    
            <button type="submit" onClick={()=>PostData()} class="btn btn-primary">Signup</button>
        </div>
        </div>
        </div>
    )
}
