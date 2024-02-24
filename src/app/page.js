/**
 * v0 by Vercel.
 * @see https://v0.dev/t/do5316icTTs
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Component() {
  return (
    <div className="grid grid-rows-[auto min-content] w-full min-h-screen gap-2">
      <header className="flex items-center py-4 md:py-6 lg:py-8 px-4 md:px-6">
        <div className="space-y-1">
          <h1 className="text-lg font-bold tracking-tighter sm:text-2xl">Favorite Color Poll</h1>
        </div>
        <nav className="ml-auto flex gap-4 md:gap-8">
          <Button size="sm" variant="outline">
            Red
          </Button>
          <Button size="sm" variant="outline">
            Green
          </Button>
          <Button size="sm" variant="outline">
            Blue
          </Button>
        </nav>
      </header>
      <main className="grid gap-4 md:gap-6 p-4 md:p-6">
        <Card>
          <CardHeader className="bg-yellow-100 dark:bg-yellow-300">
            <CardTitle className="text-yellow-600">What is your favorite color?</CardTitle>
            <CardDescription className="text-sm">Choose the color that brings you the most joy.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-2.5 sm:gap-3.5">
              <li>
                <Label className="flex items-center">
                  <Input className="w-4 h-4" type="checkbox" />
                  <span className="ml-2.5 text-sm sm:text-base">Red</span>
                </Label>
              </li>
              <li>
                <Label className="flex items-center">
                  <Input className="w-4 h-4" type="checkbox" />
                  <span className="ml-2.5 text-sm sm:text-base">Green</span>
                </Label>
              </li>
              <li>
                <Label className="flex items-center">
                  <Input className="w-4 h-4" type="checkbox" />
                  <span className="ml-2.5 text-sm sm:text-base">Blue</span>
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

