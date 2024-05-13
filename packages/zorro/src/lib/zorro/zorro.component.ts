import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CoreComponent } from '@org/core';

@Component({
  selector: 'lib-zorro',
  standalone: true,
  imports: [CommonModule, CoreComponent],
  templateUrl: './zorro.component.html',
  styleUrl: './zorro.component.css',
})
export class ZorroComponent { }
