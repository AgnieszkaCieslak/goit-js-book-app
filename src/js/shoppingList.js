// import { getTopBooks, getBooksId } from './book-api';

// import storageMethods from './storage-methods';
// import amazonImage1 from '../images/shoppingList/amazon-shop-1x.png';
// import amazonImage2 from '../images/shoppingList/amazon-shop-2x.png';
// import appleImage1 from '../images/shoppingList/apple-shop-1x.png';
// import appleImage2 from '../images/shoppingList/apple-shop-2x.png';
// import bookshopImage1 from '../images/shoppingList/bookshop-1x.png';
// import bookshopImage2 from '../images/shoppingList/bookshop-2x.png';

// const shoppingListEl = document.querySelector('.shopping__cards');
// const notificationContainerEl = document.querySelector('.shopping__storage');


// const logoTrashPath = new URL('/src/images/icons.svg', import.meta.url);


// // const navlinks = document.querySelectorAll('.navigation__link');
// // const SHOP_LIST_KEY = 'selected-books';


// function saveTopBooks() {
//   getTopBooks().then(
//     response => {
//       console.log(response);
//       if (!response || response.length === 0) {
//         console.error('Nie znaleziono listy książek.');
//         return;
//       }
//     })}

//     //       const allBookIds = [];

//     //       response.forEach(list => {
//     //         if (list.books && list.books.length > 0) {
//     //           const bookIds = list.books.map(book => book._id);
//     //           allBookIds.push(...bookIds);
//     //         }
//     //       });

//     //       console.log('ID wszystkich książek z listy:', allBookIds);
//     //       storageMethods.save('selected-books', allBookIds);

//     //     .catch (error => {
//     //   console.log(error);
//     // };
//     //       const allBookIds = [];

//     //       response.forEach(list => {
//     //         if (list.books && list.books.length > 0) {
//     //           const bookIds = list.books.map(book => book._id);
//     //           allBookIds.push(...bookIds);
//     //         }
//     //       });

//     //       console.log('ID wszystkich książek z listy:', allBookIds);
//     //       storageMethods.save('selected-books', allBookIds);
//     //     });
//     //     .catch(error => {
//     //       console.error(error);
//     //     });
//     // };
//     // document.getElementById('save-books-button').addEventListener('click', saveTopBooks);

//     window.addEventListener('load', loadAndRenderBooks);
  

  // async function loadAndRenderBooks() {
  //   try {
  //     const storedBookIds = storageMethods.load('selected-books');

  //     if (!storedBookIds || storedBookIds.length === 0) {
  //       console.error('No book IDs found in local storage.');
  //       if (notificationContainerEl) {
  //         notificationContainerEl.style.display = 'block';
  //       }
  //       return;
  //     }
  //     notificationContainerEl.style.display = 'none';

  //     if (notificationContainerEl) {
  //       notificationContainerEl.style.display = 'none';
  //     }
  //     const booksDetails = await Promise.all(storedBookIds.map(id => getBooksId(id)));

  //     // console.log('Fetched book details:', booksDetails);

  //     const container = document.querySelector('.shopping__cards');

  //     const markup = booksDetails
  //       .map(
  //         ({
  //           _id,
  //           book_image,
  //           author,
  //           book_image_width,
  //           book_image_height,
  //           title,
  //           list_name,
  //           description,
  //           buy_links: [amazon, apple, , , bookshop],
  //         }) => {
  //           return `<li class="shopping__card" data-id="${_id}">
  //     <div class="shopping__block">
  //       <div>
  //         <div class="shopping__thumb">
  //           <img src="${book_image}" alt="${list_name}" class="shopping__book-img" width="${book_image_width}" height="${book_image_height}"/>
  //         </div>
  //         </div>
  //         <div class="shopping__wrap">
  //         <h2 class="shopping__title">${cutTitle(title)}</h2>
  //         <p class="shopping__category">${list_name}</p>
  //         <p class="shopping__book-description">${description}</p>
  //         <p class="shopping__book-author">${author}</p>
  //         <ul class="shopping__shops">
  //           <li class="shopping__shop">
  //             <a href="${
  //               amazon.url
  //             }" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon-book site">
  //               <img srcset="${amazonImage1} 1x, ${amazonImage2} 2x" src="${amazonImage1}" alt="${
  //             amazon.name
  //           }" class="shopping__shop-img" width="48" height="15"/>
  //             </a>
  //           </li>
  //           <li class="shopping__shop">
  //             <a href="${
  //               apple.url
  //             }" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-book site">
  //               <img srcset="${appleImage1} 1x, ${appleImage2} 2x" src="${appleImage1}" alt="${
  //             apple.name
  //           }" class="shopping__shop-img" width="28" height="27"/>
  //             </a>
  //           </li>
  //           <li class="shopping__shop no-icon">
  //             <a href="${
  //               bookshop.url
  //             }" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Book-shop site">
  //               <img srcset="${bookshopImage1} 1x, ${bookshopImage2} 2x" src="${bookshopImage1}" alt="${
  //             bookshop.name
  //           }" class="shopping__shop-img" width="32" height="30"/>
  //             </a>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //     <button type="button" class="shopping__btn" aria-label="Delete the book from shopping list">
  //       <svg class="shopping__btn-icon" width="18" height="18">
  //       <use href="${logoTrashPath}#icon-trash"></use>
  //       </svg>
  //     </button>
  //   </li>`;
  //         },
  //       )
  //       .join('');
  //       }}
  //       shoppingListEl.innerHTML = markup;
  //     shoppingListEl.addEventListener('click', onTrashClick);

