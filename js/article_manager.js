function article_manager(id_name, item_list) {
  var baseElement = document.getElementById(id_name);

  item_list.forEach(function(item) {
    var a = document.createElement("a");
    var h1 = document.createElement("h1");
    a.href = item.url;
    a.innerHTML = item.title;

    h1.className = "item-title"

    h1.appendChild(a);
    baseElement.appendChild(h1);
  });
}

function main_manager() {
  article_manager("products", products_item);
  article_manager("presents", presents_item);
  article_manager("blog", blog_item);
}

main_manager();
