import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  constructor() { }
  bookTitle=""
  authorName=""
  isbn=""
  authorEmail=""
  bookSummary=""
  publisher=""
  pageCount=""
  dateOfPublisher=""
  language=""
  publicationCountry=""
  edition=""
  readValue=()=>{
    let data={
      "bookTitle":this.bookTitle,
      "authorName":this.authorName,
      "isbn":this.isbn,
      "authorEmail":this.authorEmail,
      "bookSummary":this.bookSummary,
      "publisher":this.publisher,
      "pageCount":this.pageCount,
      "dateOfPublisher":this.dateOfPublisher,
      "language":this.language,
      "publicationCountry":this.publicationCountry,
      "edition":this.edition
    }
  }
  ngOnInit(): void {
  }

}
