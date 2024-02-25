
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function PollOption(props) {

  function handleChange(event) {
    //TODO: add call to backend to set the vote to props.options
    console.log(event.target.value);
  }

  return(
    <div id="radio-Id">
      <label>
        <input
          type="radio"
          name="react-tips"
          value={props.option}
          onChange={handleChange}
          className="form-check-input m-4"
        />
        {props.option}
      </label>
    </div>
  )
}