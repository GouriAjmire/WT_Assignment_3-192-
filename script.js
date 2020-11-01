function validation()
{
  var valid1=true;
  var username=document.getElementById("n1").value;
  var useremail=document.getElementById("n2").value;
  var userphone=document.getElementById("n3").value;
  var userapart=document.getElementById("n4").value;

 if(username.length<3 || username.length>30)
  {
  alert("enter valid name");
  valid1= false;
  }

  else if(useremail.indexOf("@") == -1 || useremail.length<10)
  {
    alert("Enter valid email");
    valid1= false;
  }

  else if(isNaN(userphone) || userphone.length!=10)
  {
    alert("enter valid phone number");
    valid1= false;
  }
  else if(userapart=="---Choose Option")
  {
    alert("Select required apartment type");
    valid1= false;
  }
  return valid1;
};


function displayDetails(){
    var index=0;
    index++;
    if(validation()){
      alert("Form submitted successfully");
     
      $('table tbody').append(`<tr><td>${index}</td><td>${$("#n1").val()}</td><td>${$("e#n2").val()}</td><td>${$("#n3").val()}</td><td>${$("#n4 option:selected").val()}</td></tr>`);
  
    }
    };
