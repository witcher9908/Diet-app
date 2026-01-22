function calculate() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseFloat(document.getElementById("age").value);
    const activity = parseFloat(document.getElementById("activity").value);

    if (!weight || !height || !age) {
        alert("Fill all fields properly");
        return;
    }

    const heightM = height / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);

    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    const calories = Math.round(bmr * activity);

    const protein = Math.round((0.3 * calories) / 4);
    const carbs = Math.round((0.4 * calories) / 4);
    const fats = Math.round((0.3 * calories) / 9);

    document.getElementById("bmi").innerText = bmi;
    document.getElementById("calories").innerText = calories + " kcal";
    document.getElementById("macros").innerText =
        `${protein}g P / ${carbs}g C / ${fats}g F`;
}
