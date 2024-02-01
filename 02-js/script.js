const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//...............................Destructuring
/*
const book = getBook(3);
console.log(book);
const { title, author, publicationDate, genres, hasMovieAdaptation, pages } =
  book;
// console.log(title);
// console.log(author);
// console.log(publicationDate);
// console.log(genres);
// console.log(hasMovieAdaptation);
// console.log(pages);

const [primaryGenres, secondaryGenres, ...otherGenres] = genres;
// console.log(primaryGenres);
// console.log(secondaryGenres);
// console.log(otherGenres);

// ...................................Spread
const newGenres = ["epicDec", ...genres];
// console.log(newGenres);

const updateMovie = {
  ...book,
  //adding new property.
  movieProduction: "1995-08-22",
  //overwritting existing property.
  pages: 1300,
};
console.log(updateMovie);

const summary = `${title}, ${pages}-pages book was written by ${author} in ${publicationDate.split("-")[0]}.The move has been ${hasMovieAdaptation ? '' : 'not '}adapted to a movie.`;
console.log(summary);

const pageRange = pages > 1000 ? 'page numbers more than 1000.' : 'page numbers less than 1000.';
// console.log(pageRange);

const getYear = str => str.split("-")[0];
// console.log(getYear(publicationDate));

// console.log(true && false);
// console.log(false && true);
// console.log('imran' && 'hsn');
// console.log('imran' && 0);
// console.log(0 && 'imran');

// console.log(true || false);
// console.log(false || true);
// console.log('imran' || 0);

// const translateBook = book.translations.chinese;
// console.log(translateBook || 'not translated.');

// const reviewCount = book.reviews.librarything.reviewsCount;
// console.log(reviewCount);
// console.log(reviewCount || 'no data');
// console.log(reviewCount ?? 'no data');

function getTotalReview(item) {
    const goodreads = item.reviews?.goodreads?.reviewsCount ?? 0;
    const librarythings = item.reviews?.librarything?.reviewsCount ?? 0;
    console.log(goodreads)
    console.log(librarythings);
    return goodreads + librarythings;
}
console.log(getTotalReview(book));
*/

const books = getBooks();
console.log(books);

const titles = books.map((el) => el.title);
console.log(titles);

const essentialData = books.map((el) =>( 
  {
    title: el.title,
    author: el.author,
  })
);
console.log(essentialData);

const longBooks = books.filter(el=>el.pages > 500).filter(el=>el.hasMovieAdaptation);
console.log(longBooks);

const bookAdventure = books.filter(el=>el.genres.includes("adventure")).map(el=>el.title);
console.log(bookAdventure);

const pagesAllBooks = books.reduce((acc,el)=>acc+el.pages,0);
console.log(pagesAllBooks);

const random_array = [1,4,9,3,8,23,44,11,61,19];
const random_array_sort = random_array.slice().sort((a,b)=>a-b);
console.log(random_array_sort);
// console.log(random_array);

const sortBybooks = books.slice().sort((a,b)=>a.pages-b.pages).map(el=>el.title);
console.log(sortBybooks);
