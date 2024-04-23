document.addEventListener('DOMContentLoaded', function() {
  const postText = document.getElementById('postText');
  const postButton = document.getElementById('postButton');
  const postList = document.getElementById('postList');
  const imageInput = document.getElementById('imageInput');

  postButton.addEventListener('click', function() {
    const text = postText.value.trim();
    const imageFile = imageInput.files[0];
    if (text !== '' || imageFile) {
      createPost(text, imageFile);
      postText.value = '';
      imageInput.value = '';
    }
  });

  function createPost(text, imageFile) {
    const li = document.createElement('li');
    li.className = 'postItem';

    if (imageFile) {
      const img = document.createElement('img');
      img.src = URL.createObjectURL(imageFile);
      img.alt = 'Uploaded Image';
      li.appendChild(img);
    }

    if (text) {
      const p = document.createElement('p');
      p.textContent = text;
      li.appendChild(p);
    }

    postList.appendChild(li);
  }
});
