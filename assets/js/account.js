// To populate List
const addAccountBtn = document.querySelector('.add-account-btn');
const accountList = document.querySelector('#account-list');

addAccountBtn.addEventListener('click', () => {
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
        <span class="square bi bi-wallet" style="background-color:#4558f1;" >
        </span>
        <h5 class="account-name"> Account Name</h5>
        <p class="type-text text-muted">Type</p>
        <h5 class="amount-text">PKR 22,000</h5>
      </li>
      <!--Card Item End  -->`
});

// To Delete List Item Satrt
  
// To Delete List Item End

