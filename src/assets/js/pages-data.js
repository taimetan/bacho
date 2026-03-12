/**
 * =====================================================
 * DỮ LIỆU CHO CÁC TRANG CÒN LẠI
 * Website Chủ tịch Hồ Chí Minh
 * =====================================================
 */

/* ==========================================
   1. TÁC PHẨM CỦA BÁC HỒ
   ========================================== */
const tacPhamData = [
  {
    id: 1,
    tenTacPham: "Bản án chế độ thực dân Pháp",
    namXuatBan: "1925",
    theLoai: "Chính luận",
    moTa: "Tác phẩm tố cáo tội ác của chế độ thực dân Pháp đối với nhân dân các nước thuộc địa, đặc biệt là Đông Dương. Đây là tiếng nói mạnh mẽ đầu tiên vạch trần bộ mặt thật của chủ nghĩa thực dân trước dư luận thế giới.",
    chiTiet: "Cuốn sách gồm 12 chương, xuất bản bằng tiếng Pháp tại Paris với tựa đề \"Le Procès de la colonisation française\". Nguyễn Ái Quốc đã dùng chính tài liệu, số liệu của thực dân Pháp để vạch trần chính sách cai trị tàn bạo, bóc lột dã man và ngu dân của chúng tại các thuộc địa.",
    trichDan: "Chủ nghĩa tư bản là một con đỉa có một vòi bám vào giai cấp vô sản ở chính quốc và một vòi khác bám vào giai cấp vô sản ở các thuộc địa.",
    hinhAnh: "https://baotanglichsu.vn/DataFiles/2022/08/News/Thumb/20220816-113208-K1zJERMx.jpg",
  },
  {
    id: 2,
    tenTacPham: "Đường Kách mệnh",
    namXuatBan: "1927",
    theLoai: "Lý luận cách mạng",
    moTa: "Tác phẩm tập hợp các bài giảng của Nguyễn Ái Quốc tại lớp huấn luyện chính trị ở Quảng Châu (Trung Quốc), đặt nền tảng lý luận cho phong trào cách mạng Việt Nam.",
    chiTiet: "\"Đường Kách mệnh\" giải đáp những vấn đề cơ bản của cách mạng Việt Nam: Cách mạng là gì? Vì sao phải cách mạng? Ai là người cách mạng? Cách mạng phải làm như thế nào? Tác phẩm xác định con đường cách mạng vô sản là đúng đắn nhất cho Việt Nam.",
    trichDan: "Muốn làm cách mệnh thì phải biết đoàn kết, phải có tổ chức, phải có huấn luyện, phải có lãnh đạo.",
    hinhAnh: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Duongkachmenh.jpg",
  },
  {
    id: 3,
    tenTacPham: "Tuyên ngôn Độc lập",
    namXuatBan: "1945",
    theLoai: "Văn kiện lịch sử",
    moTa: "Văn kiện lịch sử trọng đại khai sinh nước Việt Nam Dân chủ Cộng hòa, được Chủ tịch Hồ Chí Minh đọc tại Quảng trường Ba Đình ngày 2 tháng 9 năm 1945.",
    chiTiet: "Bản Tuyên ngôn Độc lập trích dẫn Tuyên ngôn Độc lập của Mỹ (1776) và Tuyên ngôn Nhân quyền và Dân quyền của Pháp (1789) để khẳng định quyền tự do, độc lập của dân tộc Việt Nam. Đây là áng văn chính luận bất hủ, kết tinh khát vọng tự do của cả dân tộc.",
    trichDan: "Tất cả mọi người đều sinh ra có quyền bình đẳng. Tạo hóa cho họ những quyền không ai có thể xâm phạm được; trong những quyền ấy, có quyền được sống, quyền tự do và quyền mưu cầu hạnh phúc.",
    hinhAnh: "https://file.qdnd.vn/data/images/0/2020/09/01/vuhuyen/2882020huyen18pg.jpg?dpi=150&quality=100&w=575",
  },
  {
    id: 4,
    tenTacPham: "Lời kêu gọi Toàn quốc kháng chiến",
    namXuatBan: "1946",
    theLoai: "Lời kêu gọi",
    moTa: "Lời hiệu triệu thiêng liêng của Chủ tịch Hồ Chí Minh gửi đến toàn thể đồng bào Việt Nam ngày 19 tháng 12 năm 1946, kêu gọi cả nước đứng lên kháng chiến chống thực dân Pháp.",
    chiTiet: "Lời kêu gọi ngắn gọn nhưng hào hùng, thể hiện quyết tâm sắt đá của cả dân tộc. Bác kêu gọi mỗi người dân, bất kể trai gái, già trẻ, dùng mọi vũ khí có trong tay để đánh giặc cứu nước.",
    trichDan: "Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ!",
    hinhAnh: "https://upload.wikimedia.org/wikipedia/vi/f/f2/Toanquockhangchien.jpg",
  },
  {
    id: 5,
    tenTacPham: "Nhật ký trong tù",
    namXuatBan: "1942–1943",
    theLoai: "Thơ",
    moTa: "Tập thơ gồm 133 bài thơ chữ Hán, sáng tác trong thời gian Nguyễn Ái Quốc bị chính quyền Tưởng Giới Thạch bắt giam tại Quảng Tây, Trung Quốc.",
    chiTiet: "\"Ngục trung nhật ký\" là tác phẩm văn học xuất sắc, phản ánh tinh thần lạc quan, ý chí kiên cường và tâm hồn nghệ sĩ của Bác Hồ ngay trong cảnh tù đày khắc nghiệt. Tập thơ được dịch ra nhiều thứ tiếng và được đánh giá là kiệt tác văn học thế giới.",
    trichDan: "Thân thể ở trong lao, / Tinh thần ở ngoài lao. / Muốn nên sự nghiệp lớn, / Tinh thần càng phải cao.",
    hinhAnh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhy5El5eD8oRhmaQ2JnKWN9_kWG-PoAtkN8w&s",
  },
  {
    id: 6,
    tenTacPham: "Di chúc",
    namXuatBan: "1965–1969",
    theLoai: "Di chúc",
    moTa: "Văn kiện lịch sử vô giá — tâm nguyện cuối cùng của Chủ tịch Hồ Chí Minh gửi lại toàn Đảng, toàn dân trước khi Người ra đi. Bản Di chúc được Bác viết và sửa chữa nhiều lần trong 4 năm cuối đời.",
    chiTiet: "Di chúc của Bác tập trung vào các vấn đề: xây dựng Đảng trong sạch, vững mạnh; chăm lo đời sống nhân dân; đoàn kết quốc tế; và tâm nguyện cá nhân giản dị. Bác dặn dò về việc chăm sóc thương binh, liệt sĩ, giáo dục thế hệ trẻ.",
    trichDan: "Tôi chỉ có một ham muốn, ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập, dân ta được hoàn toàn tự do, đồng bào ai cũng có cơm ăn áo mặc, ai cũng được học hành.",
    hinhAnh: "https://file3.qdnd.vn/data/images/0/2024/08/29/upload_2072/di%20chuc.jpg",
  }
];

