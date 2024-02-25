
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function PollOption(props) {
    return(
<li>
        <Label className="flex items-center">
          <Input className="w-7 h-8 rounded-full" type="checkbox" />
          <span className="ml-2.5 text-sm sm:text-base">{props.option}</span>
        </Label>
</li>

)}