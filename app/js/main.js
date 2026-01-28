document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");

  // Danh sách ảnh trong thư mục data
  const images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];

  images.forEach((fileName) => {
    const img = document.createElement("img");
    img.src = `data/${fileName}`;
    img.alt = fileName;

    gallery.appendChild(img);
  });
});
