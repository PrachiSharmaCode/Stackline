import {Sale} from './sale';
import {Review} from './review';

export class Item {
  id: String;
  title: String;
  image: String;
  subtitle: String;
  brand: String;
  reviews: Review[];
  retailer: String;
  details: String[];
  tags: String[];
  sales: Sale[];

  constructor(_id, title, image, subtitle, brand, reviews, retailer, details, tags, sales) {
    this.id = _id;
    this.title = title;
    this.image = image;
    this.subtitle = subtitle;
    this.brand = brand;
    this.reviews = reviews;
    this.retailer = retailer;
    this.details = details;
    this.tags = tags;
    this.sales = sales;
  }
}
