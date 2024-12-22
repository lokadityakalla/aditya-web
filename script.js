const books = [
    { id: 1, title: "DC", price: 299.00, image: "dcimage.jpg", author:"Malcolm Wheeler-Nicholson founded DC Comics in 1934. Introducing publications like Detective Comics.His efforts established the framework for what became one of the most influential comic book publishers in history."  },
    { id: 2, title: "Ben 10", price: 319.00, image: "benimage.jpg", author:"Steven T. Seagle The show follows Ben Tennyson, a boy who uses the Omnitrix to transform into aliens. First aired in 2005, it became a hit franchise with spin-offs, movies, and global success."},
    { id: 3, title: "Harry Potter", price: 249.00, image: "harrypotterimage.jpg", author:"J.K. Rowling, a British author. The series follows Harry Potter, a young wizard who battles the dark lord Voldemort. First published in 1997, it became a global phenomenon with seven books, blockbuster movies, and worldwide acclaim."},
    { id: 5, title: "Tom and Jerry", price: 269.00, image: "tomandjerryimage.jpg", author: "William Hanna and Joseph Barbera created the iconic cartoon about a comedic rivalry between a cat and a mouse. Their innovative animation, clever humor, and timeless slapstick comedy earned the series seven Academy Awards." },
    { id: 6, title: "The Jungle Book", price: 249.00, image: "junglebookimage.jpg", author: "Rudyard Kipling was a British author and poet best known for writing The Jungle Book. Set in the Indian jungle, the book features stories of Mowgli, a boy raised by wolves, and his adventures with characters like Baloo and Bagheera. Celebrated for its rich storytelling and exploration of nature and human morality, it remains a classic of children's literature and one of Kipling's most famous works." },
    { id: 7, title: "Stuart Little", price: 299.00, image: "stuartlittleimage.jpg", author: "E.B. White was an American author best known for his children's classic Stuart Little. The story follows Stuart, a small, mouse-like boy, on his adventures in a human world. Celebrated for its imaginative storytelling and charm, the book is a beloved piece of children's literature and marked White's debut as a writer for young readers." },
    { id: 8, title: "The Lion King", price: 219.00, image: "lionkingimage.jpg", author: "Roger Allers The Lion King is a 1994 animated film produced by Disney. The story, inspired by Shakespeare's Hamlet, follows Simba, a young lion prince, as he struggles to reclaim his rightful place as king after the tragic death of his father, Mufasa. The film's themes of responsibility, friendship, and the circle of life made it a beloved classic." },
    { id: 9, title: "Marvel", price: 349.00, image: "marvelimage.jpg", author: "Stan Lee Marvel Comics is a comic book publisher known for iconic superhero characters like Spider-Man, Iron Man, Captain America, and the X-Men. Created by a variety of writers and artists, with key contributions from Stan Lee and Jack Kirby, Marvel revolutionized the superhero genre, creating interconnected universes and stories that have shaped comics, movies, and popular culture worldwide." },
    { id: 10, title: "Sherlock Holmes", price: 399.00, image: "sherlock holmes image.jpg", author: "Arthur Conan Doyle Sherlock Holmes is a fictional detective created by British author Sir Arthur Conan Doyle. First appearing in A Study in Scarlet 1887, Holmes is known for his brilliant powers of observation and deduction. Along with his loyal companion, Dr. Watson, Holmes solves intricate mysteries, becoming one of the most famous characters in detective fiction." }
];

// Load cart from local storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize the book list
const bookList = document.getElementById('book-list');
books.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    bookDiv.innerHTML = `
        <img src="${book.image}" alt="${book.title}" class="book-image">
        <h3>${book.title}</h3>
        <p>Price: ₹${book.price.toFixed(2)}</p>
        <p><strong>Author:</strong> ${book.author}</p>
        <button onclick="addToCart(${book.id})">Add to Cart</button>
        <div class="book-details">
        
            
        </div>
    `;
    bookList.appendChild(bookDiv);
});

// Add to cart function
function addToCart(bookId) {
    const book = books.find(b => b.id === bookId);
    cart.push(book);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(${book.title} ${book.price.toFixed(2)} has been added to your cart.);
}

const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(query)
    );
    
    bookList.innerHTML = '';
    filteredBooks.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.className = 'book';
        bookDiv.innerHTML = `
            <img src="${book.image}" alt="${book.title}" class="book-image">
            <h3>${book.title}</h3>
            <p>Price: ₹${book.price.toFixed(2)}</p>
            <button onclick="addToCart(${book.id})">Add to Cart</button>
        `;
        bookList.appendChild(bookDiv);
    });
});

// Initial load
searchInput.dispatchEvent(new Event('input'));
