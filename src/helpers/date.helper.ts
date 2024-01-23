export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
  const year = date.getUTCFullYear();
  return `${day}/${month}/${year}`;
};

export const formatDateTime = (dateTimeString: string) => {
  const dateTime = new Date(dateTimeString);
  const hours = dateTime.getUTCHours();
  const minutes = dateTime.getUTCMinutes().toString().padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedTime = `${formattedHours
    .toString()
    .padStart(2, "0")}:${minutes} ${period}`;
  return formattedTime;
};