/* ==========================================
   2. TẤM GƯƠNG HỌC TẬP
   ========================================== */
const tamGuongData = [
  {
    id: 1,
    tieuDe: "Tự học suốt đời",
    moTa: "Bác Hồ là tấm gương sáng ngời về tinh thần tự học. Người tự học ngoại ngữ, nghiên cứu chủ nghĩa Mác-Lênin và các tri thức nhân loại không ngừng nghỉ.",
    chiTiet: "Trong suốt cuộc đời hoạt động cách mạng, Bác đã tự học và sử dụng thành thạo nhiều ngoại ngữ: tiếng Pháp, Anh, Nga, Trung Quốc, Đức, Ý... Bác học mọi lúc, mọi nơi — trên tàu, trong tù, tại chiến khu. Phương pháp học của Bác là học đi đôi với hành, học từ sách vở kết hợp với học từ thực tiễn cuộc sống.",
    hinhAnh: "https://www.cdspkg.edu.vn/images/hoc-lam-theo-bac/nam_2020/tam_guong_tu_hoc/1.jpg"
  },
  {
    id: 2,
    tieuDe: "Sống giản dị, thanh bạch",
    moTa: "Là Chủ tịch nước nhưng Bác sống vô cùng giản dị — ở nhà sàn nhỏ, mặc quần áo bộ đội, ăn cơm đạm bạc cùng bộ đội.",
    chiTiet: "Ngôi nhà sàn của Bác tại Phủ Chủ tịch chỉ có hai phòng nhỏ, đồ đạc đơn sơ. Bác thường mặc bộ kaki, đi dép cao su. Bữa ăn của Bác chỉ có cơm, rau luộc, cá kho. Khi đồng bào còn đói, Bác nhịn ăn sáng thứ bảy hàng tuần để góp gạo. Đó là đạo đức của một vị lãnh tụ vĩ đại.",
    hinhAnh: "https://suckhoedoisong.qltns.mediacdn.vn/zoom/600_315/324455921873985536/2024/5/19/ttxvn-chu-tich-ho-chi-minh-7-659-1716078359593919317476-30-0-1280-2000-crop-17160784719911988464698.jpg"
  },
  {
    id: 3,
    tieuDe: "Yêu thương con người",
    moTa: "Bác Hồ dành tình yêu thương vô bờ bến cho đồng bào — từ các cháu thiếu nhi đến cụ già, từ bộ đội đến người lao động bình thường.",
    chiTiet: "Bác thường gửi quà, viết thư cho các cháu thiếu nhi vào dịp Tết Trung thu. Bác đi thăm bộ đội trong đêm rét, đắp chăn cho chiến sĩ ngủ. Bác xuống ruộng cấy lúa cùng nông dân. Với Bác, mỗi người dân đều là người thân, mỗi nỗi khổ của dân đều là nỗi đau của Người.",
    hinhAnh: "https://st.vndoc.com/data/image/2019/02/20/hay-chung-to-rang-bac-ho-song-vo-cung-gian-di-thanh-bach-1.jpg"
  },
  {
    id: 4,
    tieuDe: "Tinh thần quốc tế cao cả",
    moTa: "Bác Hồ không chỉ đấu tranh cho tự do của dân tộc Việt Nam mà còn dành cả đời cho sự nghiệp giải phóng các dân tộc bị áp bức trên toàn thế giới.",
    chiTiet: "Trong quá trình hoạt động cách mạng, Bác đã đến hơn 30 quốc gia, gặp gỡ và ủng hộ phong trào giải phóng dân tộc tại nhiều nước châu Á, châu Phi. Người được UNESCO vinh danh là 'Anh hùng giải phóng dân tộc, nhà văn hóa kiệt xuất' — không chỉ của Việt Nam mà của cả nhân loại.",
    hinhAnh: "https://cdn-images.vtv.vn/zoom/576_360/2020/5/19/bacho1-1589829181751829276326.jpg"
  },
  {
    id: 5,
    tieuDe: "Kiên trì, nhẫn nại",
    moTa: "30 năm bôn ba khắp thế giới, 13 tháng trong tù ngục, cả đời sống trong gian khổ — Bác là hiện thân của tinh thần kiên trì, nhẫn nại phi thường.",
    chiTiet: "Từ năm 1911 đến 1941, Bác trải qua 30 năm xa Tổ quốc, sống qua nhiều quốc gia trong điều kiện khó khăn. Bị bắt giam 13 tháng tại Trung Quốc, bị kết án tử hình vắng mặt tại Đông Dương, nhưng Người chưa bao giờ nản lòng. Ý chí sắt đá ấy đã truyền cảm hứng cho hàng triệu người.",
    hinhAnh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmX8tAKfBSsLpd8zAjsSm0p_n3Ne2MfhOWVg&s"
  },
  {
    id: 6,
    tieuDe: "Trung thực, chính trực",
    moTa: "Bác Hồ luôn sống trung thực, nói đi đôi với làm, không bao giờ tham quyền cố vị hay tư lợi cá nhân.",
    chiTiet: "Bác từng nói: 'Cán bộ phải thật sự cần, kiệm, liêm, chính, chí công vô tư.' Chính bản thân Bác đã sống trọn vẹn với lời dạy ấy. Suốt đời, Người không có tài sản riêng, không gia đình riêng — cả cuộc đời dành trọn cho dân, cho nước.",
    hinhAnh: "https://cdn.baohatinh.vn/images/19ae686699e0776f7763821c38b52d55fd942ca28aa3163c03eff1c5bb73d4f80480b764acacf8f4af4b796bd44d666b/106d5202700t81400l0.jpg"
  }
];

