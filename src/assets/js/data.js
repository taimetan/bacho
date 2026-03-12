/**
 * Dữ liệu các mốc thời gian quan trọng trong cuộc đời Chủ tịch Hồ Chí Minh
 * Mỗi mốc bao gồm: năm, tiêu đề, mô tả, hình ảnh lịch sử, và thẻ phân loại
 */

const cuocDoiData = [
  {
    id: 1,
    nam: "1890",
    tieu_de: "Chào Đời",
    mo_ta: `Ngày 19 tháng 5 năm 1890, Nguyễn Sinh Cung — tên khai sinh của Chủ tịch Hồ Chí Minh — chào đời tại làng Hoàng Trù (Kim Liên, Nam Đàn, Nghệ An). Người sinh ra trong một gia đình nhà nho nghèo yêu nước: cha là cụ Phó bảng Nguyễn Sinh Sắc, mẹ là bà Hoàng Thị Loan — người phụ nữ đảm đang, giàu lòng yêu nước và thương dân.`,
    the: "Thời niên thiếu",
    mau_nen: "#5c3a1e",
    mau_chu: "#f7eed7",
    bieu_tuong: "🌸",
    hinh_anh: "https://phuongnam.vanhoavaphattrien.vn/uploads/images/blog/yen-vhpt/2024/05/07/z5418662639347-6f33eaa50ee224ad79b6f93739814b38-1715100050.jpg",
    hinh_anh_mo_ta: "Làng Hoàng Trù, quê hương Bác Hồ tại Kim Liên, Nam Đàn, Nghệ An"
  },
  {
    id: 2,
    nam: "1895",
    tieu_de: "Theo Cha Vào Huế",
    mo_ta: `Năm 1895, khi mới 5 tuổi, Nguyễn Sinh Cung theo cha mẹ vào Huế. Tại đây, Người được tiếp xúc với nền văn hóa Kinh thành — trung tâm văn hóa, chính trị của đất nước. Những năm tháng ở Huế đã hun đúc trong Người tình yêu quê hương, đất nước và ý chí tự cường dân tộc.`,
    the: "Thời niên thiếu",
    mau_nen: "#6b4226",
    mau_chu: "#f7eed7",
    bieu_tuong: "🏯",
    hinh_anh: "https://d4.violet.vn/uploads/blogs/6431/congthanhdb_01.gif",
    hinh_anh_mo_ta: "Kinh thành Huế — nơi Bác Hồ trải qua những năm tháng tuổi thơ"
  },
  {
    id: 3,
    nam: "1906",
    tieu_de: "Học tại Trường Quốc Học Huế",
    mo_ta: `Năm 1906, Nguyễn Tất Thành (tên mới) vào học tại Trường Quốc học Huế — ngôi trường nổi tiếng đào tạo nhiều nhà yêu nước Việt Nam. Tại đây, Người được học chữ Quốc ngữ, tiếng Pháp và các môn khoa học, đồng thời tận mắt chứng kiến cảnh thực dân Pháp cai trị, áp bức nhân dân — khơi dậy trong Người ý chí cứu nước mãnh liệt.`,
    the: "Học tập & Giác ngộ",
    mau_nen: "#3e2723",
    mau_chu: "#f0d9b5",
    bieu_tuong: "📚",
    hinh_anh: "https://archives.org.vn:2001/files/ecm/source_files/2019/06/24/24-6-001-100416-240619-71.jpg",
    hinh_anh_mo_ta: "Trường Quốc học Huế — nơi Bác Hồ học tập và bắt đầu nung nấu ý chí cứu nước"
  },
  {
    id: 4,
    nam: "1911",
    tieu_de: "Ra Đi Tìm Đường Cứu Nước",
    mo_ta: `Ngày 5 tháng 6 năm 1911, với tên Văn Ba, Nguyễn Tất Thành xuống tàu Amiral Latouche Tréville tại bến cảng Nhà Rồng (Sài Gòn) để bắt đầu hành trình tìm đường cứu nước. Người ra đi với hai bàn tay trắng, mang theo ý chí sắt đá giải phóng dân tộc khỏi ách thực dân. Đây là dấu mốc lịch sử mở ra một trang mới trong sự nghiệp cách mạng Việt Nam.`,
    the: "Hành trình cứu nước",
    mau_nen: "#1a3a2a",
    mau_chu: "#c8e6c9",
    bieu_tuong: "⚓",
    hinh_anh: "https://file.qdnd.vn/data/images/0/2021/05/28/tranyen/bh.jpg?dpi=150&quality=100&w=575",
    hinh_anh_mo_ta: "Bến cảng Nhà Rồng — nơi Bác Hồ xuất phát tìm đường cứu nước năm 1911"
  },
  {
    id: 5,
    nam: "1917",
    tieu_de: "Về Pháp, Tiếp Cận Tư Tưởng Tiến Bộ",
    mo_ta: `Năm 1917, sau nhiều năm bôn ba khắp năm châu, Nguyễn Ái Quốc trở lại Pháp. Tại đây, Người tích cực tham gia các hoạt động yêu nước, viết báo, vận động cho quyền tự do của nhân dân Đông Dương. Người tiếp cận chủ nghĩa Mác–Lênin, cách mạng vô sản — con đường mà Người tin tưởng sẽ đưa dân tộc Việt Nam đến độc lập, tự do.`,
    the: "Hành trình cứu nước",
    mau_nen: "#1c2e4a",
    mau_chu: "#bbdefb",
    bieu_tuong: "✍️",
    hinh_anh: "https://file.qdnd.vn/data/images/0/2021/05/29/phucthang/nguyen-ai-quoc.jpg?dpi=150&quality=100&w=575",
    hinh_anh_mo_ta: "Nguyễn Ái Quốc tại Pháp — những ngày tháng hoạt động cách mạng sôi nổi"
  },
  {
    id: 6,
    nam: "1920",
    tieu_de: "Đọc Luận Cương Lênin — Tìm Ra Con Đường",
    mo_ta: `Tháng 7 năm 1920, Nguyễn Ái Quốc đọc bản "Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và thuộc địa" của Lênin đăng trên báo L'Humanité. Người xúc động đến rơi nước mắt khi tìm ra con đường giải phóng dân tộc đúng đắn. Tháng 12/1920, Người tham dự Đại hội Tours, bỏ phiếu gia nhập Quốc tế Cộng sản — trở thành một trong những người sáng lập Đảng Cộng sản Pháp.`,
    the: "Giác ngộ cách mạng",
    mau_nen: "#4a1942",
    mau_chu: "#f3e5f5",
    bieu_tuong: "💡",
    hinh_anh: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Ho_Chi_Minh_1919.jpg/600px-Ho_Chi_Minh_1919.jpg",
    hinh_anh_mo_ta: "Nguyễn Ái Quốc (1919–1920) — thời kỳ hoạt động tại Pháp và tìm ra con đường cách mạng"
  },
  {
    id: 7,
    nam: "1930",
    tieu_de: "Thành Lập Đảng Cộng Sản Việt Nam",
    mo_ta: `Ngày 3 tháng 2 năm 1930, tại Hương Cảng (Hồng Kông, Trung Quốc), Nguyễn Ái Quốc chủ trì Hội nghị hợp nhất các tổ chức cộng sản trong nước, thành lập Đảng Cộng sản Việt Nam. Sự kiện lịch sử này đánh dấu bước ngoặt trọng đại, chấm dứt thời kỳ khủng hoảng về đường lối và tổ chức của cách mạng Việt Nam, mở ra thời kỳ mới cho cuộc đấu tranh giải phóng dân tộc.`,
    the: "Sự nghiệp cách mạng",
    mau_nen: "#7f0000",
    mau_chu: "#ffcdd2",
    bieu_tuong: "⭐",
    hinh_anh: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Ho_Chi_Minh_1945.jpg/600px-Ho_Chi_Minh_1945.jpg",
    hinh_anh_mo_ta: "Chủ tịch Hồ Chí Minh — người sáng lập Đảng Cộng sản Việt Nam năm 1930"
  },
  {
    id: 8,
    nam: "1941",
    tieu_de: "Về Nước, Lãnh Đạo Cách Mạng",
    mo_ta: `Ngày 28 tháng 1 năm 1941, sau 30 năm hoạt động ở nước ngoài, Nguyễn Ái Quốc trở về Tổ quốc, lấy tên Hồ Chí Minh. Người trực tiếp lãnh đạo phong trào cách mạng từ căn cứ Pác Bó (Cao Bằng). Tại đây, Người soạn thảo Chính sách Việt Minh, sáng tác thơ "Tức cảnh Pác Bó" nổi tiếng và định hướng cho cuộc kháng chiến toàn quốc.`,
    the: "Lãnh đạo cách mạng",
    mau_nen: "#1b4332",
    mau_chu: "#d8f3dc",
    bieu_tuong: "🌿",
    hinh_anh: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Pac_Bo_cave%2C_Cao_Bang%2C_Vietnam.jpg/800px-Pac_Bo_cave%2C_Cao_Bang%2C_Vietnam.jpg",
    hinh_anh_mo_ta: "Hang Pác Bó, Cao Bằng — nơi Bác Hồ về nước lãnh đạo cách mạng năm 1941"
  },
  {
    id: 9,
    nam: "1945",
    tieu_de: "Tuyên Ngôn Độc Lập — Nước Việt Nam Ra Đời",
    mo_ta: `Ngày 2 tháng 9 năm 1945, tại Quảng trường Ba Đình lịch sử, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa — nhà nước dân chủ nhân dân đầu tiên ở Đông Nam Á. Đây là kết quả của cuộc Cách mạng Tháng Tám vĩ đại, là thành quả của hàng chục năm đấu tranh anh dũng của toàn thể dân tộc Việt Nam.`,
    the: "Độc lập dân tộc",
    mau_nen: "#8b0000",
    mau_chu: "#fff9c4",
    bieu_tuong: "🇻🇳",
    hinh_anh: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Ho_Chi_Minh_proclaiming_independence_of_Vietnam.jpg/800px-Ho_Chi_Minh_proclaiming_independence_of_Vietnam.jpg",
    hinh_anh_mo_ta: "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình ngày 2/9/1945"
  },
  {
    id: 10,
    nam: "1946–1954",
    tieu_de: "Lãnh Đạo Kháng Chiến Chống Pháp",
    mo_ta: `Khi thực dân Pháp quay trở lại xâm lược, Chủ tịch Hồ Chí Minh kêu gọi toàn quốc kháng chiến (19/12/1946). Với tinh thần "Thà hy sinh tất cả chứ nhất định không chịu mất nước, không chịu làm nô lệ", toàn thể nhân dân đồng lòng đứng lên kháng chiến. Chiến dịch Điện Biên Phủ lịch sử (1954) kết thúc bằng chiến thắng vang dội, buộc Pháp ký Hiệp định Genève, chấm dứt ách thống trị thực dân tại Việt Nam.`,
    the: "Kháng chiến",
    mau_nen: "#3e2723",
    mau_chu: "#efebe9",
    bieu_tuong: "🏴",
    hinh_anh: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Dien_Bien_Phu_battle_1954.jpg/800px-Dien_Bien_Phu_battle_1954.jpg",
    hinh_anh_mo_ta: "Chiến dịch Điện Biên Phủ 1954 — chiến thắng lịch sử trong cuộc kháng chiến chống Pháp"
  },
  {
    id: 11,
    nam: "1954–1969",
    tieu_de: "Xây Dựng Chủ Nghĩa Xã Hội & Chống Mỹ",
    mo_ta: `Sau Điện Biên Phủ, miền Bắc được giải phóng nhưng đất nước vẫn bị chia cắt. Bác Hồ lãnh đạo miền Bắc xây dựng chủ nghĩa xã hội, đồng thời ủng hộ cuộc kháng chiến của miền Nam chống Mỹ. Người theo dõi sát sao cuộc chiến đấu anh dũng của nhân dân miền Nam, luôn căn dặn: "Dù phải đốt cháy cả dãy Trường Sơn cũng phải giữ cho được độc lập".`,
    the: "Lãnh đạo đất nước",
    mau_nen: "#1a237e",
    mau_chu: "#e8eaf6",
    bieu_tuong: "🕊️",
    hinh_anh: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Ho_Chi_Minh_1955.jpg/600px-Ho_Chi_Minh_1955.jpg",
    hinh_anh_mo_ta: "Chủ tịch Hồ Chí Minh (1955) — lãnh đạo xây dựng đất nước sau giải phóng miền Bắc"
  },
  {
    id: 12,
    nam: "1969",
    tieu_de: "Người Ra Đi — Di Sản Trường Tồn",
    mo_ta: `Ngày 2 tháng 9 năm 1969, Chủ tịch Hồ Chí Minh từ trần tại Hà Nội, hưởng thọ 79 tuổi. Người ra đi để lại muôn vàn tiếc thương cho toàn thể dân tộc Việt Nam và bạn bè quốc tế. Di chúc của Người — văn kiện lịch sử thể hiện tâm nguyện cuối cùng — là tài sản vô giá cho mãi mãi các thế hệ mai sau. Tên Người, tư tưởng Người sống mãi trong lòng dân tộc Việt Nam.`,
    the: "Vĩnh biệt",
    mau_nen: "#263238",
    mau_chu: "#eceff1",
    bieu_tuong: "🌹",
    hinh_anh: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Ho_Chi_Minh_Mausoleum.jpg/800px-Ho_Chi_Minh_Mausoleum.jpg",
    hinh_anh_mo_ta: "Lăng Chủ tịch Hồ Chí Minh tại Hà Nội — nơi Người an nghỉ ngàn thu"
  }
];

