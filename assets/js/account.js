 
 

// To Delete List Item Satrt

// To Delete List Item End

// To submit add account form and make an account in the list
const accountList = document.querySelector('#account-list');
const closeBtn = document.querySelector('.btn-close');//Close form btn
const addAccountForm = document.querySelector('#add-account-form');//form
const inputs = document.querySelectorAll('.account-input'); //All the inputs

addAccountForm.addEventListener('submit' , ($event) => {
    $event.preventDefault();

    let name = inputs[0].value;
    let color = inputs[1].value;
    let type = inputs[2].value ;
    let amount = inputs[3].value;

    accountList.innerHTML +=
        `<!--Card Item Start  -->
      <li class="card-item card"> 
        <div class="filter" ><!--Account List Item options Start  -->
          <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow"> 
            <li><a class="dropdown-item" href="#">Edit</a></li>
            <li><a class="dropdown-item text-danger" href="#">Delete</a></li>
          </ul>
        </div><!--Account List Item options End  -->
        <span class="square bi bi-wallet" style="background-color:${color};" >
        </span>
        <h5 class="account-name">${name}</h5>
        <p class="type-text text-muted">${type}</p>
        <h5 class="amount-text">PKR ${amount}</h5>
      </li>
      <!--Card Item End  -->`
 
    closeBtn.click();//Clicking close btn after subitting form
 
});