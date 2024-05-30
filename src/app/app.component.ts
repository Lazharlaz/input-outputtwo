import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateOnomatopiaComponent } from './create-onomatopia/create-onomatopia.component';
import { FormsModule } from '@angular/forms';
import { NgFor,  } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CreateOnomatopiaComponent,FormsModule,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  onomatopiaList : string[] = []

  onDataChange(event: any): void {

    this.onomatopiaList.push(event)
    
  }
}
