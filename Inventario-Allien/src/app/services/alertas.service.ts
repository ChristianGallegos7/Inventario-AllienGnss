import { Injectable } from '@angular/core';

import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  private loadingVisible = false;

  showAlert(title: string, text: string, icon: SweetAlertIcon = 'info', timer?: number) {
    Swal.fire({
      title,
      text,
      icon,
      timer,
      showConfirmButton: !timer,
      timerProgressBar: !!timer,
      customClass: {
        popup: 'shadow-lg rounded-xl'
      }
    });
  }

  success(title: string, text: string, timer = 2000) {
    this.showAlert(title, text, 'success', timer);
  }

  error(title: string, text: string) {
    this.showAlert(title, text, 'error');
  }

  warning(title: string, text: string) {
    this.showAlert(title, text, 'warning');
  }

  info(title: string, text: string) {
    this.showAlert(title, text, 'info');
  }

  confirm(title: string, text: string, onConfirm: () => void, onCancel?: () => void) {
    Swal.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, continuar',
      cancelButtonText: 'Cancelar',
      customClass: {
        popup: 'shadow-lg rounded-xl'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm();
      } else if (onCancel) {
        onCancel();
      }
    });
  }

  showLoading(title: string = 'Cargando...') {
    if (!this.loadingVisible) {
      Swal.fire({
        title,
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
        customClass: {
          popup: 'shadow-lg rounded-xl'
        }
      });
      this.loadingVisible = true;
    }
  }

  /**
   * Cierra el modal de loading
   */
  closeLoading() {
    if (this.loadingVisible) {
      Swal.close();
      this.loadingVisible = false;
    }
  }
}
