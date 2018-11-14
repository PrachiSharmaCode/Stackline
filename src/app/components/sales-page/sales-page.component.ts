import {Component, OnInit} from '@angular/core';
import {ItemDetailsService} from '../../services/itemDetail/item-details.service';
import {Item} from '../../models/Item';
import {Sale} from '../../models/sale';

@Component({
  selector: 'app-sales-page',
  templateUrl: './sales-page.component.html',
  styleUrls: ['./sales-page.component.css']
})
export class SalesPageComponent implements OnInit {


  public items = [];
  item: Item;
  saleDetails: Sale[];
  public gotItem = false;
  public wholeSale = [];
  public retailSale = [];

  public ChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
  };
  public Chartlabels = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];
  public ChartType = 'line';
  public ChartLegend = true;
  public ChartData = [
    {
      data: this.wholeSale,
      label: 'wholeSale',
    },
    {
      data: this.retailSale,
      label: 'RetailSale',
    },
  ];


  constructor(private itemDetailService: ItemDetailsService) {
  }

  getItemDetails(test: Item[]) {
    console.log('inside grtitem');
    // console.log(this.items);
    for (let i = 0; i < test.length; i++) {
      if (test[i].id === 'B007TIE0GQ') {
        this.item = test[i];
      }
    }
    console.log(this.item);

    for (let j = 0; j < this.item.sales.length; j++) {
      this.wholeSale.push(this.item.sales[j].wholesaleSales);
    }
    console.log(this.wholeSale);

    for (let k = 0; k < this.item.sales.length; k++) {
      this.retailSale.push(this.item.sales[k].retailSales);
    }

    for (let x = 0; x < test.length; x++) {
      if (test[x].id === 'B007TIE0GQ') {
        this.saleDetails = test[x].sales;
      }
    }
    console.log(this.saleDetails);
    this.gotItem = true;
  }


  ngOnInit() {
    this.itemDetailService.getData()
      .subscribe((item => this.getItemDetails(item)));
  }
}
