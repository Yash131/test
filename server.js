const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const admin = "kumarstephen007@gmail.com";
// const admin = "kavitajangra.1014@gmail.com"
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

const userID = "k.developer.dhanjal@gmail.com";

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// k.developer.dhanjal@gmail.com
// [2/1, 3:43 PM] Ajay Kumar: Mummy@1014

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "k.developer.dhanjal@gmail.com",
    pass: "Mummy@1014",
  },
});




app.post("/", function (req, res) {
  let data = req.body;
  console.log(data);


  if(data.marital && data.height){
    console.log('isMaritial');
    var mari_height = `
    <tr>
      <th>Marital-Status</th>
      <td>${data.marital}</td>
    </tr>
    <tr>
      <th>Height</th>
      <td>${data.height}</td>
    </tr>

    `
  }else if(data.height ){

    var mari_height = `
    <tr>
    <th>Height</th>
    <td>${data.height}</td>
    </tr>
  `;
  }else{
    console.log('isMaritialNope');

    var mari_height = ''
  }

  let mailOptions = {
    from: "k.developer.dhanjal@gmail.com",
    to: admin,
    subject: "Sending Email using Node.js",
    text: "That was easy!",
    html: `
    <table border=1 style='width:100%;'>

  <tr>
    <th>First Name</th>
    <td>${data.fname}</td>
  </tr>
  <tr>
    <th>Last Name</th>
    <td>${data.lname}</td>
  </tr>
  <tr>
    <th>DOB</th>
    <td>${data.dob}</td>
  </tr>
  <tr>
    <th>Age</th>
    <td>${data.age}</td>
  </tr>
  <tr>
  <th>Category</th>
  <td>${data.category}</td>
</tr>
  ${mari_height}
  <tr>
    <th>Email</th>
    <td>${data.email}</td>
  </tr>
  <tr>
    <th>Mobile</th>
    <td>${data.mobile}</td>
  </tr>
  <tr>
    <th>Landline</th>
    <td>${data.landline}</td>
  </tr>
  <tr>
    <th>Address</th>
    <td>${data.address}</td>
  </tr>
  <tr>
    <th>City</th>
    <td>${data.city}</td>
  </tr>
  <tr>
    <th>Pincode</th>
    <td>${data.pincode}</td>
  </tr>

  </table>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send(error.message);
    } else {
      console.log("Email sent to: " + admin + "Some Info: " + info.response);
      res.send("Email send Successfully");
    }
  });

  res.send({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
