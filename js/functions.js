
// G
// CODE According to specification
function click_filter_element (event) {

  event.currentTarget.classList.toggle("selected");
  update_programmes();

  /*
    ARGUMENTS
      event: event-object created when user clicks on one of the filter elements.

    SIDE-EFFECTS
      Marks the clicked filter element as selected / unselected.
      Since a filter element will have changed after the click, the list of
      programmes must be updated.

      Attention VG
        Careful with the propagation of the click-event

    NO RETURN VALUE

  */
}


// G
// CODE according to specification
function create_filter_element (data) {

  let button = document.querySelector("button");
  button.classList.add(data.class);
  button.addEventListener("click", toggle.cities);

  const create_li = document.createElement("li");
  data.parent.append(create_li);
  create_li.classList.add(data.class);
  create_li.textContent = data.textContent;
  create_li.addEventListener("click", click_filter_element);

  return create_li;


  /*
    ARGUMENTS
      data: object that contains the following keys:
        class (string): a class-name given to the created element
        textContent (string): the text that the element contains
        parent (reference to HTML-element): the HTML-element that is the parent of the created element

      No control of arguments.

    SIDE-EFFECTS
      Creates a new dom-element with the tag "li".
      Gives the new dom-element the class contained in data.class
      Appends the new dom-element to the element referenced in data.parent
      Sets the text content of the new dom-element to data.textContent
      Sets the function click_filter_element as a listener to "click" for the new dom-element

    RETURN VALUE
      Returns a reference to the new dom-element
  */
}


// VG
// CODE according to specification
function add_group_toggling (filter_container_dom) {

  /*
    ARGUMENT
      filter_container_dom: reference to a HTML-element that contains a set of fliter_elements
            Exempel: the <ul> that contains the filters for Language.

    SIDE EFFECTS
      The function makes sure that when the user clicks on filter_container_dom, all the
      filter_elements that it contains are selected / unselected.
      Since some filter elements will have changed after the click, the list of
      programmes must be updated.

    NO RETURN VALUE

  */
  
}


// VG
// CODE according to specifications
function toggle_cities (event) {

  /*

    ARGUMENTS
      This function does not take any arguments

    SIDE EFFECTS
      This function checks the state of the first city-filter-element (Madrid).
      If it is selected then it de-selects ALL city-filter-elements
      If it is de-selected then it selects ALL city-filter-elements 

    NO RETURN VALUE

  */

}


// WRITE SPECIFICATION
// ATTENTION: You need to write the specification of all three functions:
//            create_countries_cities_filters, create_country and create_city
//
// create_countries_cities_filters:
// Denna funktion tar inte emot några argument men när den anropas används array_each för att anropa funktioner som finns i create_city och create_city.
//
// create_country:
// Denna funktion tar emot argumentet country, det är en variabel för var index i countries arrayen. Den gör en div med country och filter_container och ger den då id från arrayen. Den anropar även test_function som ger en array med de städer som har samma countryid som det som är valt.
//
// create_city
// Denna funktion tar emot argument city, det är en variabelför var index i city arrayen. Den öppnar ett objekt med nycklarna parent, class och textContent. Den ger också ett dataid till objektet baserat på stadens namn.
//

function create_countries_cities_filters () {
  function create_country (country) {
    const dom = document.createElement("div");
    dom.classList.add("country");
    dom.classList.add("filter_container");
    dom.id = "country_" + country.id;
    document.querySelector("#country_filter > ul").append(dom);
    
    dom.innerHTML = `
      <h1>${country.name}</h1>
      <ul class="filter_list"></ul>
    `;
    
    const cities = array_filter(CITIES, test_function);
    function test_function (city) {
      return city.countryID === country.id;
    }

    array_each(cities, create_city);
  }

  function create_city (city) {

    const dom = create_filter_element({
      parent: document.querySelector(`#country_${city.countryID} > ul`),
      class: "selected",
      textContent: city.name,
    });
    dom.dataset.id = city.id;

  }

  array_each(COUNTRIES, create_country);
}


// G
// ABSTRACT AND WRITE SPECIFICATION
//    As you can see, all three functions below do basically the same thing.
//    Abstract them to one function, and write the specification of that function.





//  function create_levels_filter () {
//    function create_level (level) {
//      const dom = create_filter_element({
//        parent: document.querySelector("#level_filter > ul"),
//        class: "selected",
//        textContent: level.name,
//     });
//      dom.dataset.id = level.id;
//    }
//    array_each(LEVELS, create_level);
//  }
// Create Subjects Filter
//  function create_subjects_filter () {
//   function create_subject (subject) {
//      const dom = create_filter_element({
//        parent: document.querySelector("#subject_filter > ul"),
//        class: "selected",
//       textContent: subject.name,
//      });
//      dom.dataset.id = subject.id;
//   }
//   array_each(SUBJECTS, create_subject);
//  }
// Create Search Field
//  function create_language_filter () {
//  function create_element (data) {
//      const dom = create_filter_element({
//        parent: document.querySelector("#language_filter > ul"),
//        class: "selected",
//        textContent: data.name,
//     });
//      dom.dataset.id = data.id;
//   }
//   array_each(LANGUAGES, create_element);
//  }


// G / VG (see details in specification)
// CODE according to specifications
function create_programme (programme) {
  
  /*

    ARGUMENT
      programme (object): One of the objects from PROGRAMMES

    SIDE-EFFECTS
      This function creates the HTML-element that contains all the information
      about one programme, as seen in the video / image.
      
      VG: The background image is a random image from among the images of the city
          in which the programme is (via the university)
      G:  No background image required.


      VG: The "see more" interaction must be included.
      G:  The "see more" element is not required. And that information needs not be in place.

    NO RETURN VALUE

  */  

}


