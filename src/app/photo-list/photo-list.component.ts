import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo'
import { Router } from '@angular/router';
import { PhotoService } from '../photo.service';
@Component({
  templateUrl: './photo-list.component.html',
  selector: 'app-photo-list',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent {
  photoList: Photo[] | undefined;
  constructor(private photoService: PhotoService, private router:Router) { }

  ngOnInit(): void {
    this.getPhotos();
  }
  private getPhotos() {
    this.photoService.getPhotoList().subscribe(data => {
      //console.log(data);
      this.photoList = data;
    });
  }
  updatePhoto(id: number) {
    this.router.navigate(['update-photo', id]);
  }
  deletePhoto(id: number) {
    this.photoService.deletePhoto(id).subscribe(data => {
      console.log(data);
      this.getPhotos();
    });
  }
  photoDetails(id: number) {
    this.router.navigate(['photo-details', id]);
  }
}
