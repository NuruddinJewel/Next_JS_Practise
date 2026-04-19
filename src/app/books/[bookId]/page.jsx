// import React from 'react';

// const BookDetailsPage = async ({ params }) => {
//     const { bookId } = await params;
//     const res = await fetch(`http://localhost:5000/books/${bookId}`);
//     const { title, author, price } = await res.json();
//     return (
//         <div>
//             <h2>Book Details : {bookId} </h2>
//             <h3>{title}</h3>
//             <p>Author: {author} </p>
//             <p>Price: {price}</p>

//         </div>
//     );
// };

// export default BookDetailsPage;
// Using generateStaticParams
//Statically Generate
export const generateStaticParams = async () => {
    const res = await fetch('http://localhost:5000/books');
    const books = await res.json();
    //[{bookId : 1}, {bookId : 2}]
    // return books.map(book => book.id)
    // return books.map(book => ({ bookId: book.id }))
    //using slice for SSG
    return books.slice(0, 3).map(book => ({ bookId: book.id }))
}

const BookDetailsPage = async ({ params }) => {
    const { bookId } = await params;
    const res = await fetch(`http://localhost:5000/books/${bookId}`);
    const { title, author, price } = await res.json();
    return (
        <div>
            <h2>Book Details : {bookId} </h2>
            <h3>{title}</h3>
            <p>Author: {author} </p>
            <p>Price: {price}</p>

        </div>
    );
};

export default BookDetailsPage;
// static generate npm run build
// (SSG)     prerendered as static HTML (uses generateStaticParams)
// npm start server
//Slice SSG-> return books.slice(0, 3).map(book => ({ bookId: book.id })) (bookId-1,2,3)