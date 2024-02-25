'use client'

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import PollOption from "./PollOption"
import { useEffect, useState } from "react"

export default function PollComponent() {
  // REACT STATES
  const [pollInfo, setPollInfo] = useState({})
  

  // CONNECTION TO BACKEND
  useEffect(() => {
    // TODO: use axios to connect to the backend and pull all the poll info
    // and then use that poll info to create the poll below
  }, []);


  // HTML UI SECTION
  return(
<main className="grid gap-4 md:gap-6 md:p-6">
<Card>
  <CardHeader id="form-Id">
    <CardTitle>What is your favorite color?</CardTitle>
    <CardDescription id="form-Id2">Choose the color that brings you the most joy.</CardDescription>
  </CardHeader>
  <CardContent>

        {/* ==== Poll Options ==== */}
        <PollOption option="yes" />
        <PollOption option="maybe" />
        <PollOption option="no" />

      </CardContent>
    </Card>
    </main>
  )
}