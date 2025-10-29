import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AlertasService } from '../../services/alertas.service';

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatIconModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private fb = inject(FormBuilder);
  private alertas = inject(AlertasService);

  loginForm = this.fb.group({
    usuario: ['', [Validators.required]],
    clave: ['', [Validators.required, Validators.minLength(6)]]
  })

  onSubmit() {
    const { usuario, clave } = this.loginForm.value;

    if (!usuario) {
      this.alertas.error('Error', 'El campo usuario es obligatorio');
      return;
    }
    if (!clave) {
      this.alertas.error('Error', 'El campo clave es obligatorio');
      return;
    }

    if (this.loginForm.valid) {
      this.alertas.success('Éxito', 'Inicio de sesión exitoso');
    } else {
      this.alertas.error('Error', 'Formulario inválido. Verifique los datos ingresados.');
    }
  }
} 
