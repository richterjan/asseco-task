import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FooterComponent } from '../layout/footer/footer.component';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'lib-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss'],
  imports: [ReactiveFormsModule, FooterComponent, NgForOf, NgIf],
  standalone: true,
})
export class ReviewFormComponent {
  reviewForm: FormGroup;

  @Output() submitReview = new EventEmitter<{
    rating: number;
    comment: string;
  }>();

  constructor(private fb: FormBuilder) {
    this.reviewForm = this.fb.group({
      rating: [null, Validators.required],
      comment: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.reviewForm.valid) {
      this.submitReview.emit(this.reviewForm.value);
    }
  }
}
