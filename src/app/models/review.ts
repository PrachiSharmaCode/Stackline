export class Review {
  customer: String;
  review: String;
  score: Number;

  constructor(customer, review, score) {
    this.customer = customer;
    this.review = review;
    this.score = score;
  }
}
