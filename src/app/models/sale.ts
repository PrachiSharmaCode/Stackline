export class Sale {
  weekEnding: String;
  retailSales: String;
  wholesaleSales: String;
  unitsSold: String;
  retailerMargin: String;

  constructor(weekEnding, retailSales, wholesaleSales, unitsSold, retailerMargin) {
    this.weekEnding = weekEnding;
    this.retailSales = retailSales;
    this.wholesaleSales = wholesaleSales;
    this.unitsSold = unitsSold;
    this.retailerMargin = retailerMargin;
  }
}
