import { Component, input } from '@angular/core';
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
  @Input () emailHijo: String ="";
  @Input () numeroHijo: String ="";
}
