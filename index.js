const BASE_URL = "http://localhost:3000/posts";

document.addEventListener("DOMContentLoaded", main);

function main() {
  displayPosts();
  addNewPostListener();
}

// 1. DISPLAY ALL POSTS
function displayPosts() {
  fetch(BASE_URL)
    .then(res => res.json())
    .then(posts => {
      const list = document.getElementById("post-list");
      list.innerHTML = "";
      posts.forEach(post => {
        const item = document.createElement("div");
        item.textContent = post.title;
        item.dataset.id = post.id;
        item.addEventListener("click", () => handlePostClick(post.id));
        list.appendChild(item);
      });

      // Advanced: Show first post's details automatically
      if (posts[0]) handlePostClick(posts[0].id);
    });
}

// 2. SHOW POST DETAILS
function handlePostClick(id) {
  fetch(`${BASE_URL}/${id}`)
    .then(res => res.json())
    .then(post => {
      const detail = document.getElementById("post-detail");
      detail.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <h4>By ${post.author}</h4>
        <button onclick="showEditForm(${post.id}, '${post.title}', \${post.content}\)">Edit</button>
        <button onclick="deletePost(${post.id})">Delete</button>
      `;
    });
}

// 3. ADD NEW POST (DOM Only)
function addNewPostListener() {
  const form = document.getElementById("new-post-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newPost = {
      title: document.getElementById("new-title").value,
      author: document.getElementById("new-author").value,
      content: document.getElementById("new-content").value
    };

    // Advanced: POST to API
    fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPost)
    })
    .then(res => res.json())
    .then(post => {
      displayPosts(); // Refresh list
      form.reset();
    });
  });
}

// 4. EDIT A POST
function showEditForm(id, title, content) {
  const form = document.getElementById("edit-post-form");
  form.classList.remove("hidden");
  form.dataset.id = id;
  document.getElementById("edit-title").value = title;
  document.getElementById("edit-content").value = content;
}

document.getElementById("edit-post-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const id = this.dataset.id;

  const updatedPost = {
    title: document.getElementById("edit-title").value,
    content: document.getElementById("edit-content").value
  };

  fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedPost)
  })
  .then(res => res.json())
  .then(() => {
    displayPosts();
    this.classList.add("hidden");
  });
});

// 5. DELETE A POST
function deletePost(id) {
  fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  })
  .then(() => {
    document.getElementById("post-detail").innerHTML = "<p>Select a post to view details.</p>";
    displayPosts();
  });
}

// 6. Cancel Edit Button
document.getElementById("cancel-edit").addEventListener("click", () => {
  document.getElementById("edit-post-form").classList.add("hidden");
});