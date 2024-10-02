const blogPosts = [
    { id: 1, title: "My Amazing Tech Internship at XYZ Corp", content: "During my summer internship at XYZ Corp, I had the opportunity to work on cutting-edge projects...", author: "Jane Doe", date: "June 1, 2023" },
    { id: 2, title: "5 Tips for Landing Your Dream Internship", content: "Securing the perfect internship can be challenging, but with these tips, you'll be well on your way...", author: "John Smith", date: "May 15, 2023" },
    { id: 3, title: "My First Week as a Marketing Intern", content: "From day one, I knew this internship would be different. The fast-paced environment...", author: "Emily Johnson", date: "May 10, 2023" },
];

// Search functionality
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();
        const searchResults = blogPosts.filter(post => 
            post.title.toLowerCase().includes(searchTerm) || 
            post.content.toLowerCase().includes(searchTerm)
        );
        displaySearchResults(searchResults);
    });
}

function displaySearchResults(results) {
    const mainContent = document.querySelector('main');
    mainContent.innerHTML = '<h2>Search Results</h2>';
    if (results.length === 0) {
        mainContent.innerHTML += '<p>No results found.</p>';
    } else {
        results.forEach(post => {
            mainContent.innerHTML += `
                <article class="blog-post">
                    <h3><a href="post${post.id}.html">${post.title}</a></h3>
                    <p class="post-meta">Posted on ${post.date} by ${post.author}</p>
                    <p>${post.content.substring(0, 150)}...</p>
                    <a href="post${post.id}.html" class="read-more"><span>Read More</span></a>
                </article>
            `;
        });
    }
}