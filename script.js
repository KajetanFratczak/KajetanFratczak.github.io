function getRandomItem(arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

function generatePlan() {
  const poziom_zaaw = document.getElementById("poziom_zaaw").value;
  const cel = document.getElementById("cel").value;
  const plan_generator = document.getElementById("plan_generator");

  let workoutPlan = "";

  /*for (let i = 0; i < 5; i++) {
    const exercise = getRandomItem(bicepsExercises);
    workoutPlan += `${i + 1}. ${exercise}\n`;
  }*/

  plan_generator.innerHTML = workoutPlan;
}
