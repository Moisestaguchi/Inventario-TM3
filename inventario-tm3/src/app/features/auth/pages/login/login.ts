import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  email = '';
  password = '';
  errorMessage = '';

  // Injeção de dependências usando inject()
  private authService = inject(AuthService);
  private router = inject(Router);

  async onSubmit() {
    try {
      await this.authService.login(this.email, this.password);
      console.log('Login bem-sucedido!');
      // Redireciona para o dashboard após o login
      this.router.navigate(['/dashboard']);
    } catch (err: any) {
      console.error('Erro no login:', err);
      // Define a mensagem de erro para ser exibida no HTML
      this.errorMessage = 'Falha ao logar. Verifique seu e-mail e senha.';
    }
  }
}
