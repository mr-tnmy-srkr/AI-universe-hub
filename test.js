// Sample data
const arrayOfObjects = [
    { title: "Article 1", date: new Date("2023-08-15"), content: "..." },
    { title: "Article 2", date: new Date("2023-08-15"), content: "..." },
    { title: "Article 3", date: new Date("2023-08-15"), content: "..." },
    { title: "Article 4", date: new Date("2023-08-20"), content: "..." },
    // ... more objects
  ];
  
  // Destructure and sort
  const sortedArticles = arrayOfObjects
    .map(({ title, date, content }) => ({ title, date, content })) // Destructure while mapping
    .sort((a, b) => b.date - a.date); // Sort by date in descending order
  
  console.log(sortedArticles);
  