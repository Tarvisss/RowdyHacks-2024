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
import { useState } from "react"
 
export default function CreatePoll() {

const [pollTime, setPollTime] = useState("");

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
        </div>
        <DialogClose asChild>
          <Button type="submit">Submit</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}