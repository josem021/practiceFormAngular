import { Component } from '@angular/core';
import { RegistroComponent } from '../registro/registro.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [RegistroComponent, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  nombre = "";
  apellido= "";
  email= "";
  numero= "";
  contrasena ="";

  nombreEnviado =""; apellidoEnviado =""; emailEnviado = ""; numeroEnviado ="";

  mostrarDatos() {
    this.nombreEnviado = this.nombre;
    this.apellidoEnviado = this.apellido;
    this.emailEnviado = this.email;
    this.numeroEnviado = this.numero;

    
  }
  enviarDatosHijo(datos:string) {
    this.nombre = datos
  }

}
