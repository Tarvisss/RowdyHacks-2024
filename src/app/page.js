/**
 * v0 by Vercel.
 * @see https://v0.dev/t/do5316icTTs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
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

export default function Component() {
  return (
    <div className="grid grid-rows-min w-full min-h-screen gap-2">
      <div className="grid grid-cols-2 items-center gap-4">
        <h1 className="text-center">Poll ends at 3:00</h1>
        <h1 className="text-center">Game is: on at turf field at 3:00</h1>
      </div>
      <header className="flex items-center py-4 md:py-6 lg:py-8 px-4 md:px-6">
        <div className="space-y-1">
          <h1 className="text-lg font-bol d tracking-tighter sm:text-2xl">Favorite Color Poll</h1>
        </div>
        <nav className="ml-auto flex gap-4 md:gap-8">
          <Login />
        </nav>
      </header>

      <main className="grid gap-4 md:gap-6 p-4 md:p-6">
        <Card className = " max-w-xl justify-center items-center">
          <CardHeader className="bg-yellow-100 dark:bg-yellow-300">
            <CardTitle className="text-yellow-600">Game at 11:30</CardTitle>
            <CardDescription className="text-sm">description</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-2.5 sm:gap-3.5">
              <li>
                <Label className="flex items-center">
                  <Input className="w-4 h-4" type="checkbox" />
                  <span className="ml-2.5 text-sm sm:text-base">Yes</span>
                </Label>
              </li>
              <li>
                <Label className="flex items-center">
                  <Input className="w-4 h-4" type="checkbox" />
                  <span className="ml-2.5 text-sm sm:text-base">No</span>
                </Label>
              </li>
              <li>
                <Label className="flex items-center">
                  <Input className="w-4 h-4" type="checkbox" />
                  <span className="ml-2.5 text-sm sm:text-base">Maybe</span>
                </Label>
              </li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Button className="mx-4 md:mx-6 w-full">Submit</Button>
    </div>
  )
}

