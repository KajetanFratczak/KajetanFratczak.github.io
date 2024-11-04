function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}

function generatePlan() {
  const poziom_zaaw = document.getElementById("poziom_zaaw").value;
  const cel = document.getElementById("cel").value;
  const plan_generator = document.getElementById("plan_generator");

  let liczba_dni = 0;
  if (poziom_zaaw === "poczatkujacy") {
    liczba_dni = 3;
  } else if (poziom_zaaw === "srednio_zaawansowany") {
    liczba_dni = 4;
  } else {
    liczba_dni = 5;
  }

  const workout_plan = [];
  if (cel == "sila") {
    const ciezar = "80% max ciezaru";
    const rep_range = "6 - 8";
    for (let day = 1; day <= 7; day++) {
      if (
        (liczba_dni == 3 && (day == 1 || day == 3 || day == 5 || day == 7)) ||
        (liczba_dni == 4 && (day == 3 || day == 5 || day == 7)) ||
        (liczba_dni == 5 && (day == 3 || day == 7))
      ) {
        workout_plan.push({ day: `Dzień ${day}`, type: "Rest Day" });
      } else {
        const partia_miesniowa = getRandomItem(exercises);
        const dzien = {
          day: `Dzień ${day}`,
          exercises: [],
          type: "Workout Day",
        };
        for (let i = 0; i < 4; i++) {
          const nazwa_cwiczenia = getRandomItem(partia_miesniowa.exercises);
          dzien.exercises.push({
            nazwa: nazwa_cwiczenia,
            reps: rep_range,
            waga: ciezar,
          });
        }
        workout_plan.push(dzien);
      }
    }
  } else if (cel == "wytrzymalosc") {
    const ciezar = "60% max ciezaru";
    const rep_range = "10 - 12";
    for (let day = 1; day <= 7; day++) {
      if (
        (liczba_dni == 3 && (day == 1 || day == 3 || day == 5 || day == 7)) ||
        (liczba_dni == 4 && (day == 3 || day == 5 || day == 7)) ||
        (liczba_dni == 5 && (day == 3 || day == 7))
      ) {
        workout_plan.push({ day: `Dzień ${day}`, type: "Rest Day" });
      } else {
        const partia_miesniowa = getRandomItem(exercises);
        const dzien = {
          day: `Dzień ${day}`,
          exercises: [],
          type: "Workout Day",
        };
        for (let i = 0; i < 5; i++) {
          const nazwa_cwiczenia = getRandomItem(partia_miesniowa.exercises);
          dzien.exercises.push({
            nazwa: nazwa_cwiczenia,
            reps: rep_range,
            waga: ciezar,
          });
        }
        workout_plan.push(dzien);
      }
    }
  }

  displayPlan(workout_plan, plan_generator);
}

function displayPlan(plan, container) {
  // Czyścimy zawartość kontenera DOM
  container.innerHTML = "";

  plan.forEach(function (day) {
    const dzien = document.createElement("div");

    const nazwa_dnia = document.createElement("h3");
    nazwa_dnia.textContent = day.day + ": " + day.type;
    dzien.appendChild(nazwa_dnia);

    if (day.exercises && day.exercises.length > 0) {
      const szczegoly_treningu = document.createElement("div");
      szczegoly_treningu.style.display = "none"; // Ukrywamy poszczególne ćwiczenia na początku - można kliknąć i je odkryć

      day.exercises.forEach(function (exercise) {
        const szczegoly_cwiczenia = document.createElement("p");
        szczegoly_cwiczenia.textContent =
          exercise.nazwa + " : " + exercise.reps + " reps, " + exercise.waga;
        szczegoly_treningu.appendChild(szczegoly_cwiczenia);
      });

      nazwa_dnia.onclick = function () {
        if (szczegoly_treningu.style.display === "none") {
          szczegoly_treningu.style.display = "block";
        } else {
          szczegoly_treningu.style.display = "none";
        }
      };

      dzien.appendChild(szczegoly_treningu);
    }

    container.appendChild(dzien);
  });
}
