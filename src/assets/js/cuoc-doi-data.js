/**
 * Dữ liệu các mốc thời gian trong cuộc đời Chủ tịch Hồ Chí Minh
 * Dùng cho trang cuoc-doi.html — scroll snap timeline
 */

const cuocDoiTimeline = [
  {
    id: 1,
    chuong: "Chương 1",
    nam: "1890",
    tieuDe: "Nguyễn Sinh Cung chào đời",
    moTa: `Ngày 19 tháng 5 năm 1890, tại làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An, Nguyễn Sinh Cung — sau này là Chủ tịch Hồ Chí Minh — đã chào đời trong một gia đình nhà nho yêu nước.`,
    chiTiet: `Thân phụ là cụ Phó bảng Nguyễn Sinh Sắc — một nhà nho yêu nước, từng đỗ Phó bảng khoa thi Hội năm 1901. Mẹ là bà Hoàng Thị Loan — người phụ nữ đảm đang, tần tảo, giàu lòng yêu nước và thương dân. Gia đình tuy nghèo nhưng giàu truyền thống hiếu học và yêu nước. Chính môi trường gia đình ấy đã hun đúc trong Người tình yêu Tổ quốc và ý chí tự cường từ thuở ấu thơ.`,
    hinhAnh: "https://cdn.media.dulich24.com.vn/diemden/lang-hoang-tru-que-ngoai-bac-ho-6424/lang-hoang-tru-que-ngoai-bac-ho-3.jpg",
    moTaAnh: "Làng Hoàng Trù, Kim Liên — quê hương Bác Hồ",
    mauNen: "#6B3A15"
  },
  {
    id: 2,
    chuong: "Chương 2",
    nam: "1895",
    tieuDe: "Theo cha vào Huế",
    moTa: `Năm 1895, khi mới 5 tuổi, Nguyễn Sinh Cung theo cha mẹ vào Huế — trung tâm văn hóa, chính trị của đất nước thời bấy giờ.`,
    chiTiet: `Tại Kinh thành Huế, Người được tiếp xúc sớm với nền học vấn cổ truyền, đồng thời cũng tận mắt chứng kiến cảnh nhân dân lầm than dưới ách cai trị của thực dân. Những năm tháng tuổi thơ ở Huế đã gieo vào lòng Người tình yêu quê hương đất nước, ý thức về thân phận dân tộc bị áp bức.`,
    hinhAnh: "https://d4.violet.vn/uploads/blogs/6431/congthanhdb_01.gif",
    moTaAnh: "Kinh thành Huế — nơi Bác trải qua tuổi thơ",
    mauNen: "#5C3D1E"
  },
  {
    id: 3,
    chuong: "Chương 3",
    nam: "1906",
    tieuDe: "Học tại Trường Quốc Học Huế",
    moTa: `Năm 1906, Nguyễn Tất Thành vào học tại Trường Quốc học Huế — ngôi trường đã đào tạo nhiều nhà yêu nước lừng danh.`,
    chiTiet: `Tại đây, Người được học chữ Quốc ngữ, tiếng Pháp và các môn khoa học hiện đại. Đồng thời, Người cũng tham gia phong trào chống thuế ở Trung Kỳ (1908). Chính những trải nghiệm tại Huế đã khơi dậy trong Người ý chí tìm đường cứu nước bằng một con đường mới, khác với các bậc tiền bối.`,
    hinhAnh: "https://archives.org.vn:2001/files/ecm/source_files/2019/06/24/24-6-001-100416-240619-71.jpg",
    moTaAnh: "Trường Quốc học Huế — nơi Bác bắt đầu nung nấu ý chí cứu nước",
    mauNen: "#4A3320"
  },
  {
    id: 4,
    chuong: "Chương 4",
    nam: "1911",
    tieuDe: "Ra đi tìm đường cứu nước",
    moTa: `Ngày 5 tháng 6 năm 1911, với tên Văn Ba, Nguyễn Tất Thành xuống tàu Amiral Latouche Tréville tại bến cảng Nhà Rồng, bắt đầu hành trình tìm đường cứu nước.`,
    chiTiet: `Người ra đi với hai bàn tay trắng nhưng mang theo ý chí sắt đá giải phóng dân tộc. Bến cảng Nhà Rồng (Sài Gòn) trở thành dấu mốc lịch sử thiêng liêng, nơi một chàng thanh niên 21 tuổi dũng cảm bước ra thế giới để tìm câu trả lời cho vận mệnh dân tộc mình. Đây là khởi đầu cho hành trình 30 năm bôn ba khắp năm châu bốn biển.`,
    hinhAnh: "https://file.qdnd.vn/data/images/0/2021/05/28/tranyen/bh.jpg?dpi=150&quality=100&w=575",
    moTaAnh: "Bến cảng Nhà Rồng — nơi Bác xuất phát tìm đường cứu nước",
    mauNen: "#2C4A30"
  },
  {
    id: 5,
    chuong: "Chương 5",
    nam: "1920",
    tieuDe: "Tìm ra con đường cách mạng",
    moTa: `Tháng 7 năm 1920, Nguyễn Ái Quốc đọc bản Luận cương của Lênin — tìm ra con đường giải phóng dân tộc đúng đắn.`,
    chiTiet: `Đọc "Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và thuộc địa" của Lênin trên báo L'Humanité, Người xúc động đến rơi nước mắt. Tháng 12/1920, tại Đại hội Tours, Người bỏ phiếu tán thành Quốc tế III, trở thành một trong những người sáng lập Đảng Cộng sản Pháp. Từ đây, con đường cách mạng vô sản được xác định rõ ràng.`,
    hinhAnh: "https://file.qdnd.vn/data/images/0/2021/05/29/phucthang/nguyen-ai-quoc.jpg?dpi=150&quality=100&w=575",
    moTaAnh: "Nguyễn Ái Quốc tại Pháp — thời kỳ tìm ra đường lối cách mạng",
    mauNen: "#3D2B1A"
  },
  {
    id: 6,
    chuong: "Chương 6",
    nam: "1930",
    tieuDe: "Sáng lập Đảng Cộng sản Việt Nam",
    moTa: `Ngày 3 tháng 2 năm 1930, tại Cửu Long (Hương Cảng), Nguyễn Ái Quốc chủ trì hợp nhất các tổ chức cộng sản, thành lập Đảng Cộng sản Việt Nam.`,
    chiTiet: `Sự ra đời của Đảng đã chấm dứt cuộc khủng hoảng về đường lối cách mạng kéo dài hàng chục năm. Từ đây, phong trào cách mạng Việt Nam có tổ chức lãnh đạo thống nhất, có đường lối đúng đắn, mở ra trang sử mới trong cuộc đấu tranh giải phóng dân tộc và xây dựng xã hội mới.`,
    hinhAnh: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/ngay-thanh-lap-Dang-Cong-san-Viet-Nam-2.jpg",
    moTaAnh: "Người sáng lập Đảng Cộng sản Việt Nam",
    mauNen: "#6B1A1A"
  },
  {
    id: 7,
    chuong: "Chương 7",
    nam: "1941",
    tieuDe: "Về nước sau 30 năm bôn ba",
    moTa: `Ngày 28 tháng 1 năm 1941, sau 30 năm hoạt động ở nước ngoài, Người trở về Tổ quốc tại Pác Bó, Cao Bằng, lấy tên Hồ Chí Minh.`,
    chiTiet: `Sống trong hang đá đơn sơ, ăn cháo bẹ rau măng, Người vẫn ngày đêm chỉ đạo cách mạng. Bác đặt tên cho suối là Lê-nin, cho núi là Các Mác. Tại đây, Người thành lập Mặt trận Việt Minh, trực tiếp soạn thảo đường lối cách mạng, chuẩn bị cho cuộc tổng khởi nghĩa giành chính quyền.`,
    hinhAnh: "https://media.baocaobang.vn/upload/image/202301/medium/100703_11.jpg",
    moTaAnh: "Hang Pác Bó — nơi Bác lãnh đạo cách mạng khi mới về nước",
    mauNen: "#2D4A1E"
  },
  {
    id: 8,
    chuong: "Chương 8",
    nam: "1945",
    tieuDe: "Tuyên ngôn Độc lập — khai sinh nước Việt Nam",
    moTa: `Ngày 2 tháng 9 năm 1945, tại Quảng trường Ba Đình, Hà Nội, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.`,
    chiTiet: `Trước hàng triệu đồng bào, Người khẳng định: "Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do độc lập." Đây là kết quả của cuộc Cách mạng Tháng Tám vĩ đại — thành quả đấu tranh anh dũng của toàn dân tộc dưới sự lãnh đạo của Đảng và Bác Hồ.`,
    hinhAnh: "https://file3.qdnd.vn/data/images/0/2022/09/01/tvkimgiang/bac%20ho%20doc%20tuyen%20ngon.jpg?dpi=150&quality=100&w=870",
    moTaAnh: "Bác đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình",
    mauNen: "#8B1A1A"
  },
  {
    id: 9,
    chuong: "Chương 9",
    nam: "1946–1954",
    tieuDe: "Chín năm kháng chiến chống Pháp",
    moTa: `Khi thực dân Pháp quay trở lại xâm lược, Chủ tịch Hồ Chí Minh kêu gọi toàn quốc kháng chiến ngày 19 tháng 12 năm 1946.`,
    chiTiet: `Với tinh thần "Thà hy sinh tất cả chứ nhất định không chịu mất nước", Người lãnh đạo toàn dân đứng lên kháng chiến trường kỳ gian khổ từ chiến khu Việt Bắc. Chiến thắng Điện Biên Phủ "lừng lẫy năm châu, chấn động địa cầu" (7/5/1954) buộc Pháp ký Hiệp định Genève, chấm dứt ách thống trị thực dân tại Việt Nam.`,
    hinhAnh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuk5izYPPvUTUM6nIbNWVgMDNl8soQSo8POQ&s",
    moTaAnh: "Chiến thắng Điện Biên Phủ — chiến thắng lịch sử trong cuộc kháng chiến",
    mauNen: "#3E2723"
  },
  {
    id: 10,
    chuong: "Chương 10",
    nam: "1954–1969",
    tieuDe: "Xây dựng miền Bắc — Hướng về miền Nam",
    moTa: `Sau chiến thắng Điện Biên Phủ, Bác lãnh đạo miền Bắc xây dựng chủ nghĩa xã hội, đồng thời là chỗ dựa vững chắc cho cuộc kháng chiến ở miền Nam.`,
    chiTiet: `Sống giản dị trong ngôi nhà sàn nhỏ bé tại Phủ Chủ tịch, Người luôn gần gũi nhân dân. Bác thăm nhà máy, thăm ruộng đồng, thăm trường học — sống như người cha, người bác của mọi người. Trái tim Người luôn đau đáu hướng về đồng bào miền Nam đang chịu cảnh chia cắt, đô hộ.`,
    hinhAnh: "https://cdn.nhandan.vn/images/22f099ca8bc7ae81aa2a8d3416a84bf8c9f0799f0314b2408892979adb2b810cdd2f94e77eca384aff2d2e83ef9e0d3c732198df3735346d53c00e8841d216e39f845d6a56590c0208ceeb7b453a08a948b9382a8c3d1e37736b78a1be2bbad7/5e7cd2f854eb141ea52ece76709aff7b.jpg.webp",
    moTaAnh: "Bác Hồ lãnh đạo xây dựng đất nước sau giải phóng miền Bắc",
    mauNen: "#1A3750"
  },
  {
    id: 11,
    chuong: "Chương 11",
    nam: "1969",
    tieuDe: "Người ra đi — Di sản bất tử",
    moTa: `Ngày 2 tháng 9 năm 1969, Chủ tịch Hồ Chí Minh từ trần tại Hà Nội, hưởng thọ 79 tuổi — để lại muôn vàn tiếc thương cho dân tộc.`,
    chiTiet: `Người ra đi đúng vào ngày Quốc khánh, để lại bản Di chúc thiêng liêng — tài sản vô giá cho muôn đời. Di nguyện cuối cùng là mong Đảng, mong dân giữ vững đoàn kết, xây dựng đất nước giàu đẹp. Tên Người, tư tưởng Người, đạo đức Người sống mãi trong lòng dân tộc Việt Nam và nhân loại tiến bộ trên toàn thế giới.`,
    hinhAnh: "https://photo.znews.vn/w660/Uploaded/rotntb/2019_08_27/3.jpg",
    moTaAnh: "Lăng Chủ tịch Hồ Chí Minh — nơi Người an nghỉ ngàn thu",
    mauNen: "#1C1C1C"
  }
];
