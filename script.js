function numberOfBooksRead(library) {
  if (!library || !Array.isArray(library)) {
    console.error('Invalid library object.');
    return -1;
  }

  let count = 0;

  for (const book of library) {
    if (book && book.readingStatus === true) {
      count++;
    }
  }

  return count;
}

// Example usage with user input:
const library = [];

// Get the number of books from the user
const numberOfBooks = prompt('Enter the number of books in the library:');

// Validate the input
if (numberOfBooks && !isNaN(numberOfBooks) && numberOfBooks > 0) {
  // Get book details from the user
  for (let i = 0; i < numberOfBooks; i++) {
    const author = prompt(`Enter the author of book ${i + 1}:`);
    const title = prompt(`Enter the title of book ${i + 1}:`);
    const readingStatus = prompt(`Has book ${i + 1} been read? (true/false):`);

    // Validate readingStatus input
    const isValidStatus = readingStatus.toLowerCase() === 'true' || readingStatus.toLowerCase() === 'false';
    
    if (author && title && isValidStatus) {
      library.push({ author, title, readingStatus: readingStatus.toLowerCase() === 'true' });
    } else {
      console.error(`Invalid input for book ${i + 1}. Skipping.`);
    }
  }

  // Calculate and display the number of books read
  const result = numberOfBooksRead(library);
  console.log(`Number of books read: ${result}`);
} else {
  console.error('Invalid input for the number of books.');
}
