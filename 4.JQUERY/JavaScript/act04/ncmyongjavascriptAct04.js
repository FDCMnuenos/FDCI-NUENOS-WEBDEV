var letterFormat = /^[A-Za-z]+$/;

function addHobby(){
    var hobbyCheckbox = '<input type="text" name="newCheckHob" id="newCheckbox" required> <br> <button type="button" id="saveHobBtn" name="SaveHobby" onclick="saveHobby()">Save</button>';
    document.getElementById("addHobDiv").innerHTML = hobbyCheckbox; 
    document.getElementById("submit").disabled = true; 
    document.getElementById("submit").setAttribute("class", "disabled");
}

function saveHobby(){
    var val = document.getElementById("newCheckbox").value;
    var newCheckHob = document.querySelectorAll(".profHob"); 
    var saveNewHobButton = '<button type="button" id="addhobtn" name="addhob" onclick="addHobby()">Add Hobby</button>';

    if(val == ""){
        alert("Please Enter a Hobby");
        return false;
    }
    else if(val==newCheckHob){
        alert("Hobby already existed");
    }
    else if(val==letterFormat){
        alert("You are allowed to enter letters only");
    }
    else{
         document.getElementById("addHobDiv").innerHTML = saveNewHobButton;

        addCheckbox("newhobbies", "input", "checkbox", "hobbies", "profHob", val); 

        document.getElementById("submit").disabled = false;
        document.getElementById("submit").removeAttribute("class", "disabled");
    }

}

function addCheckbox(pId, eTag, type, name, cls, val) {
    var parent = document.getElementById(pId);
    var newCheckbox = document.createElement(eTag);
    var text = document.createTextNode(" " + val);
    var br = document.createElement("br");

    newCheckbox.setAttribute("class", cls);
    newCheckbox.type = type;
    newCheckbox.name = name;
    newCheckbox.value = val;

    parent.appendChild(newCheckbox); 
    parent.appendChild(text);
    parent.appendChild(br);
}


function textCountCheck(el){
    var textArea = el.value.length;
    var charactersLeft = 0 + textArea;
    var count = document.getElementById('current');
    count.innerHTML = charactersLeft;
}

function profileForm(){
    var form = document.getElementById("profForm");
    var name = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var info = document.getElementById("intro").value;
    var hobbies = document.getElementsByName("hobbies");
    var sHobbies = "";
    var countHobbies = 0;

    var x = document.getElementById('profile');
    var y = document.getElementById('profResult');


    //function to get checkbox selected items
    for(var i=0; i<hobbies.length; i++){
        if(hobbies[i].type=='checkbox' && hobbies[i].checked==true)
            sHobbies+=hobbies[i].value+"\n";
    }

    //to count selected checkbox
    for (var m = 0; m < hobbies.length; m++) {
        if (hobbies[m].type == "checkbox" && hobbies[m].checked) {
            countHobbies = countHobbies + 1;
        }
    }

    //validations for name 
    if (!/^[a-zA-Z]*$/g.test(name)){
        document.getElementById("validation").innerHTML = "Please Enter Letters only";
    }
    else if (name == "") {
        document.getElementById("validation").innerHTML = "Name is empty. Please enter Name";
    }
    else if (countHobbies < 3) {
        document.getElementById("validation").innerHTML = "Please Select at least 3 Hobbies";
        return false;
    }
    else if (countHobbies > 3) {
        document.getElementById("validation").innerHTML = "Please Select 3 hobbies only!";
        return false;
    }
    else if (info == "") {
        document.getElementById("validation").innerHTML = "Please enter something about yourself"; 
    }
    else{
    //     document.getElementById("profile").style.display = "none"; 
    //     document.getElementById("detailDisplay").style.display ="block";
           document.getElementById("detailDisplay").innerHTML = "Hi " + name + "<br>" + "Your gender is " + gender + "<br>" + "Your hobbies are " + hobbies[m] + "<br>" + "Here is a little fact about yourself: " + info ;
    // 
          if (x.style.display === 'none' || y.style.display === 'block') {
            x.style.display = 'block' + "asdfasdf";
            y.style.display = 'none' + "5454356456";
          } else {
            x.style.display = 'none' + "5454356456";;
            y.style.display = 'block'+ "asdfasdf";
          }
    }
}