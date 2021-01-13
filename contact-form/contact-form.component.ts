import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl} from '@angular/forms';
import { CserviceService} from '../cservice.service';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  FormData: FormGroup;
  constructor(private builder: FormBuilder, private contact: CserviceService) { }

  ngOnInit() {
    this.FormData=this.builder.group({
        Fullname: new FormControl('', [Validators.required]),
        Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
        comment: new FormControl('', [Validators.required])
    });
  }

  onSubmit(FormData){
    console.log(FormData)
    this.contact.PostMessage(FormData).subscribe(Response=>{
      location.href='https://mailthis.to/confirm'
      console.log(Response)
    },error=>{
      console.warn(error.responseText)
      console.log({error})
    })
  }

}
