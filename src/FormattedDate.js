export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let date = props.date.getDate();

  let month = props.date.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }

  return `${day} ${date}/${month}`;
}
