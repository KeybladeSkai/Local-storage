const userNameText = document.querySelector(".userName");
const userAgeText = document.querySelector(".userAge");

const saveNameButton = document.querySelector(".saveNameBtn");
const saveAgeButton = document.querySelector(".saveAgeBtn");

saveNameButton.addEventListener("click", () => {
  const userName = document.querySelector(".name").value;
  userNameText.textContent = userName;
  localStorage.setItem("name", userName);
});
function displayUserName() {
  const nameFromLocalStorage = localStorage.getItem("name");

  if (nameFromLocalStorage) {
    userNameText.textContent = nameFromLocalStorage;
  } else {
    userNameText.textContent = "No name data in local storage";
  }
}

displayUserName();

saveAgeButton.addEventListener("click", () => {
  const userAge = document.querySelector(".age").value;
  userAgeText.textContent = userAge;
  sessionStorage.setItem("user", userAge);
});

const displayUserAge = () => {
  const nameFromSessionStorage = sessionStorage.getItem("user");
  if (nameFromSessionStorage) {
    userAgeText.textContent = nameFromSessionStorage;
  } else {
    userAgeText.textContent = "no data from sesssion storageu";
  }
};

displayUserAge()
