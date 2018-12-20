import { FormGroup } from '@angular/forms';

export function showEmailError(form: FormGroup) {
  const control = form.controls.email;
  return control.errors ? control.errors.email : false;
}

export function showRequiredError(form: FormGroup, controlError: string) {
  const control = form.get(controlError);
  return control ? control.errors : false;
}

export function showFormError(form: FormGroup, controlError: string) {
  const control = form.get(controlError);
  return control ? control.errors : false;
}
