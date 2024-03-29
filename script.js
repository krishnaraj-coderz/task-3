//hide and show
let text = document.getElementById("box")
function show() {
    text.style.display = "block";
}

function hide() {
    text.style.display = "none";
}


//tabs
function tabFunc(element, button) {
    let tab = document.getElementsByClassName("tab");
    let tabButtons = document.getElementsByClassName("tab-button")
    
    // Remove Default Opening
    tab[0].classList.remove("open")
    console.log(button)
    
    for (let i = 0; i < tab.length; i++) {
        tab[i].style.display = "none";
        tabButtons[i].classList.remove("active")
        console.log(tabButtons)
    }
    document.getElementById(element).style.display = "block";
    console.log(button);
    button.classList.add("active");
}


// Count Down without using Date object
let canStart = true;
let hour = 9;
let minute = 9;
let seconds = 9;
function starter() {
    canStart = true;
    setInterval(function () {
        if (canStart) {
            hourElement = document.getElementById("hour");
            minuteElement = document.getElementById("minute");
            secondsElement = document.getElementById("seconds");
            console.log(hour, minute, seconds);
            seconds -= 1
            if (seconds == 0) {
                seconds = 59;
                minute -= 1;
            }
            if (minute == 0) {
                minute = 59;
                hour -= 1;
            }
            console.log(hour, minute, seconds);

            hourElement.innerHTML = "0" + hour + " :";
            if (minute<10){
                minuteElement.innerHTML = "&nbsp;0" + minute + " : ";
            }
            else{
                minuteElement.innerHTML = "&nbsp;" + minute + " : ";
            }
            if (seconds<10){
                secondsElement.innerHTML = "&nbsp;0" + seconds;
            }
            else{
                secondsElement.innerHTML = "&nbsp;"+seconds;
            }
        }
    }, 1000)
}

function stopper() {
    canStart = false;
}


//accordion
let questions = document.getElementsByClassName("question");
let answers = document.getElementsByClassName("answer");
for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function () {
        this.classList.toggle("active");
        answers[i].classList.toggle("open");
    })
}


//counter
let number = 0
function increaser() {
    document.getElementById("value").innerHTML = number + 1;
    number += 1
}

function decreaser() {
    document.getElementById("value").innerHTML = number - 1;
    number -= 1
}

function reseter() {
    document.getElementById("value").innerHTML = 0;
    number = 0;
}


//carasoul 
const carasoulSlide = document.querySelector('.slides-holder');
console.log(carasoulSlide);
const slides = document.querySelectorAll('.slides-holder img');
const imageMenu = document.querySelectorAll('.image-menu');
console.log(imageMenu);
const slide_width = -1280;
let counter=0;
function caroPrevButton()
{
  if(counter<=0) return;
  for(let i =0; i<imageMenu.length;i++){
    imageMenu[i].classList.remove('active')
  }
  counter--;
  carasoulSlide.style.marginLeft = (slide_width*counter)+"px";
 imageMenu[counter].classList.add('active');
}

function caroNextButton(){
  if(counter>=slides.length-1) return;
  for(let i =0; i<imageMenu.length;i++){
    imageMenu[i].classList.remove('active')
  }
  counter++;
  carasoulSlide.style.marginLeft = (slide_width*counter)+"px";
  imageMenu[counter].classList.add('active')
}

//Todo
let toDoList = []
function addTodo(){
    newTask = document.getElementsByName('newTask')[0].value;
    console.log(newTask);
    if (newTask.length<=0){
        alert('Task Name should not be Empty')
    }
    else{
        tasks = document.getElementById('tasks').innerHTML += `
           <div class="task-box d-flex justify-content-between mt-3">
              <span class="task" onclick="completeTask(this)">`+ newTask +`</span>
              <button type="button" class ="btn btn-danger" onclick="deleteTask(this)">Delete</button>
           </div>
        `
    }
}

function completeTask(taskItem){
    taskItem.style.textDecoration = 'line-through'
}

function deleteTask(button){
    button.parentNode.remove();
}


