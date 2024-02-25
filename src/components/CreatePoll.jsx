'use client'

import { Button } from "@/components/ui/button"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { useState } from "react"
 
export default function CreatePoll(props) {

const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [pollTime, setPollTime] = useState("");
const [setnotes, setNotes] = useState("");

const submitPoll = () =>{
const submitinfo = {
  title: title,
  description: description,
  expires_at: pollTime,
  notes: setnotes,
}
  axios
  .post("https://rowdyhacks-30994aeafc3f.herokuapp.com/polls", submitinfo, props.currUser )
  .then(res => {
    console.log(res);
    if(res.status == 200){
      console.log('poll created', pollTime);
    }
  })
  .catch(err => {
   console.log(err.message);
  });
console.log(event.target.value);
}

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Poll</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Poll</DialogTitle>
          <DialogDescription>
            Enter the time of the event here. The poll deadline will be 1 hour before.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="time" className="text-right">
              Title:
            </Label>
          <Input 
            id="title" 
            value={title} 
            className="col-span-3" 
            onChange={(e) => {setTitle(e.target.value)}}
            type="text"
            />

          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="time" className="text-right">
              Discription:
            </Label>
          <Input 
            id="description" 
            value={description} 
            className="col-span-3" 
            onChange={(e) => {setDescription(e.target.value)}}
            type="text"
            />

          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="time" className="text-right">
              Time of Event:
            </Label>
          <Input 
            id="time" 
            value={pollTime} 
            className="col-span-3" 
            onChange={(e) => {setPollTime(e.target.value)}}
            type="text"
            />

          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="time" className="text-right">
              Notes:
            </Label>
          <Input 
            id="notes" 
            value={setnotes} 
            className="col-span-3" 
            onChange={(e) => {setNotes(e.target.value)}}
            type="text"
            />

          </div>
        </div>
        <DialogClose asChild>
          <Button type="submit" onClick={submitPoll}>Submit</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}