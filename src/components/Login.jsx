'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
  } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import axios from "axios"


export default function Login(props) {
  // REACT STATES
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    console.log(phoneNumber, password);
    //TODO: push info to backend    
  };


  const onCreateNewAccount = () => {
    console.log(username, phoneNumber, password);
    const newAccount = {
      name: username,
      phone: phoneNumber,
      password: password
    };
    console.log("json:", newAccount);
    axios
      .post("https://rowdyhacks-30994aeafc3f.herokuapp.com/register", newAccount)
      .then(res => {
        console.log(res);
        if(res.status == 200){
          props.changeUser(res.data);
        }
      })
      .catch(err => {
       console.log(err.message);
      });
  };


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className = "bg-green-600 text-white">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right"type="text">
              Phone Number
            </Label>
            <Input 
              id="name" 
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)} 
              className="col-span-3" 
              type="text" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right"type="text">
              Password
            </Label>
            <Input 
              id="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              className="col-span-3" 
              type="text"/>
          </div>
        </div>       
        <div className="grid grid-cols-2 gap-4 py-4">
        <DialogClose asChild>
          <Button type="submit" onClick={onLogin}>Login</Button>
        </DialogClose>
        
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className = "bg-green-600 text-white">Sign Up</Button>
          </DialogTrigger>      
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Account</DialogTitle>            
            </DialogHeader>
            <div className="grid gap-4 py-4">            
              <div className="grid grid-cols-4 items-center gap-4">                
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input 
                  id="name" 
                  value={username} 
                  onChange={e => setUsername(e.target.value)}
                  className="col-span-3"
                  type="text" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Phone Number
                </Label>
                <Input 
                  id="username" 
                  value={phoneNumber} 
                  onChange={e => setPhoneNumber(e.target.value)} 
                  className="col-span-3"
                  type="text" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Password
                </Label>
                <Input 
                  id="password" 
                  value={password} 
                  onChange={e => setPassword(e.target.value)} 
                  className="col-span-3"
                  type="text" />
              </div>            
            </div>
            <DialogClose asChild>
              <Button type="submit" onClick={onCreateNewAccount}>Submit</Button>
            </DialogClose>
          </DialogContent>
        </Dialog>


        </div>
      </DialogContent>
    </Dialog>
  )
}