/* ==========================================
   3. KHÔNG GIAN VĂN HÓA HỒ CHÍ MINH
   ========================================== */
const khongGianVanHoaData = [
  {
    id: 1,
    tieuDe: "Khu di tích Kim Liên",
    diaDiem: "Nam Đàn, Nghệ An",
    moTa: "Quê hương Chủ tịch Hồ Chí Minh — nơi Người sinh ra và lớn lên trong những năm tháng đầu đời. Khu di tích bao gồm nhà thờ họ Nguyễn Sinh, nhà ở của gia đình Bác tại làng Hoàng Trù và làng Kim Liên.",
    loaiHinh: "Di tích quốc gia đặc biệt",
    hinhAnh: "https://media-cdn-v2.laodong.vn/storage/newsportal/2025/5/16/1507718/Que_Noi_Compressed.jpg",
  },
  {
    id: 2,
    tieuDe: "Phủ Chủ tịch & Nhà sàn Bác Hồ",
    diaDiem: "Ba Đình, Hà Nội",
    moTa: "Nơi Chủ tịch Hồ Chí Minh sống và làm việc từ năm 1954 đến khi Người qua đời (1969). Ngôi nhà sàn nhỏ bé, giản dị giữa khu vườn rộng lớn là biểu tượng của lối sống thanh bạch, khiêm tốn của vị lãnh tụ kính yêu.",
    loaiHinh: "Di tích quốc gia đặc biệt",
    hinhAnh: "https://danviet.ex-cdn.com/files/f1/296231569849192448/2023/5/19/nha-san-bac-ho-3-16844547570671294911851.jpg",
  },
  {
    id: 3,
    tieuDe: "Bến Nhà Rồng",
    diaDiem: "Quận 4, TP. Hồ Chí Minh",
    moTa: "Nơi ngày 5/6/1911, người thanh niên Nguyễn Tất Thành xuống tàu ra đi tìm đường cứu nước. Hiện nay là Bảo tàng Hồ Chí Minh — Chi nhánh TP. Hồ Chí Minh, trưng bày nhiều hiện vật quý về cuộc đời hoạt động cách mạng của Bác.",
    loaiHinh: "Di tích quốc gia",
    hinhAnh: "https://cdn.nhandan.vn/images/14480e71e43787dc3b9a6e14ff9ade9eba4732151692579b0f132da632eb63f0f5b595197a5e2c41fca7cc4937beba1e/ndo_br_11.jpg",
  },
  {
    id: 4,
    tieuDe: "Hang Pác Bó",
    diaDiem: "Hà Quảng, Cao Bằng",
    moTa: "Căn cứ cách mạng nơi Bác Hồ sống và làm việc khi về nước năm 1941. Tại đây Người đã sống trong hang đá, ăn cháo bẹ rau măng, dịch Lịch sử Đảng Cộng sản Liên Xô và soạn thảo đường lối cách mạng.",
    loaiHinh: "Di tích quốc gia đặc biệt",
    hinhAnh: "https://dulichviet.com.vn/images/bandidau/TIN-TUC/du-lich-cao-bang/hang-pac-po-cao-bang-du-lich-viet.jpg",
  },
  {
    id: 5,
    tieuDe: "Quảng trường Ba Đình",
    diaDiem: "Ba Đình, Hà Nội",
    moTa: "Nơi Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập ngày 2/9/1945, khai sinh nước Việt Nam Dân chủ Cộng hòa. Quảng trường cũng là nơi đặt Lăng Chủ tịch Hồ Chí Minh — nơi Người an nghỉ.",
    loaiHinh: "Di tích quốc gia đặc biệt",
    hinhAnh: "https://media.vietnamplus.vn/images/7255a701687d11cb8c6bbc58a6c80785d64b0204ede4cf016f6f1b9adbddf563d8679b6dac785012022b81018931eb594f9efb0c8972265f49d8f86164867992/mittinh7150902.jpg",
  },
  {
    id: 6,
    tieuDe: "Chiến khu Việt Bắc",
    diaDiem: "Tuyên Quang, Thái Nguyên",
    moTa: "Vùng căn cứ kháng chiến chống Pháp mà Bác Hồ đã sống và lãnh đạo toàn quốc kháng chiến trong giai đoạn 1946–1954. Tại đây, giữa núi rừng, Bác vẫn giữ lối sống giản dị, gần gũi đồng bào, bộ đội.",
    loaiHinh: "Di tích lịch sử",
    hinhAnh: "https://cly.1cdn.vn/2024/02/12/atk-1.jpg",
  }
];

