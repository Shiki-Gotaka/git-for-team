document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");

  // Danh sách ảnh trong thư mục data
  const images = [
    "hsr-v2.2.png",
    "hsr-v3.1.png",
    "hsr-v3.2.jpg",
    "hsr-v3.4.png",
  ];

  images.forEach((fileName) => {
    const img = document.createElement("img");
    img.src = `data/${fileName}`;
    img.alt = fileName;

    gallery.appendChild(img);
  });
});
