const formattedDate = (date) => {
    date= new Date(date).toISOString().split("T")[0];
    return date;
}
export { formattedDate };