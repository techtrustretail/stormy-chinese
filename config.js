// Cấu hình app. Sếp không cần sửa gì cho đến bước nối Google Sheet + Azure.
window.QQ_CONFIG = {
  players: [
    { id: 'tiger', name: 'Tiger 🐯', color: '#a2d2ff' },
    { id: 'bunny', name: 'Bunny 🐰', color: '#ffc8dd' }
  ],
  // Link Google Apps Script (lưu tiến độ, bảng xếp hạng, cấp "vé" chấm điểm Azure). Để trống = chỉ lưu trên máy.
  syncUrl: '',
  // Số sao trong 1 ngày để giữ chuỗi 🔥
  streakStars: 10
};