//       if (container) {
//         container.innerHTML = markup;
//       } else {
//         console.error('Nie znaleziono kontenera na stronie.');
//       }

//       if (shoppingListEl) {
//         shoppingListEl.addEventListener('click', onTrashClick);
//       } else {
//         console.error('Element shoppingListEl nie istnieje na stronie.');
//       }
//     } catch (error) {
//       console.error('Error while loading and rendering books:', error);
//     }
//   }

//   function onTrashClick(e) {
//     const target = e.target.closest('.shopping__btn');
//     if (!target) {
//       return;
//     }

//     const bookEl = target.closest('.shopping__card');
//     const seekedId = bookEl.dataset.id.trim();
//     const storedBookIds = storageMethods.load('selected-books');
//     const removedElIndexFromStorage = storedBookIds.findIndex(id => id === seekedId);

//     if (removedElIndexFromStorage !== -1) {
//       storedBookIds.splice(removedElIndexFromStorage, 1);
//       storageMethods.save('selected-books', storedBookIds);
//       bookEl.remove();
//     } else {
//       console.error('Book ID not found in local storage.');
//     }
//   }

//   function cutTitle(title) {
//     if (window.innerWidth <= 768) {
//       if (title.length > 17) {
//         const shortenedTitle = title.substring(0, 17) + '...';
//         // console.log(`Original title: ${title}, Shortened title: ${shortenedTitle}`);
//         return shortenedTitle;
//       }
//       return title;
//     }
//     return title;
//   }

//   window.addEventListener('resize', function () {
//     // console.log('Window resized');
//     const titleElements = document.querySelectorAll('.shopping__title');
//     // console.log('titleElements:', titleElements);
//     titleElements.forEach(titleElement => {
//       const fullTitle = titleElement.dataset.fullTitle || titleElement.textContent;
//       // console.log(`fullTitle: ${fullTitle}`);
//       const shortenedTitle = cutTitle(fullTitle);
//       // console.log(`Applying shortened title: ${shortenedTitle}`);
//       titleElement.textContent = shortenedTitle;
//       if (!titleElement.dataset.fullTitle) {
//         titleElement.dataset.fullTitle = fullTitle;
//       }
//     });
//   });


import storageMethods from './storage-methods';
import amazonImage1 from '../images/shoppingList/amazon-shop-1x.png';
import amazonImage2 from '../images/shoppingList/amazon-shop-2x.png';
import appleImage1 from '../images/shoppingList/apple-shop-1x.png';
import appleImage2 from '../images/shoppingList/apple-shop-2x.png';
import bookshopImage1 from '../images/shoppingList/bookshop-1x.png';
import bookshopImage2 from '../images/shoppingList/bookshop-2x.png';

const shoppingListEl = document.querySelector('.shopping__cards');
const notificationContainerEl = document.querySelector('.shopping__storage');
// const shoppingHeadingEl = document.querySelector('.shopping__heading');
const shoppingBtnTrash = document.querySelector('.shopping__btn');
const SHOP_LIST_KEY = 'selected-books';



const logoTrashPath = new URL('/src/images/icons.svg', import.meta.url);
const navlinks = document.querySelectorAll('.navigation__link');

