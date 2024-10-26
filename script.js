function calculateAge() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const result = document.getElementById("result");

    if (!day || !month || !year) {
        result.textContent = "Please enter a valid date.";
        return;
    }

    const dob = new Date(year, month - 1, day); // Month is 0-indexed
    const today = new Date();

    let ageYears = today.getFullYear() - dob.getFullYear();
    let ageMonths = today.getMonth() - dob.getMonth();
    let ageDays = today.getDate() - dob.getDate();

    // Adjust if day or month in the current year hasn't been reached
    if (ageDays < 0) {
        ageMonths -= 1;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
        ageYears -= 1;
        ageMonths += 12;
    }

    result.innerHTML = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
}
