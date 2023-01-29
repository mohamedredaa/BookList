class Book {
    constructor( title , author , isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


class UI {

    addBookList(book){

        const list = document.getElementById('book-list');
        const row  = document.createElement('tr'); 
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href = "#" class="delete">X</td>
        `
        list.appendChild(row);
        // console.log(row)

    }
    
    showAlert( message , className){

        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector("#book_form");
    
        container.insertBefore(div, form);
    
        setTimeout(() => {
            document.querySelector('.alert')
            .remove();
            
        }, 3000);

    }
    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();

        }
    }

    clearFields(){

        document.getElementById("title").value = '';
        document.getElementById("author").value = '';
        document.getElementById("isbn").value = '';
    

    }
}

document.getElementById("book_form").addEventListener('submit' ,
 function(e){
    // console.log("test");
      let title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value

        //  console.log (title,author,isbn);
      let book = new Book( title , author , isbn)
      console.log(book)
       
      const ui = new UI();
    //   console.log(ui)
       //validation
       if( title === '' || author === '' ||  isbn === ''  )
       {
        ui.showAlert('please fill in all fields' , 'error');
       }
       else{
        //add book 
        ui.addBookList(book);
       // showAlert
        ui.showAlert('Book added!' , 'success');
       // clearFields
        ui.clearFields();
       }
   

      e.preventDefault();
});

document.getElementById("book-list").addEventListener('click' , function(e){
    const ui = new UI();
     ui.deleteBook(e.target);
     ui.showAlert('Book added!' , 'success');
     e.preventDefault();

})