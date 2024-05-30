import { CommonModule } from '@angular/common';
import { Component, EventEmitter,  Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-onomatopia',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './create-onomatopia.component.html',
  styleUrl: './create-onomatopia.component.css'
})
export class CreateOnomatopiaComponent {
  @Output()
  dataChange: EventEmitter<string> = new EventEmitter();
  onomatopia:string = "";


  createOnomatopia(): void {
    this.dataChange.emit(this.onomatopia);
  }
}