/* ==========================================
   4. BẢO TÀNG HỒ CHÍ MINH
   ========================================== */
const baoTangData = [
  {
    id: 1,
    tenBaoTang: "Bảo tàng Hồ Chí Minh",
    diaDiem: "Ba Đình, Hà Nội",
    moTa: "Bảo tàng cấp quốc gia lớn nhất về Chủ tịch Hồ Chí Minh, khánh thành nhân dịp kỷ niệm 100 năm ngày sinh của Người (19/5/1990). Bảo tàng trưng bày hơn 2.000 hiện vật quý giá kể lại cuộc đời và sự nghiệp vĩ đại của Bác.",
    chiTiet: "Tòa nhà bảo tàng được thiết kế bởi kiến trúc sư Liên Xô, mang hình bông hoa sen cách điệu — biểu tượng cho sự thanh khiết của Bác Hồ. Bảo tàng gồm nhiều phòng trưng bày theo thứ tự thời gian, giúp khách tham quan hiểu sâu hơn về cuộc hành trình vĩ đại của Người.",
    dienTich: "18.000 m²",
    namThanhLap: "1990",
    hinhAnh: "https://nhn.1cdn.vn/2023/10/03/bao-tang-ho-chi-minh.jpeg",
  },
  {
    id: 2,
    tenBaoTang: "Bảo tàng Hồ Chí Minh — Chi nhánh TP.HCM",
    diaDiem: "Bến Nhà Rồng, Quận 4, TP. Hồ Chí Minh",
    moTa: "Tọa lạc tại Bến Nhà Rồng lịch sử — nơi người thanh niên Nguyễn Tất Thành xuống tàu ra đi tìm đường cứu nước. Bảo tàng trưng bày tài liệu, hiện vật về quá trình hoạt động cách mạng của Bác tại miền Nam.",
    chiTiet: "Tòa nhà được xây dựng từ năm 1863 theo kiến trúc Pháp, ban đầu là trụ sở của Công ty vận tải đường biển Messageries Maritimes. Năm 1975, nơi đây được chuyển thành bảo tàng, lưu giữ hơn 11.000 hiện vật, tài liệu về Bác Hồ.",
    dienTich: "1.500 m²",
    namThanhLap: "1863",
    hinhAnh: "https://vietnamtourism.vn/imguploads/tourist/2014/TPHoChiMinh/BTHCMChinhanh/30BTHCM01.jpg",
  },
  // {
  //   id: 3,
  //   tenBaoTang: "Bảo tàng Hồ Chí Minh — Chi nhánh Nghệ An",
  //   diaDiem: "Kim Liên, Nam Đàn, Nghệ An",
  //   moTa: "Bảo tàng nằm trong Khu di tích Kim Liên — quê hương Bác Hồ. Nơi đây trưng bày tư liệu về tuổi thơ, gia đình và quê hương của Người, giúp du khách hiểu hơn về cội nguồn của vị lãnh tụ vĩ đại.",
  //   chiTiet: "Khu di tích bao gồm ngôi nhà tranh nơi Bác sinh ra tại làng Hoàng Trù, ngôi nhà ở làng Kim Liên nơi Bác sống từ năm 1901-1906, cùng nhiều hiện vật gắn liền với tuổi thơ của Người.",
  //   dienTich: "205 ha (toàn khu di tích)",
  //   namThanhLap: "1956",
  //   hinhAnh: "https://phuongnam.vanhoavaphattrien.vn/uploads/images/blog/yen-vhpt/2024/05/07/z5418662639347-6f33eaa50ee224ad79b6f93739814b38-1715100050.jpg",
  // },
  {
    id: 3,
    tenBaoTang: "Lăng Chủ tịch Hồ Chí Minh",
    diaDiem: "Quảng trường Ba Đình, Hà Nội",
    moTa: "Công trình tưởng niệm vĩ đại nhất dành cho Chủ tịch Hồ Chí Minh, nơi Người yên nghỉ giữa lòng Thủ đô. Lăng Bác là biểu tượng thiêng liêng của dân tộc, nơi hàng triệu người dân và du khách đến viếng hàng năm.",
    chiTiet: "Lăng được xây dựng từ 1973 đến 1975, bằng đá hoa cương và vật liệu quý từ khắp mọi miền đất nước. Kiến trúc kết hợp giữa phong cách hiện đại và truyền thống Việt Nam, mang tính trang nghiêm, bền vững.",
    dienTich: "4.200 m²",
    namThanhLap: "1975",
    hinhAnh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsUR0UFEEwgWCuSogetZZWziHIqR3bQSIniA&s",
  }
];

