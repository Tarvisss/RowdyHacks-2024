"use client"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/do5316icTTs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Login from "../components/Login"
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
import PollComponent from "@/components/PollComponent"
import CreatePoll from "@/components/CreatePoll"
import { useEffect, useState } from "react"


export default function Component() {
  // REACT STATE
  const [currUser, setCurrUser] = useState({});

  


  return (
    <div className="w-full min-h-screen ">
      <div className="grid grid-cols-2 place-items-center gap-4 p-8">
        <h1 id = "notif" className="text-center w-max  ">Poll ends at 3:00</h1>
        <h1 id = "notif" className="text-center w-max  ">Game is: on at turf field at 3:00</h1>
      </div>
      <header className="flex items-center py-4 md:py-6 lg:py-8 px-4 md:px-6">
        <div className="space-y-1">
          <h1 id="main-h1">What Time Is Game Time</h1>
        </div>
        <nav className="ml-auto flex gap-4 md:gap-8">
          <CreatePoll currUser={currUser}/>
          <Login currUser={currUser} changeUser={setCurrUser} />
        </nav>
      </header>
      <PollComponent currUser={currUser}/>

    </div>
  )
}

