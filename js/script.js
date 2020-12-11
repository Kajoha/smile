const modal = document.getElementById('modal');
const close = document.getElementsByClassName('close')[0];

function open() {
  modal.style.display = 'block';
  const item = document.getElementById('content');

  const home = document.createElement('a');
  home.setAttribute('href', '#');
  home.innerHTML = 'home';

  const about = document.createElement('a');
  about.setAttribute('href', '#');
  about.innerHTML = 'about us';

  const categories = document.createElement('a');
  categories.setAttribute('href', '#');
  categories.innerHTML = 'categories';

  const gallery = document.createElement('a');
  gallery.setAttribute('href', '#');
  gallery.innerHTML = 'gallery';

  const events = document.createElement('a');
  events.setAttribute('href', '#');
  events.innerHTML = 'events';

  const blog = document.createElement('a');
  blog.setAttribute('href', '#');
  blog.innerHTML = 'blog';

  const contact = document.createElement('a');
  contact.setAttribute('href', '#');
  contact.innerHTML = 'contact us';

  item.appendChild(home);
  item.appendChild(about);
  item.appendChild(categories);
  item.appendChild(gallery);
  item.appendChild(events);
  item.appendChild(blog);
  item.appendChild(contact);
}

close.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
