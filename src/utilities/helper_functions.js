import { dayNames, monthNames } from "./constants";

const getCurrDay = () => {
  const date = new Date();

  return dayNames[date.getDay()];
};

const getCurrDate = () => {
  const date = new Date();

  return date.getDate();
};

const getCurrMonthName = () => {
  const date = new Date();

  return monthNames[date.getMonth()];
};

const getCurrMonthNumber = () => {
  const date = new Date();

  return date.getMonth() + 1;
};

const getCurrYear = () => {
  const date = new Date();

  return date.getFullYear();
};

export {
  getCurrDay,
  getCurrDate,
  getCurrMonthName,
  getCurrMonthNumber,
  getCurrYear,
};
