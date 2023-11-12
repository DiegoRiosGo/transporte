import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CamaraService } from 'src/app/services/servCamara/camara.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  capturedImage: any;

 
  constructor(private cameraService: CamaraService) {}

  ngOnInit() {
  }

  async takePicture() {
    this.capturedImage = await this.cameraService.takePicture();
  }

  
}
