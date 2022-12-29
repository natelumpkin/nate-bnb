const isSameDate = (date1, date2) => {
  date1 = new Date(date1)
  date2 = new Date(date2)

  console.log(date1)
  console.log(date2)

  console.log(date1.getDay())
  console.log(date2.getDay())

  if (date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getYear() === date2.getYear()) {
        console.log(date1)
        console.log(date2)
        return true
      }
  return false
}

// TESTS

let testDate1 = "2022-04-30T07:00:00.000Z"
let testDate2 = "2023-04-15"
let testDate3 = "2023-01-01"
let testDate4 = "2022-01-31"

let date1 = "Sat Apr 30 2022 00:00:00 GMT-0700 (Pacific Daylight Time)"
let date2 = "Fri Feb 10 2023 00:00:00 GMT-0800 (Pacific Standard Time)"
let date3 = "Sun Jan 01 2023 00:00:00 GMT-0800 (Pacific Standard Time)"
let date4 = "Tue Jan 31 2023 00:00:00 GMT-0800 (Pacific Standard Time)"

console.log(isSameDate(testDate1, date1))
// console.log(isSameDate(testDate2, date2))
// console.log(isSameDate(testDate3, date3))
// console.log(isSameDate(testDate4, date4))

// export default isSameDate;
