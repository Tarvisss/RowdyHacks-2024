
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function PollOption(props) {

  function handleChange(event) {
    //TODO: add call to backend to set the vote to props.options
    console.log(event.target.value);
  }

  return(
    <div className="form-check">
      <label>
        <input
          type="radio"
          name="react-tips"
          value={props.option}
          onChange={handleChange}
          className="form-check-input"
        />
        {props.option}
      </label>
    </div>
  )
}