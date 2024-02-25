import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
import PollOption from "./PollOption"

export default function PollComponent() {
  return(
<main className="grid gap-4 md:gap-6 p-4 md:p-6">
<Card>
  <CardHeader className="bg-yellow-100 dark:bg-yellow-300">
    <CardTitle className="text-yellow-600">What is your favorite color?</CardTitle>
    <CardDescription className="text-sm">Choose the color that brings you the most joy.</CardDescription>
  </CardHeader>
  <CardContent>

    
    <ul className="grid gap-2.5 sm:gap-3.5">
      
      <PollOption option="red" />
      <PollOption option="red" />
      <PollOption option="red" />
      
      
    </ul>
  </CardContent>
</Card>
</main>
  )
}