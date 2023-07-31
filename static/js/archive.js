const yearNodes = document.querySelectorAll(".list-post");
const postNodes = document.querySelectorAll(".list-post li");
const categoryNodes = document.querySelectorAll(".list-category a");
const categoryMap = { __ALL__: new Set() };

(function () {
  // map all posts to categories
  for (const postNode of postNodes) {
    const categories = postNode.dataset.categories.split("____");
    for (const category of categories) {
      if (!categoryMap[category]) {
        categoryMap[category] = new Set();
      }
      categoryMap["__ALL__"].add(postNode);
      categoryMap[category].add(postNode);
    }
  }

  // retrieve category from URL and change to category
  const url = new URL(window.location.href);
  const category = url.searchParams.get("category") || "__ALL__";
  changeCollectionCategory(category);

  function changeCollectionCategory(category) {
    // Show only posts from selected category
    for (const postNode of postNodes) {
      if (categoryMap[category].has(postNode)) {
        postNode.style.display = "flex";
      } else {
        postNode.style.display = "none";
      }
    }

    // Hide year groupings with zero posts
    for (const yearNode of yearNodes) {
      const yearHasPosts = yearNode.querySelector(
        'li:not([style*="display:none"]):not([style*="display: none"])',
      );
      if (yearHasPosts !== null) {
        yearNode.style.display = "block";
      } else {
        yearNode.style.display = "none";
      }
    }

    // Highlight current category
    for (const categoryNode of categoryNodes) {
      if (category === categoryNode.dataset.category) {
        categoryNode.classList.add("is-active-category");
      }
    }

    // // Update current URL to reflect selected category
    // if (setUrl) {
    //   const url = new URL(window.location.href);
    //   url.searchParams.set("category", category);
    //   window.location.assign(url);
    // }
  }
})();
