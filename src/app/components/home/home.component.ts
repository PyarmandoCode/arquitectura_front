import { Component  ,OnInit} from '@angular/core';
import { CafesService } from 'src/app/cafes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  productosList:any[]=[];

  constructor(private productosService:CafesService) {}

  ngOnInit(): void {
    this.productosService.getproductos()
    .subscribe((response:any[])=>this.productosList=response);
  }
}
