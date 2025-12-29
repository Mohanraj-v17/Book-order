class Book{
      
    constructor(title, auhtor, isbn){

           this.title = title; 
           this.author = author; 
           this.isbn = isbn; 

    }

}


class UI{

    addBookToList(){

        const list = document.querySelector("#book-list");

        const row = document.createElement("tr");

        row. = `<td>${book.title}</td>
              <td>${book.author}</td>
              <td>${book.isbn}</td>
              <td class="delete">
                <span class="btn btn-danger">X</span>
              </td>`;

              list.appendChild(row);


    
    }

    clearFields(){
         document.querySelector("#title").value = "";
         document.querySelector("#author").value = "";
         document.querySelector("#isbn").value = "";
    
    }


    clearTasks(){
           document.querySelector("#book-list").innerHTML = "";
    }

    deleteTasks(){
            item.parentElement.remove();
    }

    showAlert(message, type){
             this.clearAlert();

        const div = document.createElement("div");

        div.className = `alert alert-${type}`;

        div.innerText = message;

        document.querySelector(".show-alert").appendChild(div);

    setTimeout(function(){
        document.querySelector(".alert").remove();
        this.clearAlert();
    },3000

    );
    }

    clearAlert(){
           const currentAlert = document.querySelector(".alert");

        if(currentAlert){
            currentAlert.remove();

        }      
    }

}

class storage{

     getBooks(){

        let books;

        if(localStorage.getItem("books") === null ){
            books = [];
        }else {
            books = JSON.parse(localStorage.getItem("books"));
        }

        return books;

     }

}

addbooks(book){

    const books = this.getBooks();
    
    books.push(book);

    console.log(books)


}


document.querySelector("#book-form").addEventListener("submit", function (e) {

    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const isbn = document.querySelector("#isbn").value;

 const ui = new UI();
  const storage = new Storage();
     
     
    if (title === "" || author === "" || isbn === "") {
        ui.showAlert("please fill the fields", "danger");
    } else {

        
        const book = new Book(title, author, isbn);

        ui.showAlert("book added", "success");


        ui.addBookToList(book);
        storage.addbooks(book);
        ui.clearFields();
       

    }

})


 document.querySelector("#book-list").addEventListener("click",function(e){
       
        if(e.target.parentElement.classList.contains("delete")){
            
            const ui = new UI();

            ui.deleteTasks(e.target.parentElement);

            ui.showAlert("book deleted", "success");
            
        }

    })


      document.querySelector("#clear").addEventListener("click", function(e){
        const ui = new UI();

        ui.clearTasks();
        ui.showAlert("all clear", "success");
    })