/* ==========================================
   5. TRIỂN LÃM
   ========================================== */
const trienLamData = [
  {
    id: 1,
    tieuDe: "Hồ Chí Minh — Hành trình tìm đường cứu nước",
    thoiGian: "5-6-2021",
    diaDiem: "TP. Hồ Chí Minh",
    moTa: "Triển lãm giới thiệu gần 250 hình ảnh, tư liệu được chia thành 3 phần gồm: “Nguyễn Tất Thành-Nguyễn Ái Quốc: Hành trình 30 năm tìm đường cứu nước (1911-1941),” “Lãnh tụ Nguyễn Ái Quốc-Hồ Chí Minh lãnh đạo nhân dân ta giành độc lập dân tộc, xây dựng và bảo vệ Tổ quốc Việt Nam (1941-1969)” và “Kế thừa và tiếp tục phát huy giá trị di sản Hồ Chí Minh (từ 1969 đến nay)",
    loaiHinh: "Triển lãm thường trực",
    hinhAnh: "https://media.vietnamplus.vn/images/7255a701687d11cb8c6bbc58a6c80785e02ea42eb9a9e72e7c672586ebace3045ee749c4f62ec601e51e6e6607d82eb3a74f6b1bfe70b3203772c7979020cefa/0506_bac_ho_1.jpg",
  },
  {
    id: 2,
    tieuDe: "Triển lãm “Chủ tịch Hồ Chí Minh với Thủ đô Hà Nội”",
    thoiGian: "8-10-2022",
    diaDiem: "Thủ đô Hà Nội",
    moTa: `"Với hơn 150 ảnh, tài liệu, bản trích và hàng chục hiện vật, đầu sách quý liên quan tới Chủ tịch Hồ Chí Minh, triển lãm “Chủ tịch Hồ Chí Minh với Thủ đô Hà Nội” gồm 2 nội dung chính "Chủ tịch Hồ Chí Minh và Thủ đô Hà Nội"; "Di tích lưu niệm và tượng đài Chủ tịch Hồ Chí Minh tại Việt Nam và trên thế giới"`,
    loaiHinh: "TTriển lãm chuyên đề",
    hinhAnh: "https://file3.qdnd.vn/data/images/0/2022/10/08/nguyenthao/bac%20ho.jpg?dpi=150&quality=100&w=870",
  },
  {
    id: 3,
    tieuDe: "Triển lãm “Tấm lòng của họa sĩ Việt kiều với Bác Hồ”",
    thoiGian: "17-5-2024",
    diaDiem: "Triển lãm do Bảo tàng Mỹ thuật Việt Nam phối hợp với Hội Thái Việt tại tỉnh Nakhon Phanom, Thái Lan",
    moTa: `Xuất phát từ tấm lòng ngưỡng mộ và tình cảm kính yêu đối với Bác Hồ, với quê hương, đất nước, từ năm 2018 khi chuyển sang quản lý Khu tưởng niệm Chủ tịch Hồ Chí Minh tại tỉnh Nakhon Phanom, họa sĩ Đào Trọng Lý bắt đầu vẽ Bác theo tâm thức của mình và dựa một phần vào những tư liệu, hình ảnh tìm kiếm được.`,
    loaiHinh: "Triển lãm lưu động",
    hinhAnh: "https://file3.qdnd.vn/data/images/0/2024/05/17/upload_2049/bac-ho1.jpg?dpi=150&quality=100&w=870",
  },
  {
    id: 4,
    tieuDe: "Trưng bày những hình ảnh về cuộc đời Bác Hồ",
    thoiGian: "Định kỳ",
    diaDiem: "TP. Hồ Chí Minh",
    moTa: `Sáng 17/5, tại Phố đi bộ Nguyễn Huệ (quận 1), Ban tổ chức kỷ niệm các ngày lễ lớn Thành phố Hồ Chí Minh tổ chức khai mạc triển lãm “Chủ tịch Hồ Chí Minh - Người anh hùng dân tộc vĩ đại, kết tinh rạng ngời của đạo đức, trí tuệ, khí phách, lương tri của dân tộc Việt Nam và thời đại."`,
    loaiHinh: "Triển lãm thường trực",
    hinhAnh: "https://media.vietnamplus.vn/images/bf00062e13bf1037816ee5855f7b6bd7138b41dac4c7c457f42a4ec34d39291ca8df65d0cfb169d08f59bfd4735c5674/trien-lam-bac-ho.jpg",
  },
  {
    id: 5,
    tieuDe: "Triển lãm sách trực tuyến kỷ niệm 130 năm Ngày sinh Bác Hồ",
    thoiGian: "19-5-2020",
    diaDiem: "TP. Hồ Chí Minh",
    moTa: `"Triển lãm sách kỷ niệm 130 năm Ngày sinh Chủ tịch Hồ Chí Minh" theo hình thức trực tuyến trên sàn Book365.vn với tên miền truy cập: TrienlamsachHCM.Book365.vn do Bộ Thông tin và Truyền thông phối hợp với Ban Tuyên giáo Trung ương tổ chức khai mạc hôm nay (ngày 19/5). Được biết, triển lãm diễn ra từ ngày 19 đến 30/5 với mong muốn đẩy mạnh việc học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh cho cán bộ, đảng viên, quần chúng nhân dân. Sự kiện này cũng nhằm góp phần vun đắp lòng yêu nước, tự hào dân tộc; khẳng định niềm tin của nhân dân đối với Đảng và những đóng góp của ngành xuất bản trong sự nghiệp xây dựng và bảo vệ Tổ quốc.`,
    loaiHinh: "Triển lãm văn hóa",
    hinhAnh: "https://danviet.ex-cdn.com/files/f1/2020/5/19/bac2-15898828363151664952373.png",
  },
  {
    id: 6,
    tieuDe: "Triển lãm ảnh 'Hồ Chí Minh - Đẹp nhất tên Người'",
    thoiGian: "19-5-2021",
    diaDiem: "TP. Hồ Chí Minh",
    moTa: `Ngày 19/5, nhân kỷ niệm 131 năm Ngày sinh Chủ tịch Hồ Chí Minh và 110 năm Ngày Bác Hồ ra đi tìm đường cứu nước, Bảo tàng Lịch sử Thành phố Hồ Chí Minh phối hợp với Bảo tàng Hồ Chí Minh – chi nhánh Thành phố Hồ Chí Minh thực hiện triển lãm ảnh chuyên đề "Hồ Chí Minh - Đẹp nhất tên Người".`,
    loaiHinh: "Triển lãm văn hóa",
    hinhAnh: "https://cdnmedia.baotintuc.vn/Upload/DMDnZyELa7xUDTdLsa19w/files/2021/05/050521/070521/080521/160521/170521/190521/tham-quan-190521.jpg",
  }
];
