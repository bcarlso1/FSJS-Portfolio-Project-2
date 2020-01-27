/***************** 
PAGE DISPLAY FUNCTION
********************/

const defaultList = document.querySelectorAll(".student-item");

// functions asks for what page you want to show and for the list of students
function pageDisplay(page, list) {
 // set parameters for which students to show on each page
   var start = (page*10)-10;
   var end = page*10;
   for (var i = 0; i < list.length; i++) {
       if (i >= start && i < end) {
          // display students within parameters
         list[i].style.display = "block";
       } else {
         list[i].style.display = "none";
      }
   }

   }


/*********************** 
  APPEND PAGE FUNCTION
**********************/
function appendPageLinks(list) {
   // display page 1
   pageDisplay(1, list);
   // clear out any prior append
   if (document.body.contains(document.getElementsByClassName('pagination')[0])) {
      var pageDiv = document.getElementsByClassName('page')[0];
      pageDiv.removeChild(pageDiv.childNodes[4]);
   }

   // put together elements for page buttons
   pageButton = document.createElement('div');
   pageButton.classList.add('pagination');
   newUL = document.createElement('ul');
   pageButton.appendChild(newUL);
   document.getElementsByClassName('student-list')[0].insertAdjacentElement('afterend', pageButton);

   // set up the number of page links dependent on the list length
   let count = 1;
   for (var i = 0; i < list.length; i++) {
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
   // set up event listener based on chosen student list
   eventListen(list);

}

// run fxn when page first loads - set up buttons, show p.1 content
const studentList = document.querySelectorAll(".student-item");
window.onload = appendPageLinks(studentList);

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
function eventListen(list) {
var numLinks = document.getElementsByTagName('a');

for (var i = 0; i < numLinks.length; i++) {
let counter = i+1;
document.getElementsByTagName('a')[i].addEventListener("click", (e) => {
   // show page clicked, w/in the particular list (default or search matches)
   pageDisplay(counter, list);
   removeActive();
   event.target.classList.add("active");
}
)
}
};


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

// set up function to run when search used
searchClick.addEventListener('onclick', searchMe);
searchBar.addEventListener('keyup', searchMe);

function searchMe() {
    searchBar.value = searchBar.value.toLowerCase();
    var mySearch = searchBar.value;
    // create empty array to store matches
    var foundStudentsArray = [];
    // console.log(mySearch);
    // go through student names list looking for matches
    for (var i = 0; i < students.length; i += 1) {
        var title = students[i].innerHTML.toLowerCase();
        // console.log(title);
        // hide all students
        studentsContainer[i].style.display = "none";
         // if match, add to array       
        if (title.includes(mySearch)) {
         foundStudentsArray.push(studentsContainer[i]);      
         }
   }
   // set all items in array to show
   for (var i = 0; i < foundStudentsArray.length; i += 1) {
     foundStudentsArray[i].style.display = "block";
   } 

// display "no results" if none...
   var noResultsNow = document.getElementById('no-results');
  // if no results but not first time
   if (foundStudentsArray.length == 0 && document.body.contains(noResultsNow)) {
      noResultsNow.innerHTML = "No results";  
   // if no results but IS first time - add text
   } else if (foundStudentsArray.length == 0 ) {
      var noResults = document.createElement('div');
      noResults.innerHTML = "No results";
      noResults.setAttribute("id", "no-results");
      document.getElementsByClassName('student-list')[0].appendChild(noResults);
   // if array is NOT 0
   } else {
   // if array is not 0 but it USED TO BE (clear text)
      if (document.body.contains(noResultsNow)) {
      noResultsNow.innerHTML = "";
      }
   }
   // put together pages and buttons based on array
 appendPageLinks(foundStudentsArray);
};

