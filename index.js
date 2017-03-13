function getFirstSelector(selector) {
  return document.getElementById('app').querySelector(selector); 
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  const lis =
  document.querySelectorAll('ul.ranked-list li')

  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n)
  }
}

function deepestChild() {
  let node =  document.getElementById('grand-node')
  let next = node.children[0]

  while (next) {
    node = next;
    next = node.children[0];
  }
  return node;
}

