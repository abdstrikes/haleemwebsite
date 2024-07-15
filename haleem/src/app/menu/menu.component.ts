import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataListService } from '../shared/data-list.service';
import { Varieties, allVarietiesListModel } from '../shared/varieties.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent implements OnInit {
  newList: any;
  finalPath: any;
  allVarieties: any;
  constructor(private datalist: DataListService) { }

  ngOnInit() {

    this.getAllVarities();

    // allVarieties.haleem65 = this.newList[0]?.Name;
    // allVarieties.nalliHaleem = this.newList[1]?.Name;
    // allVarieties.specialHaleem = this.newList[2]?.Name;
    // allVarieties.haleem = this.newList[3]?.Name;


  }

  getAllVarities() {
    this.datalist.getListOfVarities()?.subscribe((data) => {
      this.allVarieties = data;
    })
  }

  openForm(data: null) {
    data = null;
  }

  deleteVariety(id: number) {
    this.datalist.deleteItem(id).subscribe((res)=>{
      this.getAllVarities()
    })
  }
}
