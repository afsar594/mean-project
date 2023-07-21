import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
loader: boolean=false;
  selectedFile: any;
  fg:any
  formData: any;
  fileName = '';
  file: any;
constructor(private api:AdminserviceService){
  this.loader=true
  setTimeout(() => {
    this.loader=false
  }, 1000);
  this.fg = new FormGroup({
    name: new FormControl(null),
    details: new FormControl(null),
  });


}

onFileSelected(event:any) {

   this.file = event.target.files[0];
   

}
onUpload(){

  const formData = new FormData();
  formData.set('file',this.file);
  formData.set('name',this.fg.controls['name'].value);
  formData.set('details',this.fg.controls['details'].value);
this.api.fileUpload('upload',formData).subscribe((res)=>{
  console.log(res);
})
}
}
