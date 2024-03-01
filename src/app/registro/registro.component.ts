import { Component, EventEmitter, Output, input } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';
import { Input } from '@angular/core';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormularioComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  @Input () nombresHijo: string = ""; 
  @Input () apellidosHijo: string = ""; 
  @Input () emailHijo: string ="";
  @Input () numeroHijo: string ="";

  @Output () enviarDatos = new EventEmitter<string>();

  enviarDatosM() {
    this.enviarDatos.emit(this.nombresHijo);
  }
}