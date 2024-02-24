/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oSvxkYVydW2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"

export default function Component1() {
  return (
    <div className="grid items-start gap-6 min-h-screen px-4 md:px-6 pb-6 md:pb-12">
      <div className="flex items-center pt-6 sm:pt-0">
        <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
          <HomeIcon className="w-5 h-5" />
          Blog
        </Link>
        <ChevronRightIcon className="h-4 w-4 mx-2.5 opacity-25" />
        <Link className="font-semibold" href="#">
          Taxing Laughter: The Joke Tax Chronicles
        </Link>
      </div>
      <div className="grid gap-4 border rounded-lg p-6">
        <div className="flex items-center gap-4">
          <div className="grid gap-2">
            <label className="sr-only" htmlFor="title">
              Title
            </label>
            <Input
              className="max-w-sm font-semibold"
              id="title"
              placeholder="Enter title"
              value="Taxing Laughter: The Joke Tax Chronicles"
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">Posted on August 24, 2023</p>
          </div>
          <Button className="h-auto" variant="outline">
            <FileEditIcon className="h-4 w-4 mr-2.5" />
            Edit
          </Button>
        </div>
        <div className="grid gap-4">
          <div className="space-y-2">
            <label className="sr-only" htmlFor="content">
              Content
            </label>
            <Textarea className="prose" id="content" placeholder="Enter content" rows={10} />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium not-italic" for="cover-image">
              Cover Image
            </label>
            <div className="aspect-none w-full max-w-md">
              <img
                alt="Cover image"
                className="aspect-video object-cover rounded-lg"
                height="250"
                src="/placeholder.svg"
                width="500"
              />
            </div>
            <label className="block text-sm font-medium not-italic" for="file">
              Replace
            </label>
            <Input accept="image/*" id="file" type="file" />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium not-italic" for="tags">
              Tags
            </label>
            <Select id="tags" multiple>
              <option>Writing</option>
              <option>Comedy</option>
              <option>Taxes</option>
            </Select>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <Button className="w-full md:w-auto">Save Changes</Button>
          <Link className="underline md:ml-auto" href="#">
            Preview
          </Link>
        </div>
      </div>
    </div>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function FileEditIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}