export default cuocDoiData;
const bacHoTimeline = [
  {
    id: 1,
    nam: "1890",
    ngay: "19 tháng 5, 1890",
    tieude: "Chào Đời",
    diachi: "Làng Kim Liên, Nam Đàn, Nghệ An",
    noidung: `Nguyễn Sinh Cung — tên thuở nhỏ của Người — cất tiếng khóc chào đời trong một gia đình nhà nho yêu nước. Thân phụ là cụ Nguyễn Sinh Sắc, một người có chí khí, học vấn uyên thâm. Từ trong nôi, hồn dân tộc đã len lỏi vào tâm hồn người con xứ Nghệ.`,
    moTaAnh: "Ngôi nhà tranh mái lá tại làng Hoàng Trù, nơi Bác chào đời",
    icon: "🌸",
    mau: "#8B2E00"
  },
  {
    id: 2,
    nam: "1911",
    ngay: "5 tháng 6, 1911",
    tieude: "Ra Đi Tìm Đường Cứu Nước",
    diachi: "Bến cảng Nhà Rồng, Sài Gòn",
    noidung: `Với hai bàn tay trắng và trái tim cháy bỏng yêu nước, người thanh niên Nguyễn Tất Thành rời Tổ quốc trên con tàu Amiral Latouche Tréville. Người ra đi không phải để tìm kiếm vinh hoa, mà để tìm con đường giải phóng dân tộc khỏi xiềng xích nô lệ.`,
    moTaAnh: "Bến cảng Nhà Rồng — nơi Người đặt bước chân đầu tiên lên con đường cứu nước",
    icon: "⛵",
    mau: "#1A3A5C"
  },
  {
    id: 3,
    nam: "1919",
    ngay: "Tháng 6, 1919",
    tieude: "Bản Yêu Sách Tám Điểm",
    diachi: "Paris, Pháp",
    noidung: `Dưới tên Nguyễn Ái Quốc, Người gửi bản Yêu sách của nhân dân An Nam tới Hội nghị Versailles, đòi quyền tự do, bình đẳng cho người Việt Nam. Tiếng nói đầu tiên của một dân tộc bị áp bức vang lên trên trường quốc tế — dẫu chưa được lắng nghe, nhưng đã thức tỉnh hàng triệu tâm hồn.`,
    moTaAnh: "Bản yêu sách gửi Hội nghị Hòa bình Paris — tiếng nói đầu tiên cho nhân dân An Nam",
    icon: "📜",
    mau: "#4A3728"
  },
  {
    id: 4,
    nam: "1930",
    ngay: "3 tháng 2, 1930",
    tieude: "Sáng Lập Đảng Cộng Sản Việt Nam",
    diachi: "Hương Cảng (Hồng Kông)",
    noidung: `Tại một hội nghị bí mật ở Hương Cảng, Người chủ trì hợp nhất các tổ chức cộng sản thành Đảng Cộng sản Việt Nam. Đây là bước ngoặt lịch sử — ngọn đuốc dẫn đường cho cuộc đấu tranh giải phóng dân tộc bước vào giai đoạn mới, có tổ chức, có lý luận, có ý chí gang thép.`,
    moTaAnh: "Hội nghị thành lập Đảng — mốc son chói lọi trong lịch sử cách mạng Việt Nam",
    icon: "⭐",
    mau: "#6B1010"
  },
  {
    id: 5,
    nam: "1941",
    ngay: "28 tháng 1, 1941",
    tieude: "Về Nước Sau 30 Năm",
    diachi: "Hang Pác Bó, Cao Bằng",
    noidung: `Sau ba mươi năm bôn ba nơi đất khách, Người trở về với núi rừng Tổ quốc. Sống trong hang đá, ăn cháo bẹ rau măng, Người vẫn ngày đêm nghiên cứu, viết lách, chỉ đạo cách mạng. Suối Lê-nin, núi Mác — Người đặt tên đó cho dòng suối, ngọn núi bầu bạn cùng mình.`,
    moTaAnh: "Hang Pác Bó — nơi Bác sống và làm việc trong những năm kháng chiến gian khổ",
    icon: "🏔️",
    mau: "#2D4A1E"
  },
  {
    id: 6,
    nam: "1945",
    ngay: "2 tháng 9, 1945",
    tieude: "Tuyên Ngôn Độc Lập",
    diachi: "Quảng trường Ba Đình, Hà Nội",
    noidung: `Trước hàng triệu đồng bào, Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập bất hủ, khai sinh nước Việt Nam Dân chủ Cộng hòa. "Không có gì quý hơn độc lập, tự do" — câu nói giản dị mà vĩ đại ấy trở thành chân lý của cả dân tộc, vang vọng mãi đến muôn đời.`,
    moTaAnh: "Quảng trường Ba Đình — nơi Bác đọc Tuyên ngôn Độc lập khai sinh nước Việt Nam mới",
    icon: "🏛️",
    mau: "#8B1A1A"
  },
  {
    id: 7,
    nam: "1946–1954",
    ngay: "Kháng chiến trường kỳ",
    tieude: "Chín Năm Kháng Chiến",
    diachi: "Chiến khu Việt Bắc",
    noidung: `Người lãnh đạo toàn quốc kháng chiến chống thực dân Pháp từ núi rừng Việt Bắc. Sống đơn sơ giữa đồng bào, Bác vừa chỉ đạo chiến lược, vừa viết thơ, vừa thăm hỏi bộ đội. Chiến thắng Điện Biên Phủ năm 1954 là minh chứng cho ý chí bất khuất của một dân tộc được dẫn dắt bởi trái tim vĩ đại.`,
    moTaAnh: "Bác Hồ cùng bộ đội và đồng bào trong những năm kháng chiến gian khổ ở Việt Bắc",
    icon: "🌿",
    mau: "#3D5229"
  },
  {
    id: 8,
    nam: "1954–1969",
    ngay: "Những năm xây dựng",
    tieude: "Xây Dựng Miền Bắc — Hướng Về Miền Nam",
    diachi: "Hà Nội",
    noidung: `Sống tại Hà Nội trong ngôi nhà sàn giản dị, Người ngày đêm trăn trở về sự nghiệp thống nhất đất nước. Bác thăm nhà máy, thăm ruộng đồng, thăm trường học — gần gũi với nhân dân như người cha, người bác ruột thịt. Trái tim Người luôn hướng về đồng bào miền Nam đang chịu cảnh chia cắt.`,
    moTaAnh: "Bác Hồ trong ngôi nhà sàn giản dị tại Phủ Chủ tịch, Hà Nội",
    icon: "🏡",
    mau: "#5C3D11"
  },
  {
    id: 9,
    nam: "1969",
    ngay: "2 tháng 9, 1969",
    tieude: "Người Ra Đi",
    diachi: "Hà Nội",
    noidung: `Vào đúng ngày Quốc khánh, Chủ tịch Hồ Chí Minh thanh thản ra đi ở tuổi 79, để lại Di chúc thiêng liêng căn dặn toàn Đảng, toàn dân. Di nguyện cuối cùng của Người là được hỏa táng, tro chia về ba miền Bắc-Trung-Nam — Người muốn được ở lại với đất nước đến tận cùng. Nhưng tình yêu của nhân dân đã giữ Người lại mãi mãi.`,
    moTaAnh: "Lăng Chủ tịch Hồ Chí Minh tại Quảng trường Ba Đình — nơi Người yên nghỉ",
    icon: "🌺",
    mau: "#2C1810"
  },
  {
    id: 10,
    nam: "Mãi Mãi",
    ngay: "Trong trái tim mỗi người Việt",
    tieude: "Hồ Chí Minh — Hồ Chí Minh",
    diachi: "Trong lòng dân tộc Việt Nam",
    noidung: `"Bác Hồ đó là lòng ta yêu nước / Bác Hồ đó là sức ta vươn lên." Người đã sống trọn vẹn cho dân tộc, không gia đình riêng, không tài sản riêng, không danh vọng riêng. Cuộc đời Người là bài thơ lớn nhất, là tấm gương sáng nhất của tinh thần yêu nước, của đạo đức cách mạng — sống mãi trong lòng dân tộc Việt Nam và nhân loại tiến bộ.`,
    moTaAnh: "Di ảnh Chủ tịch Hồ Chí Minh — người Cha già của dân tộc Việt Nam",
    icon: "⭐",
    mau: "#8B1A1A"
  }
];

// Thông tin chung về Bác
const thongTinChung = {
  hoTen: "Hồ Chí Minh",
  tenGoc: "Nguyễn Sinh Cung",
  cacTen: ["Nguyễn Tất Thành", "Nguyễn Ái Quốc", "Lý Thụy", "Hồ Chí Minh"],
  sinhNgay: "19/05/1890",
  matNgay: "02/09/1969",
  quocTich: "Việt Nam",
  chucVu: "Chủ tịch nước Việt Nam Dân chủ Cộng hòa (1945–1969)",
  chuDe: "Người là tình yêu thiết tha nhất, trong lòng dân và trong trái tim nhân loại",
  trichDan: [
    "Không có gì quý hơn độc lập, tự do.",
    "Nước Việt Nam là một, dân tộc Việt Nam là một.",
    "Tôi chỉ có một ham muốn, ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập, dân ta được hoàn toàn tự do, đồng bào ai cũng có cơm ăn áo mặc, ai cũng được học hành.",
    "Dù khó khăn gian khổ đến đâu, chúng ta cũng nhất định thắng lợi.",
  ]
};

export { bacHoTimeline, thongTinChung };