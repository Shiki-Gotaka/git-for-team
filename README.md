# Author

Thanh Truc - AI Team

# Mô tả project giả lập

- Team sẽ thực hiện tạo một trang html hiển thị hình ảnh sưu tập được
- Các công việc được chia:
  - Viết file html
  - Viết các file css
  - Viết file js
  - Thu thập data (các hình ảnh)

# Sử dụng:

- Maintenance statergy: Shared maintenance
- Branching pattern: Environment branching với 3 branch:
  - main (production)
  - dev (development)
  - stag (staging)
- Repository architecture: Monolith

# Quá trình:

- Tạo nhánh stag
- Tạo nhánh dev và bắt đầu thực hiện:
  - Tạo nhánh feature/css: tạo file css cho trang web
  - Tạo nhánh feature/js
  - Tình huống phát sinh (giả lập): lỡ thực hiện tạo file js trên nhánh css và commit lại -> dùng cherry-pick để pick commit đó qua nhánh mới (feature/js) và xóa commit đó ở nhánh css
  - Vì nhánh feature/css đã được merge vào nhánh dev nên trước khi push sẽ pull nhánh dev về trước
  - Tạo nhánh feature/data: thực hiện thêm hình ảnh vào
  - Pull nhánh dev về, fix conflict nếu có, push lên nhánh feature/data
