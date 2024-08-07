const form =  document.getElementById("form")
// console.log(form);

const clearAll = document.getElementById("clearall");
// console.log(clearAll);

const mortgageAmt = document.getElementById("mortgageamount")
// console.log(mortgageAmt);

const mortgageTerm = document.getElementById("inputid")
// console.log(mortgageTerm);

const interestRate = document.getElementById("rate")
// console.log(interestRate);

const repaymentRadio = document.getElementById("repayment")
// console.log(repaymentRadio);

const interestOnlyRadio = document.getElementById("interestonly")
// console.log(interestOnlyRadio);

const calculateBtn = document.querySelector('button')
// console.log(calculateBtn);

const rightInner = document.querySelector(".right-inner")
// console.log(rightInner);

const rightResult = document.querySelector(".right-result-container")
// console.log(rightResult);

const monthlyRepayResult = document.getElementById("firstmoney")
// console.log(monthlyRepayResult);

const totalRepayResult = document.getElementById("secondmoney")
// console.log(totalRepayResult);

const formGroups = document.querySelectorAll('.form-inner');
const allErrors = document.querySelectorAll('#error');
// console.log(formGroup);
//console.log(allErrors);




//show error
function showError(elem, msg){
    const formGroup = elem.closest('.form-group');
    const small = formGroup.querySelector('#error')
    const formInner = formGroup.querySelector('.form-inner')
    small.innerHTML = msg;  // or small.text
    if(formInner){ 
    formInner.classList.add('error')
    }
    small.style.visibility = "visible";
}
//showError(mortgageTerm, "this field is required")

//RESET FORM
function  resetForm(){
    form.reset(); //clear form fields
    rightResult.style.display ="none";
    rightInner.style.display = "block";
    formGroups.forEach((error) => error.classList.remove("error"));
    allErrors.forEach((small) => small.style.visibility = "hidden");
   
}
clearAll.addEventListener("click", resetForm)

//handleSubmit
function handleSubmit(e){
e.preventDefault();
//reset all error messages
formGroups.forEach((error) => error.classList.remove("error"));
allErrors.forEach((small) => small.style.visibility = "visible");

let isValid = true;
//validate form fields
if(!mortgageAmt.value || isNaN(mortgageAmt.value)){
    console.log(mortgageAmt.value);
showError(mortgageAmt, "This field is required");
isValid = false;
}

if(!mortgageTerm.value || isNaN(mortgageTerm.value)){
    console.log(mortgageTerm.value);
showError(mortgageTerm, "This field is required");
isValid = false;
}

if(!interestRate.value || isNaN(interestRate.value)){
    console.log(interestRate.value);
showError(interestRate, "This field is required");
isValid = false;
}

if(!repaymentRadio.checked || !interestOnlyRadio.checked){
 showError(repaymentRadio, "This field is required");
isValid = false;
}


}
calculateBtn.addEventListener("click", handleSubmit)