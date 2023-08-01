// A function that turns a string of 24-hour time into words
function timeToWords(time) {
    // An array of words for the hours
    let hours = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"];
    // An array of words for the minutes
    let minutes = ["o'clock", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
                   "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen",
                   "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four",
                   "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine",
                   "half"];
    // Split the time string into hour and minute parts
    let [hour, minute] = time.split(":");
    // Convert the hour and minute parts into numbers
    hour = Number(hour);
    minute = Number(minute);
    // Declare a variable to store the output
    let output = "";
    // Check if the time is noon or midnight
    if (hour == 12 && minute == 0) {
      output = "noon";
    } else if (hour == 0 && minute == 0) {
      output = "midnight";
    } else {
      // Convert the hour to a word using the hours array and modulo 12
      output += hours[hour % 12] + " ";
      // Check if the minute is zero, thirty, or another value
      if (minute == 0) {
        output += minutes[0];
      } else if (minute == 30) {
        output += minutes[30] + " past";
      } else {
        // Convert the minute to a word using the minutes array
        output += minutes[minute] + " ";
        // Check if the minute is less than or greater than 30
        if (minute < 30) {
          output += "past";
        } else {
          output += "to";
          // Adjust the hour by adding one and modulo 12
          hour = (hour + 1) % 12;
          // Convert the adjusted hour to a word using the hours array
          output += " " + hours[hour];
        }
      }
    }
    // Return the output
    return output;
  }
  console.log(timeToWords(1034))