// colocar funcion rendered
// import { About } from "../../../About"
import { Timer } from "../index"

export function displayTimer({ minutes, seconds, completed, props }) {
  if (completed) {
    // if compleated then no url is send to the component

    return <Timer minutes="00" seconds="00" completed={completed} />
  }
  // Render a countdown

  return (
    <Timer
      minutes={minutes}
      seconds={seconds}
      completed={completed}
      url={props.url}
    />
  )
}
