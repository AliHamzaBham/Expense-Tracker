const editProfileForm = document.querySelector('#edit-prof-form');
const editProfBtn = document.querySelector('.edit-prof-btn');
const editProfInput = document.querySelectorAll('.edit-prof-input');
const dropdownUserName = document.querySelector('.dropdown-user-name');
const mainUserName = document.querySelector('.main-user-name');
const mainEmail = document.querySelector('.main-email');
const userName = document.querySelector('.user-name');
const country = document.querySelector('.country');
const email = document.querySelector('.email');
const currency = document.querySelector('.currency');

editProfBtn.addEventListener('click', () => {
    editProfileForm.style.display = "block";
    editProfBtn.style.display = "none";
})

editProfileForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let changedUserName = editProfInput[0].value;
    let changedcountry = editProfInput[1].value;
    let changedEmail = editProfInput[2].value;
    let changedCurrency = editProfInput[3].value;
  
    if (changedUserName.length > 0) {
        dropdownUserName.textContent = changedUserName;
        mainUserName.textContent = changedUserName;
        userName.textContent = changedUserName;
    }
    if(changedEmail.length > 0) {
        mainEmail.textContent = changedEmail;
        email.textContent = changedEmail;
    }
    if(changedcountry.length > 0){
        country.textContent = changedcountry;
    } 
    currency.textContent = changedCurrency;

    editProfileForm.style.display = "none";
    editProfBtn.style.display = "block";
});