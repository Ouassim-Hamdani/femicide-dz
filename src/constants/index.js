export function averageFrequency(events) {
  // Sort by date ascending
  const sorted = [...events].sort((a, b) => {
    const [d1, m1, y1] = a.date.split('-').map(Number);
    const [d2, m2, y2] = b.date.split('-').map(Number);
    return new Date(y1, m1 - 1, d1) - new Date(y2, m2 - 1, d2);
  });

  // Convert dates to Date objects
  const dates = sorted.map(e => {
    const [d, m, y] = e.date.split('-').map(Number);
    return new Date(y, m - 1, d);
  });

  // Calculate differences in days
  const diffs = [];
  for (let i = 1; i < dates.length; i++) {
    const diff = (dates[i] - dates[i - 1]) / (1000 * 60 * 60 * 24);
    diffs.push(diff);
  }

  // Calculate average
  const avg = diffs.reduce((a, b) => a + b, 0) / diffs.length;
  return Math.round(avg);
}




export function calculateDaysSinceLastVictimDeath(victims) {
  if (!Array.isArray(victims) || victims.length === 0 || !victims[victims.length-1].date) {
    return null; // No valid data or first item missing date
  }

  const latestDateStr = victims[victims.length-1].date;
  const [day, month, year] = latestDateStr.split('-').map(Number);
  console.log(`Parsing date: ${latestDateStr} -> Day: ${day}, Month: ${month}, Year: ${year}`);
  // Check if parsing resulted in valid numbers and date parts exist
  if ([day, month, year].some(isNaN) || day < 1 || day > 31 || month < 1 || month > 12) {
    console.error(`Invalid date format or values: ${latestDateStr}`);
    return null;
  }

  // Create Date object using YYYY, MM-1, DD format for reliability
  const victimDate = new Date(year, month - 1, day);

  // Validate if the date object is a "real" date (e.g., handles "31-02-2023")
  if (victimDate.getDate() !== day || victimDate.getMonth() !== (month - 1) || victimDate.getFullYear() !== year) {
      console.error(`Date ${latestDateStr} is invalid or non-existent.`);
      return null;
  }

  // Get today's date at midnight for consistent calculation
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const diffMs = today.getTime() - victimDate.getTime();
  const millisecondsPerDay = 1000 * 60 * 60 * 24;

  return Math.floor(diffMs / millisecondsPerDay);
}
