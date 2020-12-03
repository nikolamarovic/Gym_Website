function getUsername(){
    document.getElementById("profile_username").innerHTML = localStorage.getItem('username');
}

function nutritionAppointment(imeVal,emailVal,telefonVal,datumVal,opisVal){
    
    if(imeVal=="" || emailVal=="" || telefonVal=="" || datumVal=="" || opisVal == "") return;
    
    var nutritionObj = {
        ime: imeVal,
        email: emailVal,
        phone: telefonVal, 
        datum: datumVal,
        opis: opisVal,
    };

    var doc = new jsPDF();
    doc.setFont('courier');
    doc.setFontType('bold');
    doc.text(20,20,"THANK YOU FOR MAKING AN APPOINTMENT!")

    doc.setFontType('normal');
    doc.text(20,30,"Appointment information:");
    doc.text(20,40,"Name: " + imeVal);
    doc.text(20,50,"Email: " + emailVal);
    doc.text(20,60,"Phone: " + telefonVal);
    doc.text(20,70,"Date: " + datumVal);
    doc.text(20,80,"Your question: " + opisVal); 

    doc.save('appointment_info.pdf');
  }

  function reserveMassage(imeVal,emailVal,telefonVal,datumVal,opisVal){
    if(imeVal=="" || emailVal=="" || telefonVal=="" || datumVal=="" || opisVal == "") return;
    var massageObj = {
        ime: imeVal,
        email: emailVal,
        phone: telefonVal, 
        datum: datumVal,
        opis: opisVal,
    };

    var doc = new jsPDF();
    doc.setFont('courier');
    doc.setFontType('bold');
    doc.text(20,20,"THANK YOU FOR MAKING AN APPOINTMENT!")

    doc.setFontType('normal');
    doc.text(20,30,"Appointment information:");
    doc.text(20,40,"Name: " + imeVal);
    doc.text(20,50,"Email: " + emailVal);
    doc.text(20,60,"Phone: " + telefonVal);
    doc.text(20,70,"Date: " + datumVal);
    doc.text(20,80,"Your question: " + opisVal); 
    doc.save('massage_confirm.pdf');
  }