// Form Validation
// Declaring Form and and input Elements Variables
taskform = document.forms.taskForm;
let email, userName, mobileNum, gender, domain;
taskform.addEventListener("submit", function (event) {

    event.preventDefault();
    // Assigning Values to Declared Variables from Html Page
    email = taskform.elements.email.value.trim();
    userName = taskform.elements.userName.value.trim();
    mobileNum = taskform.elements.mobileNumber.value.trim();
    password = taskForm.elements.password.value.trim();
    cPassword = taskForm.elements.cPassword.value.trim();
    gender = taskform.elements.gender.value;
    skillCheckbox = taskForm.elements.skill;
    domain = taskform.elements.domain.value;

    // Declaring Boolean Valid Checker variables for all input elements
    let isValidMail, isValidGender, isValidNum, isValidName, isValidSkill, isValidPass, isValidCpass,isValidDomain = false;
    
    // Assigning Checkbox values from Checkbox
    let selectedSkills = [];
    for (let i = 0; i < skillCheckbox.length; i++) {
        if (skillCheckbox[i].checked) {
            selectedSkills.push(skillCheckbox[i].value)
        }
    }
    console.log(email, userName, mobileNum, selectedSkills, gender, domain);


    // Validating Email
    if (email === '') {
        document.getElementById("emailEr").innerHTML = "Email Should Not Be Empty";
    }
    else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        isValidMail = true;
    }
    else {
        document.getElementById("emailEr").innerHTML = "Enter a Valid email Id";
    }

  
    // Validating Username
    if (userName === '') {
        document.getElementById("nameEr").innerHTML = "User Name Should Not Be Empty";
    }
    else {
        isValidName = true;
    }


    // Validating Mobile Number
    if (mobileNum === "") {
        document.getElementById("numEr").innerHTML = "Mobile Number should not be empty"
    }
    else if (!isNaN(parseInt(mobileNum)) && mobileNum.length === 10) {
        isValidNum = true;
        document.getElementById("numEr").innerHTML = ""
    }
    else if (!isNaN(parseInt(mobileNum))) {
        if (mobileNum.length > 10 || mobileNum.length < 10) {
            document.getElementById("numEr").innerHTML = "Mobile Number should be equal to 10 digits"
        }
    }
    else {
        document.getElementById("numEr").innerHTML = "Mobile Number should be Numerical"
    }


    // Validating Password
    if (password === '') {
        document.getElementById("passEr").innerHTML = "Password should not be empty"
    }
    else if (/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(password)) {
        isValidPass = true;
        document.getElementById("passEr").innerHTML = ""
    }
    else {
        document.getElementById("passEr").innerHTML = "Invalid Password"
    }


    // Validating Confirmation Password
    if (password === cPassword) {
        isValidCpass = true;
        document.getElementById("cPassEr").innerHTML = ""

    }
    else {
        document.getElementById("cPassEr").innerHTML = "Password does not match"
    }

    // Validating gender
    if (gender.length === 0) {
        document.getElementById("genderEr").innerHTML = "Choose your gender"
    }
    else {
        isValidGender = true;
        document.getElementById("genderEr").innerHTML = ""

    }

    if (selectedSkills.length === 0) {
        document.getElementById("skillEr").innerHTML = "Choose atleast one skill"
    }
    else {
        isValidSkill = true;
        document.getElementById("skillEr").innerHTML = ""
    }

    if(domain===""){
        document.getElementById("domainEr").innerHTML =  "Chose your Domain"
    }
    else{
        document.getElementById("domainEr").innerHTML = ""
        isValidDomain = true;
    }

    console.log(isValidMail, isValidGender, isValidNum, isValidName, isValidSkill, isValidPass, isValidDomain, isValidCpass)
    if (isValidName && isValidMail && isValidNum && isValidPass && isValidCpass && isValidGender && isValidSkill && isValidDomain) {
        taskForm.submit();
        let pronoun;
        gender === 'male' ? pronoun = "Mr" : pronoun = "Ms"

      document.write(`<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">      </head>
      <body style="background-image:url('https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/620bd6d655f2044afa28bff4_glassmorphism.jpeg')"> >
        <div style='position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);'> 
            <div>
                <h2>Hi `+ pronoun + " " + userName + `</h2>
            </div>
            <div>
                Your mail id <b>`+ email + `</b> has been successfully registered. start your <b>` + domain + `</b> Journey now !!
            </div>
        </div> 
      </body>
      </html>`)
    }
})

