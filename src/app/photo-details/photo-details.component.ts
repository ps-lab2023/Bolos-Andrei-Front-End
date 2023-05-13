import { Component } from '@angular/core';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent {
  id!: number;
  photo!: Photo;

  constructor(private photoService: PhotoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.photo = new Photo();
    this.photoService.getPhotoById(this.id).subscribe(data => {
      this.photo = data;
    })
  }
}
