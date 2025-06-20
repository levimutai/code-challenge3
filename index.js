function addNewPostListener() {
  const form = document.getElementById('new-post-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const newPost = {
      title: form.title.value,
      author: form.author.value,
      content: form.content.value,
      image: form.image.value
    };
    // For core deliverable, just add to DOM (not backend)
    const postList = document.getElementById('post-list');
    const postDiv = document.createElement('div');
    postDiv.textContent = newPost.title;
    postDiv.classList.add('post-title');
    postList.appendChild(postDiv);
    form.reset();
  });
}