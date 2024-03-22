import moment from "moment";
export const IqamaTime = (time, addTime) => {
  const new_time = moment(time, "h:mm A").add(addTime, "minutes").format("LT");
  const hour = new_time.split(":")[0];
  const updated_time = parseInt(hour) < 10 ? `0${new_time}` : new_time;
  return updated_time;
};
