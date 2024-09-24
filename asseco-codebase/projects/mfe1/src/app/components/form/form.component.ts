import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';
import { ReviewFormComponent } from 'shared-library';
import { FooterComponent } from '../layout/footer/footer.component';

@Component({
  selector: 'app-mfe1-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    ReviewFormComponent,
    FooterComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  orderForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      customerName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      items: this.fb.array([this.createItem()]),
    });
  }

  createItem() {
    return this.fb.group({
      itemName: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
    });
  }

  addItem() {
    this.items?.push(this.createItem());
  }

  removeItem(index: number) {
    this.items?.removeAt(index);
  }

  get items(): FormArray {
    return this.orderForm.get('items') as FormArray;
  }

  onSubmit() {
    if (this.orderForm.valid) {
      console.log('Order submitted:', this.orderForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