function setActiveState(elements) {
  elements.forEach((item, index) => {
    const href = item.getAttribute('href').match(/\/[a-z-]*.html/g);
    const windowHref = window.location.href.match(/Projekt-team.JS\/$/g);
    const windowHrefAfterRegistration = window.location.href.match(/Projekt-team.JS\/#$/g);
    const reg = window.location.href.match(/1234\/#$/g);
    if (
      window.location.href.includes(href) ||
      (window.location.href.includes(windowHref) && index === 0) ||
      (window.location.href.includes(windowHrefAfterRegistration) && index === 0) ||
      (window.location.href.includes(reg) && index === 0)
    ) {
      item.classList.add('is-activ');
    }
  });
}

setActiveState(navlinks);
let bookList = storageMethods.load(SHOP_LIST_KEY);

// loadAndRenderBooks(bookList);


// function loadAndRenderBooks(data) {
//    let booksDetails = data;
//       const markup = booksDetails
//       .map(
//         ({
//           _id,
//           book_image,
//           author,
//           book_image_width,
//           book_image_height,
//           title,
//           list_name,
//           description,
//           buy_links: [amazon, apple, , , bookshop],
//         }) => {
//           return `<li class="shopping__card" data-id="${_id}">
//       <div class="shopping__block">
//         <div>
//           <div class="shopping__thumb">
//             <img src="${book_image}" alt="${list_name}" class="shopping__book-img" width="${book_image_width}" height="${book_image_height}"/>
//           </div>
//           </div>
//           <div class="shopping__wrap">
//           <h2 class="shopping__title">${title}</h2>
//           <p class="shopping__category">${list_name}</p>
//           <p class="shopping__book-description">${description}</p>
//           <p class="shopping__book-author">${author}</p>
//           <ul class="shopping__shops">
//             <li class="shopping__shop">
//               <a href="${
//                 amazon.url
//               }" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Amazon-book site">
//                 <img srcset="${amazonImage1} 1x, ${amazonImage2} 2x" src="${amazonImage1}" alt="${
//             amazon.name
//           }" class="shopping__shop-img" width="48" height="15"/>
//               </a>
//             </li>
//             <li class="shopping__shop">
//               <a href="${
//                 apple.url
//               }" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Apple-book site">
//                 <img srcset="${appleImage1} 1x, ${appleImage2} 2x" src="${appleImage1}" alt="${
//             apple.name
//           }" class="shopping__shop-img" width="28" height="27"/>
//               </a>
//             </li>
//             <li class="shopping__shop">
//               <a href="${
//                 bookshop.url
//               }" class="shopping__shop-link" target="_blank" crossorigin="anonymous"  rel="noopener noreferrer" aria-label="Book-shop site">
//                 <img srcset="${bookshopImage1} 1x, ${bookshopImage2} 2x" src="${bookshopImage1}" alt="${
//             bookshop.name
//           }" class="shopping__shop-img" width="32" height="30"/>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <button type="button" class="shopping__btn" aria-label="Delete the book from shopping list">
//         <svg class="shopping__btn-icon" width="18" height="18">
//         <use href="${logoTrashPath}#icon-trash"></use>
//         </svg>
//       </button>
//     </li>`;
//         },
//       )
//       .join('');

//     shoppingListEl.innerHTML = markup;
//     shoppingBtnTrash.addEventListener('click', onTrashClick);
//   }
  

function cutNameCategory(name) {
  if (window.innerWidth <= 768) {
    if (name.length > 20) {
      return name.substring(0, 20) + '...';
    }
    return name;
  }
  return name;
}



function onTrashClick(e) {
  const target = e.target.closest('.shopping__btn');

  if (!target) {
    return;
  }
  //*
  const bookEl = target.closest('.shopping__card');
  const seekedId = bookEl.dataset.id.trim();
  //*
  // Find the index of the book to be removed
  //*
  const storedBookIds = storageMethods.load('selected-books');
  const removedElIndexFromStorage = storedBookIds.findIndex(id => id === seekedId);
  
  //* Remove the book from the array
  storedBookIds.splice(removedElIndexFromStorage, 1);
  //*
  storageMethods.save(SHOP_LIST_KEY, storedBookIds);
  // Retrieve stored book IDs from local storage

  // Check if the book ID was found in local storage
  if (removedElIndexFromStorage !== -1) {
    // Save the updated array to local storage
    storageMethods.save('selected-books', storedBookIds);

    // Remove the book element from the DOM
    bookEl.remove();
  } else {
    console.error('Book ID not found in local storage.');
  }
}






