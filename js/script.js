const items = document.querySelectorAll('.student-item');

let numberPerPage = 10;

/***************** 
PAGE DISPLAY FUNCTION
********************/

const defaultList = document.querySelectorAll(".student-item");

function pageDisplay(page, list) {
   var start = (page*10)-10;
   var end = page*10;
   for (var i = 0; i < list.length; i++) {
       if (i >= start && i < end) {
         list[i].style.display = "block";
       } else {
         list[i].style.display = "none";
      }
   }

   }


/*********************** 
  APPEND PAGE FUNCTION
**********************/
function appendPageLinks(page, list) {
   pageDisplay(page, list);
   pageButton = document.createElement('div');
   pageButton.classList.add('pagination');
   newUL = document.createElement('ul');
   pageButton.appendChild(newUL);
   document.getElementById('list').insertAdjacentElement('afterend', pageButton);

   const studentList = document.querySelectorAll(".student-item");
   let count = 1;
   for (var i = 0; i < studentList.length; i++) {
         if ((i-1) % 10 == 0) {
            pageButton = document.createElement('li');
            pageButtonLink = document.createElement('a');
            pageButton1Text = document.createTextNode(count);
            pageButtonLink.appendChild(pageButton1Text);
            pageButton.appendChild(pageButtonLink);
            document.getElementsByClassName('pagination')[0].firstElementChild.appendChild(pageButton);
            count++;
          //  console.log(i);
         }
   }

}


window.onload = appendPageLinks(1, defaultList);

/* ******************
Remove Active Class Fxn for Event Listener
******************** */

function removeActive() {
   var numberedLinks = document.getElementsByTagName('a');
   for (var i = 0; i < numberedLinks.length; i++) {
      numberedLinks[i].classList.remove('active');
   }
}

/* ******************
EVENT LISTENER FOR PAGES
******************** */

var numLinks = document.getElementsByTagName('a');

for (var i = 0; i < numLinks.length; i++) {
let counter = i+1;
document.getElementsByTagName('a')[i].addEventListener("click", (e) => {
   pageDisplay(counter, defaultList);
   removeActive();
   event.target.classList.add("active");
}
);
}


/* *************************
CREATE SEARCH BAR
*************************** */

var pageHeader = document.getElementsByClassName('page-header')[0]
var searchDiv = document.createElement('div');
searchDiv.classList.add('student-search');
var searchInput = document.createElement('input');
searchInput.setAttribute("placeholder", "Search for students...");
searchDiv.appendChild(searchInput);
var searchButton = document.createElement('button');
searchButton.innerHTML = "Search";
searchDiv.appendChild(searchButton);
pageHeader.appendChild(searchDiv);

 
/* **********
AUTOCOMPLETE SEARCH
************** */

const searchBar = document.getElementsByTagName("input")[0];
var students = document.getElementsByTagName("h3");
var studentsContainer = document.getElementsByClassName('student-item');
var searchClick = document.getElementsByTagName('button')[0];

searchClick.addEventListener('onclick', myFunction);
searchBar.addEventListener('keyup', myFunction);

function myFunction() {
    searchBar.value = searchBar.value.toLowerCase();
    var mySearch = searchBar.value;
    var foundStudentsArray = [];
    // console.log(mySearch);
    for (var i = 0; i < students.length; i += 1) {
        var title = students[i].innerHTML.toLowerCase();
        // console.log(title);
        studentsContainer[i].style.display = "none";
        if (title.includes(mySearch)) {
         foundStudentsArray.push(studentsContainer[i]);      
         }
   }
   for (var i = 0; i < students.length; i += 1) {
     foundStudentsArray[i].style.display = "block";
   } 
// fix here to display results properly on different pages
// *************************

   if (foundStudentsArray.length == 0) {
      alert('hey');
      var noResults = document.createElement('div');
      noResults.innerHTML = "No results";
      document.getElementById('list').appendChild(noResults);
   }
};

