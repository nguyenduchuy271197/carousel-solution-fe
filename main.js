const carouselControlNextEl = document.getElementById("carousel-control-next");

carouselControlNextEl.addEventListener("click", function () {
  // Chuyển hướng tới hình phía sau
  const activeItemEl = document.querySelector(".carousel-item.active");
  const nextItemEl = activeItemEl.nextElementSibling;
  const activeBulletEl = document.querySelector(
    ".carousel-bullets > button.active"
  );
  const nextBulletEl = activeBulletEl.nextElementSibling;

  if (nextItemEl !== null) {
    // Remove class 'active' của item đang active
    activeItemEl.classList.remove("active");
    activeBulletEl.classList.remove("active");

    // Thêm class 'active' vào cho item kế tiếp
    nextItemEl.classList.add("active");
    nextBulletEl.classList.add("active");
  }
});

const carouselControlPrevEl = document.getElementById("carousel-control-prev");

carouselControlPrevEl.addEventListener("click", function () {
  // Chuyển hướng tới hình phía trước
  const activeItemEl = document.querySelector(".carousel-item.active");
  const prevItemEl = activeItemEl.previousElementSibling;
  const activeBulletEl = document.querySelector(
    ".carousel-bullets > button.active"
  );
  const prevBulletEl = activeBulletEl.previousElementSibling;

  if (prevItemEl !== null) {
    // Remove class 'active' của item đang active
    activeItemEl.classList.remove("active");
    activeBulletEl.classList.remove("active");

    // Thêm class 'active' vào cho item kế tiếp
    prevItemEl.classList.add("active");
    prevBulletEl.classList.add("active");
  }
});

const carouselBulletEls = document.querySelectorAll(
  ".carousel-bullets > button"
);

for (let i = 0; i < carouselBulletEls.length; i++) {
  carouselBulletEls[i].addEventListener("click", function () {
    // Remove class 'active' cho button đang active
    const activeBulletEl = document.querySelector(
      ".carousel-bullets > button.active"
    );
    activeBulletEl.classList.remove("active");

    // Thêm class 'active' mà bạn đã click vào nó
    carouselBulletEls[i].classList.add("active");

    // Lấy ra mảng của các item và sau đó chọn ra item tương ứng với nút vừa click
    const itemEls = document.querySelectorAll(".carousel-item");
    const activeItemEl = document.querySelector(".carousel-item.active");
    const itemEl = itemEls[i];

    activeItemEl.classList.remove("active");
    itemEl.classList.add("active");
  });
}
