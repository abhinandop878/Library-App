import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  constructor(private myapi:ApiService) { }
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
    this.myapi.addBooks(data).subscribe((response)=>{
      console.log(response)
      alert("Successfully added!")
      this.bookTitle=""
      this.authorName=""
      this.isbn=""
      this.authorEmail=""
      this.bookSummary=""
      this.publisher=""
      this.pageCount=""
      this.dateOfPublisher=""
      this.language=""
      this.publicationCountry=""
      this.edition=""
    })
  }
  ngOnInit(): void {
  }

}
