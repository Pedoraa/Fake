// Chức năng hiển thị chi tiết sách
function showBooks(bookCategory) {
    document.getElementById('book-title').textContent = bookCategory;
    document.getElementById('book-image').src = 'https://via.placeholder.com/150';
    
    document.getElementById('book-info').textContent = 'Thông tin về '+ bookCategory + ' sẽ được hiển thị ở đây';
    document.getElementById('book-detail').classList.remove('hidden');
}

// Hiển thị form mượn sách khi nhấp vào nút "Mượn sách"
document.getElementById('borrow-btn').addEventListener('click', function() {
    document.getElementById('borrow-form').classList.remove('hidden');
});

// Xử lý khi người dùng nhập thông tin mượn sách
document.getElementById('borrow-form-content').addEventListener('submit', function(event) {
    event.preventDefault();

    if (document.getElementById('agreement').checked) {
        alert('Mượn sách thành công!');
    } else {
        alert('Vui lòng đồng ý cam kết để tiếp tục.');
    }

    // Reset form sau khi mượn sách
    document.getElementById('borrow-form').classList.add('hidden');
    document.getElementById('borrow-form-content').reset();
});
function openModal(bookName) {
    document.getElementById("bookName").value = bookName;
    document.getElementById("modal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  }
  function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }
  document.getElementById('borrow-btn').addEventListener('click', function () {
    // Mở form mượn sách
    document.getElementById('borrow-form').classList.remove('hidden');
  });
  
  
