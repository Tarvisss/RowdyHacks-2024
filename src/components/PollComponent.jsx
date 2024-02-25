'use client'

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import PollOption from "./PollOption"
import { use, useEffect, useState } from "react"
import axios from "axios"

export default function PollComponent(props) {
  // REACT STATES
  const [pollInfo, setPollInfo] = useState({})
  

  // CONNECTION TO BACKEND
  useEffect(() => {
    axios
      .get("https://rowdyhacks-30994aeafc3f.herokuapp.com/")
      .then((res) => {
        console.log(res);
        setPollInfo(res.data);
      })
      .catch(err => {
       console.log(err.message);
      });
  }, [])

  // HTML UI SECTION
  return(
<main className="grid gap-4 md:gap-8 md:p-40">
<Card id='card place-items-center'>
  <CardHeader id="form-Id">
    <CardTitle>What is your favorite color?</CardTitle>
    <CardDescription id="form-Id2">Choose the color that brings you the most joy.</CardDescription>
  </CardHeader>
  <CardContent>

        {/* ==== Poll Options ==== */}
        <PollOption option="yes" currUser={props.currUser} />
        <PollOption option="maybe" currUser={props.currUser}/>
        <PollOption option="no" currUser={props.currUser}/>

      </CardContent>
    </Card>
    </main>
  )
}