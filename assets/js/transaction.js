const showBtn = document.querySelector('.show-btn');  
const listItems = document.querySelectorAll('.forum-item'); 

for (let i = 0; i < listItems.length; i++) { //Displaying none all list item
    listItems[i].style.display = "none";
}

let n = 1;

for (let i = 0; i <= n; i++) { // Displaying block n(0) items of list   
    listItems[i].style.display = "block";
}
n += 3; //Adding 3 to the value of n(here: 1 + 3 = 4)  

showBtn.addEventListener('click', () => {
    showBtn.style.display = "none";
    setTimeout(() => {
        for (let i = 0; i <= n; i++) { // Displaying block n items of list after pressing show-btn (every time +3 items)  
            listItems[i].style.display = "block";
        }
        if (n <= listItems.length) {  
            n += 3;
        }
        showBtn.style.display = "block";

    }, 500);
  
});



