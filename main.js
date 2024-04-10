const [checkBox, generate, copy] = document.querySelectorAll(".row button");
const addComments = document.querySelector("textarea");
const txt = document.querySelector("[contenteditable]");
const vent = document.querySelectorAll("form input");
const [mode, rate, vol, peep, ps, o2] = vent;

const newdate = new Date();
const date = `${
  newdate.getMonth() < 10 ? "0" + newdate.getMonth() : newdate.getMonth()
}-${
  newdate.getDate() < 10 ? "0" + newdate.getDate() : newdate.getDate()
}-${newdate.getFullYear()}`;
const time = `${
  newdate.getHours() < 10 ? "0" + newdate.getHours() : newdate.getHours()
}${
  newdate.getMinutes() < 10 ? "0" + newdate.getMinutes() : newdate.getMinutes()
}`;

checkBox.addEventListener("click", () => {
  if (checkBox.innerText === "Recieved") {
    checkBox.innerText = "Maintained";
    addComments.innerHTML =
      "Bilateral clear BS. Normal breathing pattern noted. No respiratory distress noted. No SOB noted. No desaturation noted. Resident appears to be comfortable in bed. Alarms on and audible. Vital signs are within normal range. Bx given as ordered. Tolerated well. No adverse rxn noted. Will continue to monitor.";
  } else if (checkBox.innerText === "Maintained") {
    checkBox.innerText = "Recieved";
    addComments.innerHTML =
      "Bilateral clear BS. Normal breathing pattern noted. No respiratory distress noted. No SOB noted. No desaturation noted. Resident appears to be comfortable in bed. Alarms on and audible. Vital signs are within normal range.";
  }
});

generate.addEventListener("click", () => {
  txt.textContent = `${date} ${time}. ${checkBox.innerText} resident on ${mode.value} ${rate.value} ${vol.value} +${ps.value} ${o2.value}LPM. ${addComments.value}.`;
});

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(txt.textContent);
  alert("Copied text");
});
