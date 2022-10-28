"use strict";
const btn = document.querySelector(".btn-primary");
const inputEl = document.querySelector(".form-control");
const messageEl = document.querySelector(".message");
const formEl = document.querySelector(".input-email-form");
const infoEl = document.querySelector(".mt-40");

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// hàm check input email
btn.addEventListener("click", function () {
  const inputValue = inputEl.value;
  console.log(inputValue);
  if (regex.test(inputValue)) {
    formEl.classList.toggle("d-none");
    infoEl.classList.toggle("d-none");
  } else if (inputValue === "")
    messageEl.textContent = "Bạn phải nhập gì đó chứ!";
  else messageEl.textContent = "Có phải email đâu bạn!";
});

//hàm listen click job header
for (let i = 0; i < 6; i++) {
  const infoHeaderEl = document.querySelector(`#job-info-header${i}`);
  const infoDescEl = document.querySelector(`#job-info-desc${i}`);
  const viewEl = document.querySelector(`#job-info-header${i} > h4`);
  console.log(viewEl);
  infoHeaderEl.addEventListener("click", function () {
    infoDescEl.classList.toggle("d-none");
    viewEl.textContent =
      viewEl.textContent == "View less ↑" ? "View more ↓" : "View less ↑";
  });
}
