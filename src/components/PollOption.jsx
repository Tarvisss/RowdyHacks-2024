
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useEffect } from "react";

export default function PollOption(props) {
  
  useEffect(() => {
    console.log("user changed from poll option:", props.option, props.currUser);
  }, [props.currUser]);


  function handleChange(event) {
    //TODO: add call to backend to set the vote to props.options
    axios
      .post("https://rowdyhacks-30994aeafc3f.herokuapp.com/register", newAccount)
      .then(res => {
        console.log(res);
        if(res.status == 200){
          props.changeUser(res.data);
        }
      })
      .catch(err => {
       console.log(err.message);
      });
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