const articleForm = document.getElementById('articleForm');
const articlesList = document.getElementById('articlesList');
const emptyState = document.getElementById('emptyState');
const articleCount = document.getElementById('articleCount');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeLabel = document.getElementById('themeLabel');

articleForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const title = document.getElementById('articleTitle').value.trim();
  const author = document.getElementById('articleAuthor').value.trim();
  const category = document.getElementById('articleCategory').value;
  const content = document.getElementById('articleContent').value.trim();

  if (!title || !author || !content) return;

  const card = document.createElement('article');
  card.className = 'article-card';

  const categoryLabel = document.createElement('span');
  categoryLabel.className = 'article-category';
  categoryLabel.textContent = category;

  const articleTitle = document.createElement('h3');
  articleTitle.textContent = title;

  const articleAuthor = document.createElement('p');
  articleAuthor.className = 'article-meta';
  articleAuthor.textContent = `بقلم: ${author}`;

  const articleContent = document.createElement('p');
  articleContent.className = 'article-content';
  articleContent.textContent = content;

  card.append(categoryLabel, articleTitle, articleAuthor, articleContent);
  articlesList.prepend(card);
  emptyState.hidden = true;

  const count = articlesList.querySelectorAll('.article-card').length;
  articleCount.textContent = `${count} ${count === 1 ? 'مقال' : 'مقالات'}`;
  articleForm.reset();
  document.getElementById('articleTitle').focus();
});

themeToggle.addEventListener('click', function () {
  const isDark = document.body.classList.toggle('dark-mode');
  themeIcon.textContent = isDark ? '☀️' : '🌙';
  themeLabel.textContent = isDark ? 'الوضع الفاتح' : 'الوضع الداكن';
  themeToggle.setAttribute('aria-label', isDark ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن');
});