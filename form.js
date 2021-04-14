//Wykorzystaj zdarzenie onblur oraz onchange oraz wiedzę z przykładów powyżej i
//napisz funkcje pomocnicze, które będą sprawdzały wartości w polach formularza
//od razu po ich wypełnieniu (a nie podczas wysyłania formularza) i stosowały
//właściwe podświetlenie oraz komunikat o błędzie. 
//wersja 2.

function checkForm()
{
    var error=false; //to znaczy, że danych nie brakuje
    var contactName = document.getElementById("contactName");
    var contactSur = document.getElementById("contactSur");
    var contactEmail = document.getElementById("contactEmail");
    var contactInfo = document.getElementById("contactInfo");

    if (contactName.value == "")
    {
        document.getElementById("name").className="form-group has-error";
        document.getElementById("errorName").className="alert alert-danger";
        error=true;
    }
    else
    {
        document.getElementById("name").className="form-group has-success";
    }

    if (contactSur.value == "")  //nazw
    {
        document.getElementById("sur").className="form-group has-error";
        document.getElementById("errorSur").className="alert alert-danger"; 
        error=true;
    }
    else
    {
        document.getElementById("sur").className="form-group has-success";
    }

    if(contactEmail.value == "")   //email
    {
        document.getElementById("mail").className="form-group has-error";
        document.getElementById("errorEmail").className="alert alert-danger"; 
        error=true;
    } 
    else
    {
        var email = contactEmail.value;   //mailznaki specjalnene 
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if(regex.test(email)==false)
        {
            document.getElementById("mail").className="form-group has-error";
            document.getElementById("errorEmail").innerHTML="Zły format!";
            document.getElementById("errorEmail").className="alert alert-danger"; 
            error=true;
        }
        else
        {
         document.getElementById("mail").className="form-group has-success";
        }
    }

    if (contactInfo.value == "")
    {
        document.getElementById("info").className="form-group has-error";
        document.getElementById("errorInfo").className="alert alert-danger"; 
        error=true;
    }
    else
    {
        document.getElementById("info").className="form-group has-success";
    }

    if (!error) return true; 
    else return false;
}
}