// G
// CODE according to the specification
function update_programmes () {
  let numbers_of_programmes = read_filters();
  let programmes_shown_before = document.querySelector("#programmes > ul");
  let programmes_paragraf = document.querySelector("#programmes > p");
  if (numbers_of_programmes.length === 0) {
    programmes_paragraf.innerHTML = "Inga program uppfyller nuvarande filter.";
    programmes_shown_before.innerHTML = "";
  }
  array_each(numbers_of_programmes, create_programme);

  /*
      NO ARGUMENTS

      SIDE EFFECTS
        This function updates the programmes shown on the page according to
        the current filter status (which filter elements are selected / unselected).
        It uses the function read_filters to know which programmes need to be included.

        VG: The top images (header) need to be updated here

      NO RETURN VALUE

  */

}


// G
// WRITE SPECIFICATION
// You must understand how this function works. There will be questions about it
// in the code review (kodredovisning)

// Optional VG: Which parts of the function's code could be abstracted?
//              Implement it
function read_filters () {
  
  const city_selected_dom = document.querySelectorAll("#country_filter li.selected");

  const city_id_selected = [];
  function callback_add_cityID (dom_element) {
    const id_as_integer = parseInt(dom_element.dataset.id);
    city_id_selected.push(id_as_integer);
  }
  array_each(city_selected_dom, callback_add_cityID);

  const universities = [];
  for (let i = 0; i < city_id_selected.length; i++) {
    const city_id = city_id_selected[i];
    for (let ii = 0; ii < UNIVERSITIES.length; ii++) {
      const university = UNIVERSITIES[ii];
      if (university.cityID === city_id) {
        universities.push(university);
      }
    }
  }

  let programmes = [];
  function callback_add_programmes (university) {
    const university_id = university.id;
    for (let i = 0; i < PROGRAMMES.length; i++) {
      const programme = PROGRAMMES[i];
      if (programme.universityID === university_id) {
        programmes.push(programme);
      }
    }
  }
  array_each(universities, callback_add_programmes);



  const level_selected_dom = document.querySelectorAll("#level_filter li.selected");
  const level_id_selected = [];
  function callback_add_levelID (dom_element) {
    const id_as_integer = parseInt(dom_element.dataset.id);
    level_id_selected.push(id_as_integer);
  }
  array_each(level_selected_dom, callback_add_levelID);

  function test_function_level (programme) {
    return level_id_selected.includes(programme.levelID);
  }
  programmes = array_filter(programmes, test_function_level);



  const language_selected_dom = document.querySelectorAll("#language_filter li.selected");
  const language_id_selected = [];
  function callback_add_languageID (dom_element) {
    const id_as_integer = parseInt(dom_element.dataset.id);
    language_id_selected.push(id_as_integer);
  }
  array_each(language_selected_dom, callback_add_languageID);



  function test_function_language (programme) {
    return language_id_selected.includes(programme.languageID);
  }
  programmes = array_filter(programmes, test_function_language);



  const subject_selected_dom = document.querySelectorAll("#subject_filter li.selected");
  const subject_id_selected = [];
  function callback_add_subjectID (dom_element) {
    const id_as_integer = parseInt(dom_element.dataset.id);
    subject_id_selected.push(id_as_integer);
  }
  array_each(subject_selected_dom, callback_add_subjectID);



  function test_function_subject (programme) {
    return subject_id_selected.includes(programme.subjectID);
  }
  programmes = array_filter(programmes, test_function_subject);



  const search_string = document.querySelector("#search_field input").value;
  if (search_string !== "") {
    function test_function (programme) {
      return programme.name.includes(search_string);
    }
    programmes = array_filter(programmes, test_function);
  }

  return programmes;
}
// read_filters tar inte emot några argument.
// Skapar en variabel som är en referens rill en nodelist vilket är alla valde li taggar i country_filter. De anropar sen array_each med variabeln och vallback funktionen. Då görs en array med nodelistan och nycklarnasid för de element som blir översatta till sträng.
// Variabel universities lopar igenom alla element i arrayen som är skapad i förra funktionen. Sen gör den en ny variabel av var index i den arrayen. Sen loopar den igenom och skapar en ny variabel för var index. Variablernas id jämförs och om de är samma läggs de in i en ny array.
// Programme deklarerar en tom array. Parametern array och callback funktionen anropar array_each. Callback funktionen skapar en ny variabel av de index som finns i och deras id. Sen loopas programmes och gör var index till en ny variabel. Om alla index av programmes nyckel id matchar med etablerad variabel så pushas c in i x.
// Funktionerna levels, languages och subjects gör alla samma sak men med olika värden. 
// Det skapas en ny variabel med referens till en nodelist av de valda li elementen från sina föräldrar med namn baserat på dom olika värdena Z och _selected_dom. Det deklareras en tom array. Genom array_each anropas callback funktionen och Z. Callback omvandlar indexen i Z nycelnd id till sträng. Värdet av X uppdateras med array_filter genom värdena X och test_function. testfunktionen returnerar index från R om den har med X.Z id. Det deklarereas en variabel som är en referens till input-elements värde. test-function körs om variabelns värde inte är tomt. Om index av X med nyckeln name inkluderas returnerar test function en ny array. Och X värde uppdateras med array_filter som anropas med värdena X och test_function. Sen returnerar funktionen array programmes.
