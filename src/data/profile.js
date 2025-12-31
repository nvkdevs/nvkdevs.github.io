/**
 * SYSTEM RUNTIME LOGIC
 * Automatically calculate experience and age for a System Engineer profile
 */
const startYear = 2022;
const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = (today.getMonth() + 1).toString().padStart(2, "0");
const currentDay = today.getDate().toString().padStart(2, "0");

// Calculate years: Append .5 if current month is June or later
const baseYears = currentYear - startYear;
const experienceDisplay = currentMonth >= 6 ? `${baseYears}.5` : `${baseYears}`;

// Calculate age
const birthYear = 1993;
const age = currentYear - birthYear;

// Data structure
export const profile = {
  name: "Việt Khoa",
  role: "System Engineer | Programmer",
  location: "Osaka, Nhật Bản",
  uptime: `${experienceDisplay} Năm`,
  kernel: `v${currentYear}.${currentMonth}.${currentDay}`,
  hometown: "Vĩnh Long, Việt Nam",
  age: age,
};
