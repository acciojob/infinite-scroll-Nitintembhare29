//your code here!
// Select the list element
const list = document.querySelector('#infi-list');

// Add 10 list items to the list by default
for (let i = 0; i < 10; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = `List item ${i + 1}`;
  list.appendChild(listItem);
}
// Add two more list items when the user reaches the end of the list
list.addEventListener('scroll', () => {
  const lastListItem = list.lastElementChild;
  const lastListItemOffset = lastListItem.offsetTop + lastListItem.clientHeight;
  const scrollTop = list.scrollTop + list.clientHeight;
  const scrollDifference = lastListItemOffset - scrollTop;

  if (scrollDifference <= 0) {
    for (let i = 0; i < 2; i++) {
      const listItem = document.createElement('li');
      listItem.textContent = `List item ${list.children.length + 1}`;
      list.appendChild(listItem);
    }
  }
});
