import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {
  contactForm !: FormGroup;

  constructor(private readonly fb: FormBuilder){}

  ngOnInit():void{
    this.contactForm = this.initForm();
  }

  onSubmit(){
    console.log('FOrm =>', this.contactForm.value);

  }

  initForm(){
    return this.fb.group({
      name:['',[Validators.required, Validators.minLength(3)]],
      adult:['',[Validators.required]],
      depertament:[''],
      coment:['',[Validators.required]]
    })
  }

}
