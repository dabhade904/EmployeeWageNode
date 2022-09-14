console.log("Welcome")
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOURS = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap=new Map();
let empDailyHrsMap=new Map();
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
    empDailyWageArr.push(calculateDailyWage(totalEmpHrs));
}

let empWage = calculateDailyWage(totalEmpHrs);
console.log("Total Days : " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage : " + empWage);

function calculateDailyWage(totalEmpHrs) {
    return totalEmpHrs * WAGE_PER_HOURS;
}

let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage
}
empDailyWageArr.forEach(sum)
console.log("UC7A ----- Total Days : " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage : " + empWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC7A -Emp wage with reduce : " + empDailyWageArr.reduce(totalWages, 0));

//UC7B -Show the day along with daily wage using Array map helper function
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

//UC 7C - Show day when full time wage of 160 were earned
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7 -Daily wage filter when fulltime wage earned");
console.log(fullDayWageArr);

//UC 7D find the first occurrence when full time wage was earned using find function
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7D - first time wage was earned on day " + mapDayWithWageArr.find(findFullTimeWage));

//UC 7E -check if every Element of full time wage is truely holding full time wage
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC 7E -check all element have full time wage " + fullDayWageArr.every(isAllFullTimeWage));

//UC 7F Check if there is any part time wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC 7F - check if any part time wage " + mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G - Find the number of days the employee worked
function totalDayWorked(numberOFDays, dailyWage) {
    if (dailyWage > 0)
        return numberOFDays + 1;
    return numberOFDays;
}
console.log("UC 7G -number of Days Emp Worked " + empDailyWageArr.reduce(totalDayWorked, 0));

//UC 8 Map function
console.log("UC 8A -- Emp wage map totalHrs " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));