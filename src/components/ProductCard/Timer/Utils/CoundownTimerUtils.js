import dayjs from "dayjs"

export function getRemaining(timeStamp) {
  const dayInput = dayjs(timeStamp)
  const nowDayjs = dayjs()
  if (dayInput.isBefore(nowDayjs)) {
    return {
      seconds: "00",
      minutes: "00",
      hours: "00",
      days: "00",
    }
  }
  return {
    seconds: secondsGet(nowDayjs, dayInput),
    minutes: minutesGet(nowDayjs, dayInput),
    hours: hoursGet(nowDayjs, dayInput),
    days: daysGet(nowDayjs, dayInput),
  }
}

function secondsGet(now, evaluate) {
  const seconds = evaluate.diff(now, "seconds") % 60
  return seconds
}

function minutesGet(now, evaluate) {
  const minutes = evaluate.diff(now, "minutes") % 60
  return minutes
}

function hoursGet(now, evaluate) {
  const hours = evaluate.diff(now, "hours") % 24
  return hours
}

function daysGet(now, evaluate) {
  const days = evaluate.diff(now, "days")
  return days
}
