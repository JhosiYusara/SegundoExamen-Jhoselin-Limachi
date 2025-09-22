

import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui',
  standalone: true,
  imports: [CommonModule, Header],
  templateUrl: './ui.html',
  styleUrl: './ui.scss'
})
export class Ui {}
