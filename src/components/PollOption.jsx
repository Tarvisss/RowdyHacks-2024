
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function PollOption(props) {
    return(
      <div className="form-check" >
        <label>
          <input
            type="radio"
            name="react-tips"
            value={props.option}
            className
          />
          {props.option}
        </label>
      </div>
  )
}