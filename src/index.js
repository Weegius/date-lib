const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const daysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

/**
 * Class representing a custom date object.
 * @class
 */

class D {
  /**
   * Create a new D object.
   * @constructor
   * @param {...*} args - Parameters to initialize the date.
   */
  constructor(...args) {
    this._date = new Date(...args);
  }

  // Getters can only return a value, they can not take parameters
  /**
   * Get the full year.
   * @returns {number} - The full year.
   */
  get year() {
    return this._date.getFullYear();
  }

  /**
   * Get the short year (last two digits).
   * @returns {number} - The short year.
   */
  get yr() {
    return this.year % 100;
  }

  /**
   * Get the full month name.
   * @returns {string} - The full month name.
   */
  get month() {
    return months[this._date.getMonth()];
  }

  /**
   * Get the short month name.
   * @returns {string} - The short month name.
   * @example
   */
  get mon() {
    return monthsShort[this._date.getMonth()];
  }
  /**
   * Get the full day name.
   * @returns {string} - The full day name.
   */
  get day() {
    return days[this._date.getDay()];
  }

  /**
   * Get the short day name.
   * @returns {string} - The short day name.
   */
  get dayShort() {
    return daysShort[this._date.getDay()];
  }

  /**
   * Set the full year.
   * @param {number} n - The full year to set.
   */
  set year(n) {
    // ...is n a number?
    this._date.setFullYear(n);
  }
  /**
   * Format the date according to a mask.
   * @param {string} [mask=""] - The format mask.
   * @returns {string} - The formatted date string.
   */
  format(mask = "") {
    let datestr = "";
    let dt = mask;
    for (let i = 0; i < mask.length; i += 1) {
      if (dt === "Y") {
        datestr += this.year;
      } else if (dt === "y") {
        datestr += this.yr;
      } else if (dt === "M") {
        datestr += this.month;
      } else if (dt === "m") {
        datestr += this.mon;
      } else if (dt === "D") {
        datestr += this.day;
      } else if (dt === "d") {
        datestr += this.dayShort;
      } else {
        datestr += dt;
      }
    }
    return datestr;
  }
}

const date = new D();
// console.log(date.year); // call the getter
// console.log(date.yr); // call the getter
// console.log(date.month);
// console.log(date.mon);
// console.log(date.day);
// console.log(date.dayShort);

// Define an object
const special = {
  Y: this.year, // gets the full year from your class
  y: this.yr, // gets the short year from your class
  M: this.month,
  m: this.mon,
  D: this.day,
  d: this.dayShort,
};

special["Y"]; // 2021
special["y"]; // 21
special["?"]; // undefined

console.log(date.format(""));
console.log(date.format(""));
