import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  cadastrarForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {
    
      this.iniciarFormulario()
   }

  ngOnInit(): void {
  }

  iniciarFormulario(): void {
    this.cadastrarForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email:    ['', Validators.required],
      nascimento: ['', Validators.required],
    })
  }
validarForm() {

console.log(this.cadastrarForm)

}

}
