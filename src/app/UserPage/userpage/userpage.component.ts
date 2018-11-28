import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  userName = "Default Danny";
  userImage = "../assets/images/defaultuser.jpg";
  fileToUpload: any;

  constructor() {}

  ngOnInit() {
    if (localStorage.getItem("UserImage")) {
      this.userImage = localStorage.getItem("UserImage")
    }

    if (localStorage.getItem("Name")) {
      this.userName = localStorage.getItem("Name")
    }
  }


  submitData() {
    const nameBoxInput = ( < HTMLInputElement > document.getElementById("nameBox")).value
    localStorage.setItem("Name", nameBoxInput);

    const userImage = document.getElementById('chooseFile');
    console.log("user image", userImage);
    // const imgData = this.getBase64Image(userImage);
    localStorage.setItem("UserImage", this.userImage);
    location.reload();
  }

  resetData() {
    localStorage.clear();
    this.userName = "Default Danny";
    this.userImage = "../assets/images/defaultuser.jpg";
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.userImage = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }


  // getBase64Image(img) {
  //   var canvas = document.createElement("canvas");
  //   canvas.width = img.width;
  //   canvas.height = img.height;

  //   var ctx = canvas.getContext("2d");
  //   ctx.drawImage(img, 0, 0);

  //   var dataURL = canvas.toDataURL("image/png");

  //   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  // }

}
