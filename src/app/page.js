/**
 * v0 by Vercel.
 * @see https://v0.dev/t/do5316icTTs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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



export default function Component() {
  return (
    <div className="grid grid-rows-[auto min-content] w-full min-h-screen gap-2">
      <header className="flex items-center py-4 md:py-6 lg:py-8 px-4 md:px-6">
        <div className="space-y-1">
          <h1 className="text-lg font-bold tracking-tighter sm:text-2xl">Favorite Color Poll</h1>
        </div>
        <nav className="ml-auto flex gap-4 md:gap-8">
        <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className = "bg-green-600 text-white">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
         
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Phone Number
            </Label>
            <Input id="username" value="" className="col-span-3" />
          </div>
        </div>
        <DialogClose asChild>
          <Button type="submit">Save changes</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
        </nav>
      </header>
     <PollComponent />

     
     
      <Button className="mx-4 md:mx-6 w-full">Submit</Button>
    </div>
  )
}

