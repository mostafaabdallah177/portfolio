
const sendMail=()=>{
    var yahoo=document.getElementById("mail")
    var message=document.getElementById("mail")
    var phone= document.getElementById("phone")
    var name= document.getElementById("name")
    var mailOptions = {
        from: yahoo.value,
        to: 'engr.mostafaabdalla177@yahoo.com',
        subject: `Hello My Name is ${name.value} 
        and my Phone number is ${phone.value}
        i wont tell you >>>>`
      }
    //   console.log(yahoo.value)
    //   console.log(subject)
      console.log(mailOptions)
}