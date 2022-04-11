// const showBtn = document.querySelector('.show-btn');
// const listItems = document.querySelectorAll('.forum-item');

// for (let i = 0; i < listItems.length; i++) { //Displaying none all list item
//     listItems[i].style.display = "none";
// }

// let n = 1;

// for (let i = 0; i <= n; i++) { // Displaying block n(0) items of list   
//     listItems[i].style.display = "block";
// }
// n += 3; //Adding 3 to the value of n(here: 1 + 3 = 4)  

// showBtn.addEventListener('click', () => {
//     showBtn.style.display = "none";
//     setTimeout(() => {
//         for (let i = 0; i <= n; i++) { // Displaying block n items of list after pressing show-btn (every time +3 items)  
//             listItems[i].style.display = "block";
//         }
//         if (n <= listItems.length) {
//             n += 3;
//         }
//         showBtn.style.display = "block";

//     }, 500);

// });


// Modal Start
const addBtn = document.querySelector('.add-btn');
const bgModal = document.querySelector('.bg-modal');
addBtn.addEventListener('click', () => {
    bgModal.style.display = "flex";
})

const close = document.querySelector('.close');

close.addEventListener('click', () => {
    bgModal.style.display = "none";
})

const transactionForm = document.querySelector('.transaction-form');
const transInputs = document.querySelectorAll('.trans-input')
const itemContainer = document.querySelector('#item-container');
transactionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = transInputs[0].value;
    let amount = transInputs[1].value;
    let desc = transInputs[2].value;
    let category = transInputs[4].value;
    // let type = ('input[name="type"]:checked').value;

    //Radio value
    let radios = document.getElementsByName("type");
    let type = Array.from(radios).find(radio => radio.checked).value;

    //Date
    let d = new Date();
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();


    itemContainer.innerHTML += `<div class="forum-item ${type}">
    <!-- List Item start -->
    <div class="row">
      <div class="col-md-8">
        <div class="forum-icon h-100">
          <i class="fa fa-${category}"></i>
        </div>
        <a href="#" class="forum-item-title">${title}</a>
        <div class="forum-sub-title">${desc}</div>
        <div class="label-div">
         <a class="badge badge-success text-white" onclick="filterSelection('expense')">${type}</a>
        </div>
      </div>
      <div class="col-md-2 forum-info">
        <span class="views-number">
          ${amount}
        </span>
      </div>
      <div class="col-md-2 forum-info">
        <p>27-3-2022</p>
      </div>
    </div>
    <hr>
  </div><!-- End List Item   -->`

  bgModal.style.display  = "none";


  for (let i = 0; i < transInputs.length; i++) {
    transInputs[i].value =  "";
    
  }
    
});


