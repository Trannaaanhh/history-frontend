/**
 * Mock data for the Vietnamese history learning platform.
 */

export interface Lesson {
  id: string;
  title: string;
  period: string;
  description: string;
  content: string;
  imageUrl: string;
  duration: number;
  difficulty: 'Cơ bản' | 'Trung bình' | 'Nâng cao';
  topics: string[];
}

export interface QuizQuestion {
  id: string;
  lessonId: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface KnowledgeBase {
  topic: string;
  content: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  sources?: string[];
}

export interface UserProgress {
  completedLessons: string[];
  quizScores: Record<string, number>;
}

export const lessons: Lesson[] = [
  {
    "id": "bac-thuoc",
    "title": "Thời kỳ Bắc thuộc",
    "period": "179 TCN - 938",
    "description": "Tìm hiểu về cuộc đấu tranh giành độc lập bền bỉ của dân tộc trong hơn một thiên niên kỷ.",
    "content": "## Khái quát thời kỳ\nThời kỳ Bắc thuộc là giai đoạn lịch sử dài nhất trong tiến trình lịch sử Việt Nam, bắt đầu từ sau thất bại của An Dương Vương trước Triệu Đà năm 179 TCN và kết thúc bằng chiến thắng Bạch Đằng của Ngô Quyền năm 938.\n\n## Các cuộc khởi nghĩa tiêu biểu\nSuốt hơn 1000 năm, nhân dân ta không ngừng nổi dậy chống lại ách đô hộ của phong kiến phương Bắc:\n- **Khởi nghĩa Hai Bà Trưng (năm 40):** Cuộc khởi nghĩa đầu tiên do phụ nữ lãnh đạo, đánh đuổi Thái thú Tô Định, giành độc lập trong 3 năm.\n- **Khởi nghĩa Bà Triệu (năm 248):** Nổi dậy ở vùng Cửu Chân, Thanh Hóa với câu nói bất hủ: \"Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ...\".\n- **Khởi nghĩa Lý Bí (năm 542):** Đánh bại quân nhà Lương, thành lập nhà nước Vạn Xuân - nhà nước độc lập đầu tiên sau thời Hùng Vương.\n- **Khởi nghĩa Mai Thúc Loan (năm 722):** Giải phóng nhiều vùng đất rộng lớn, Mai Thúc Loan xưng đế (Mai Hắc Đế).\n\n## Chiến thắng Bạch Đằng năm 938\nNăm 938, tận dụng địa thế sông Bạch Đằng, Ngô Quyền đã sử dụng kế đóng cọc gỗ đầu bịt sắt để tiêu diệt quân Nam Hán. Chiến thắng lừng lẫy này đã kết thúc hoàn toàn thời kỳ Bắc thuộc, mở ra kỷ nguyên độc lập, tự chủ lâu dài cho dân tộc Việt Nam.",
    "imageUrl": "/lesson-images/bac-thuoc-v2.webp",
    "duration": 45,
    "difficulty": "Cơ bản",
    "topics": [
      "Đấu tranh độc lập",
      "Bạch Đằng",
      "Khởi nghĩa",
      "Ngô Quyền"
    ]
  },
  {
    "id": "dai-viet-doc-lap",
    "title": "Đại Việt độc lập",
    "period": "939 - 1009",
    "description": "Xây dựng nền tảng của nhà nước phong kiến độc lập dưới các triều Ngô, Đinh, Tiền Lê.",
    "content": "## Xây dựng chính quyền tự chủ\nSau khi xưng vương, Ngô Quyền đóng đô ở Cổ Loa, thiết lập triều đình trung ương, khẳng định chủ quyền dân tộc.\n\n## Đinh Bộ Lĩnh và công cuộc thống nhất\n- **Loạn 12 sứ quân:** Sau khi Ngô Quyền mất, đất nước rơi vào cảnh cát cứ, chia cắt.\n- **Thống nhất đất nước:** Đinh Bộ Lĩnh với tài thao lược đã lần lượt dẹp tan các sứ quân, thống nhất giang sơn.\n- **Xưng đế:** Năm 968, Đinh Bộ Lĩnh lên ngôi Hoàng đế (Đinh Tiên Hoàng), đặt tên nước là Đại Cồ Việt, đóng đô ở Hoa Lư (Ninh Bình).\n\n## Lê Hoàn và cuộc kháng chiến chống Tống\nNăm 981, lợi dụng lúc triều đình nhà Đinh bối rối, quân Tống sang xâm lược. Lê Hoàn được suy tôn làm vua (Lê Đại Hành), lãnh đạo quân dân đánh bại quân Tống trên sông Bạch Đằng và ải Chi Lăng, bảo vệ vững chắc nền độc lập.",
    "imageUrl": "/lesson-images/dai-viet-doc-lap-v2.webp",
    "duration": 40,
    "difficulty": "Cơ bản",
    "topics": [
      "Đinh Bộ Lĩnh",
      "Lê Hoàn",
      "Hoa Lư",
      "Đại Cồ Việt"
    ]
  },
  {
    "id": "nha-ly",
    "title": "Nhà Lý",
    "period": "1009 - 1225",
    "description": "Giai đoạn hưng thịnh của văn hóa Phật giáo và sự kiện dời đô về Thăng Long.",
    "content": "## Lý Công Uẩn và Chiếu dời đô\nNăm 1010, Lý Thái Tổ (Lý Công Uẩn) nhận thấy vùng đất Đại La có địa thế \"rồng cuộn hổ ngồi\", đã quyết định dời đô từ Hoa Lư về đây và đổi tên là Thăng Long (Rồng bay lên).\n\n## Văn hóa và Giáo dục phát triển\n- **Văn Miếu - Quốc Tử Giám:** Xây dựng năm 1070 tại Thăng Long, đây là biểu tượng của nền giáo dục khoa bảng và là trường đại học đầu tiên của Việt Nam.\n- **Phật giáo:** Trở thành quốc giáo, nhiều công trình kiến trúc Phật giáo tinh xảo được xây dựng như chùa Một Cột, tháp Báo Thiên.\n\n## Kháng chiến chống Tống (1075 - 1077)\nLý Thường Kiệt lãnh đạo cuộc kháng chiến với chiến lược \"Tiên phát chế nhân\". Bài thơ thần \"Nam quốc sơn hà\" vang lên trên sông Như Nguyệt được coi là bản Tuyên ngôn Độc lập đầu tiên của dân tộc.",
    "imageUrl": "/lesson-images/nha-ly-v2.webp",
    "duration": 50,
    "difficulty": "Trung bình",
    "topics": [
      "Thăng Long",
      "Lý Thường Kiệt",
      "Văn Miếu",
      "Phật giáo"
    ]
  },
  {
    "id": "nha-tran",
    "title": "Nhà Trần",
    "period": "1225 - 1400",
    "description": "Hào khí Đông A với ba lần đánh bại quân xâm lược Nguyên Mông hùng mạnh.",
    "content": "## Hào khí Đông A\nNhà Trần thay thế nhà Lý, tiếp tục củng cố bộ máy nhà nước và quân đội. Tinh thần đoàn kết giữa triều đình và nhân dân tạo nên sức mạnh \"Hào khí Đông A\".\n\n## Ba lần chiến thắng Nguyên Mông\nĐây là những chiến công vĩ đại nhất trong lịch sử chống ngoại xâm:\n- **Lần 1 (1258):** Chiến thắng Đông Bộ Đầu buộc quân Mông Cổ rút chạy.\n- **Lần 2 (1285):** Hội nghị Diên Hồng thể hiện quyết tâm \"Đánh!\". Các trận thắng Tây Kết, Hàm Tử, Chương Dương lừng lẫy.\n- **Lần 3 (1288):** Chiến thắng quyết định trên sông Bạch Đằng, đập tan ý chí xâm lược của đế chế Nguyên Mông.\n\n## Danh nhân tiêu biểu\n- **Trần Hưng Đạo:** Vị tướng thiên tài với tác phẩm \"Hịch tướng sĩ\" và \"Binh thư yếu lược\".\n- **Trần Quốc Toản:** Người thiếu niên anh hùng bóp nát quả cam vì không được dự bàn việc nước.",
    "imageUrl": "/lesson-images/nha-tran-v2.webp",
    "duration": 60,
    "difficulty": "Nâng cao",
    "topics": [
      "Nguyên Mông",
      "Trần Hưng Đạo",
      "Diên Hồng",
      "Bạch Đằng"
    ]
  },
  {
    "id": "lam-son",
    "title": "Khởi nghĩa Lam Sơn",
    "period": "1418 - 1427",
    "description": "Cuộc khởi nghĩa trường kỳ chống quân Minh xâm lược dưới sự lãnh đạo của Lê Lợi.",
    "content": "## Lê Lợi và khởi nghĩa Lam Sơn\nLê Lợi phất cờ khởi nghĩa tại Lam Sơn (Thanh Hóa). Những năm đầu gian khổ, nghĩa quân phải nhiều lần rút lên núi Chí Linh chống chọi với đói khát và vòng vây của giặc.\n\n## Nguyễn Trãi và Bình Ngô đại cáo\nNguyễn Trãi - vị quân sư tài ba với tư tưởng \"lấy nhân nghĩa thắng hung tàn\". Tác phẩm \"Bình Ngô đại cáo\" do ông soạn thảo sau đại thắng quân Minh là bản tuyên ngôn độc lập hào hùng, khẳng định chủ quyền dân tộc.\n\n## Các chiến thắng quyết định\n- **Trận Chúc Động - Tốt Động:** Đánh tan hàng vạn quân Minh.\n- **Chiến dịch Chi Lăng - Xương Giang:** Tiêu diệt đạo viện binh của Liễu Thăng, buộc Vương Thông phải giảng hòa rút quân về nước.",
    "imageUrl": "/lesson-images/lam-son-v2.webp",
    "duration": 55,
    "difficulty": "Trung bình",
    "topics": [
      "Lê Lợi",
      "Nguyễn Trãi",
      "Bình Ngô Đại Cáo",
      "Chi Lăng"
    ]
  },
  {
    "id": "khang-chien-phap",
    "title": "Kháng chiến chống Pháp",
    "period": "1945 - 1954",
    "description": "Giai đoạn lịch sử hiện đại với chiến thắng Điện Biên Phủ chấn động địa cầu.",
    "content": "## Cách mạng Tháng Tám 1945\nNgày 2/9/1945, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.\n\n## Toàn quốc kháng chiến\nNăm 1946, lời kêu gọi \"Toàn quốc kháng chiến\" của Hồ Chủ tịch vang lên. Nhân dân ta bước vào cuộc trường kỳ kháng chiến với tinh thần \"Quyết tử cho Tổ quốc quyết sinh\".\n\n## Chiến thắng Điện Biên Phủ (1954)\nChiến dịch lịch sử diễn ra suốt 56 ngày đêm dưới sự chỉ huy của Đại tướng Võ Nguyên Giáp. Thắng lợi \"lừng lẫy năm châu, chấn động địa cầu\" đã buộc thực dân Pháp phải ký Hiệp định Giơ-nevơ, giải phóng hoàn toàn miền Bắc Việt Nam.",
    "imageUrl": "/lesson-images/khang-chien-phap-v2.webp",
    "duration": 65,
    "difficulty": "Nâng cao",
    "topics": [
      "Hồ Chí Minh",
      "Điện Biên Phủ",
      "Võ Nguyên Giáp",
      "1954"
    ]
  }
];

export const quizQuestions: QuizQuestion[] = [
  {
    "id": "q1",
    "lessonId": "bac-thuoc",
    "question": "Vị tướng nào đã lãnh đạo nhân dân đánh bại quân Nam Hán trên sông Bạch Đằng năm 938?",
    "options": [
      "Lý Bí",
      "Ngô Quyền",
      "Khúc Thừa Dụ",
      "Đinh Bộ Lĩnh"
    ],
    "correctAnswer": 1,
    "explanation": "Ngô Quyền đã sử dụng chiến thuật đóng cọc gỗ xuống lòng sông Bạch Đằng để tiêu diệt quân Nam Hán, kết thúc 1000 năm Bắc thuộc."
  },
  {
    "id": "q2",
    "lessonId": "bac-thuoc",
    "question": "Ai là tác giả của câu nói nổi tiếng: \"Tôi muốn cưỡi cơn gió mạnh, đạp luồng sóng dữ, chém cá kình ở Biển Đông\"?",
    "options": [
      "Trưng Trắc",
      "Bà Triệu",
      "Thái sư Trần Thủ Độ",
      "Nguyễn Trãi"
    ],
    "correctAnswer": 1,
    "explanation": "Đây là câu nói hào hùng của Bà Triệu thể hiện ý chí quyết tâm chống lại quân xâm lược nhà Ngô năm 248."
  },
  {
    "id": "q3",
    "lessonId": "dai-viet-doc-lap",
    "question": "Đinh Bộ Lĩnh lên ngôi Hoàng đế và đặt tên nước là gì?",
    "options": [
      "Đại Việt",
      "Đại Cồ Việt",
      "Vạn Xuân",
      "Âu Lạc"
    ],
    "correctAnswer": 1,
    "explanation": "Năm 968, Đinh Bộ Lĩnh lên ngôi Hoàng đế (Đinh Tiên Hoàng) và đặt tên nước là Đại Cồ Việt."
  },
  {
    "id": "q4",
    "lessonId": "dai-viet-doc-lap",
    "question": "Chiến thắng nào của Lê Hoàn đã bảo vệ vững chắc nền độc lập trước quân Tống năm 981?",
    "options": [
      "Bạch Đằng",
      "Rạch Gầm - Xoài Mút",
      "Chi Lăng - Xương Giang",
      "Ngọc Hồi - Đống Đa"
    ],
    "correctAnswer": 0,
    "explanation": "Năm 981, quân dân Tiền Lê dưới sự chỉ huy của Lê Hoàn đã đánh bại quân Tống trên sông Bạch Đằng và ải Chi Lăng."
  },
  {
    "id": "q5",
    "lessonId": "nha-ly",
    "question": "Lý Thái Tổ dời đô từ Hoa Lư về thành Đại La và đổi tên thành gì?",
    "options": [
      "Phú Xuân",
      "Gia Định",
      "Thăng Long",
      "Tây Đô"
    ],
    "correctAnswer": 2,
    "explanation": "Lý Thái Tổ dời đô về thành Đại La and đổi tên thành Thăng Long, có nghĩa là \"Rồng bay lên\"."
  },
  {
    "id": "q6",
    "lessonId": "nha-ly",
    "question": "Trường đại học đầu tiên của Việt Nam được xây dựng dưới thời vua nào?",
    "options": [
      "Lý Thái Tổ",
      "Lý Thánh Tông",
      "Lý Nhân Tông",
      "Trần Thánh Tông"
    ],
    "correctAnswer": 1,
    "explanation": "Văn Miếu được xây dựng năm 1070 dưới thời vua Lý Thánh Tông. Năm 1076, vua Lý Nhân Tông cho xây thêm Quốc Tử Giám."
  },
  {
    "id": "q7",
    "lessonId": "nha-tran",
    "question": "Vị vua nào của nhà Trần đã tổ chức Hội nghị Diên Hồng để hỏi ý kiến các bô lão về việc đánh giặc?",
    "options": [
      "Trần Thái Tông",
      "Trần Thánh Tông",
      "Trần Nhân Tông",
      "Trần Nghệ Tông"
    ],
    "correctAnswer": 2,
    "explanation": "Năm 1285, trước nguy cơ xâm lược của quân Nguyên Mông lần thứ hai, vua Trần Nhân Tông đã tổ chức Hội nghị Diên Hồng."
  },
  {
    "id": "q8",
    "lessonId": "nha-tran",
    "question": "Tác phẩm \"Hịch tướng sĩ\" là của ai?",
    "options": [
      "Trần Quang Khải",
      "Trần Nhật Duật",
      "Trần Quốc Tuấn",
      "Trần Thủ Độ"
    ],
    "correctAnswer": 2,
    "explanation": "Hịch tướng sĩ là bài hịch nổi tiếng của Hưng Đạo Vương Trần Quốc Tuấn dùng để khích lệ tướng sĩ chống quân Nguyên Mông."
  },
  {
    "id": "q9",
    "lessonId": "lam-son",
    "question": "Ai là người soạn thảo \"Bình Ngô đại cáo\"?",
    "options": [
      "Lê Lợi",
      "Nguyễn Trãi",
      "Chu Văn An",
      "Trần Nguyên Đán"
    ],
    "correctAnswer": 1,
    "explanation": "Nguyễn Trãi là người soạn thảo Bình Ngô đại cáo thay lời Lê Lợi sau khi cuộc khởi nghĩa Lam Sơn giành thắng lợi hoàn toàn."
  },
  {
    "id": "q10",
    "lessonId": "lam-son",
    "question": "Chiến thắng nào buộc quân Minh phải giảng hòa và rút quân về nước năm 1427?",
    "options": [
      "Chúc Động",
      "Tốt Động",
      "Chi Lăng - Xương Giang",
      "Đông Bộ Đầu"
    ],
    "correctAnswer": 2,
    "explanation": "Chiến thắng Chi Lăng - Xương Giang tiêu diệt viện binh giặc, buộc Vương Thông phải ký kết hội thề Đông Quan rút quân."
  },
  {
    "id": "q11",
    "lessonId": "khang-chien-phap",
    "question": "Chiến thắng Điện Biên Phủ diễn ra vào năm nào?",
    "options": [
      "1945",
      "1950",
      "1954",
      "1975"
    ],
    "correctAnswer": 2,
    "explanation": "Chiến thắng Điện Biên Phủ lừng lẫy năm châu kết thúc vào ngày 7/5/1954."
  },
  {
    "id": "q12",
    "lessonId": "khang-chien-phap",
    "question": "Đại tướng nào là Tổng tư lệnh trực tiếp chỉ huy chiến dịch Điện Biên Phủ?",
    "options": [
      "Văn Tiến Dũng",
      "Võ Nguyên Giáp",
      "Chu Huy Mân",
      "Nguyễn Chí Thanh"
    ],
    "correctAnswer": 1,
    "explanation": "Đại tướng Võ Nguyên Giáp là vị tổng tư lệnh tài ba đã đưa ra quyết định \"đánh chắc, tiến chắc\" dẫn đến thắng lợi."
  }
];

export const knowledgeBase: KnowledgeBase[] = [
  {
    "topic": "Ngô Quyền",
    "content": "Ngô Quyền (898-944) là vị vua sáng lập nhà Ngô trong lịch sử Việt Nam. Năm 938, ông lãnh đạo quân dân đánh tan quân Nam Hán trên sông Bạch Đằng, kết thúc 1000 năm Bắc thuộc."
  },
  {
    "topic": "Nhà Lý",
    "content": "Triều đại nhà Lý (1009-1225) đặt nền móng cho văn hóa và giáo dục Việt Nam. Lý Thái Tổ dời đô về Thăng Long năm 1010. Lý Thường Kiệt lãnh đạo kháng chiến chống Tống với bài thơ thần."
  },
  {
    "topic": "Nhà Trần",
    "content": "Nhà Trần (1225-1400) nổi tiếng với 3 lần kháng chiến chống Nguyên Mông. Hào khí Đông A và tinh thần đoàn kết Diên Hồng là biểu tượng cho sức mạnh dân tộc thời kỳ này."
  },
  {
    "topic": "Lê Lợi",
    "content": "Lê Lợi (Lê Thái Tổ) lãnh đạo khởi nghĩa Lam Sơn (1418-1427) chống lại sự đô hộ của nhà Minh. Ông là người sáng lập ra vương triều Hậu Lê hưng thịnh nhất lịch sử phong kiến."
  },
  {
    "topic": "Nguyễn Trãi",
    "content": "Nguyễn Trãi (1380-1442) là nhà chính trị, quân sự, thi sĩ tài ba. Ông có công lớn trong khởi nghĩa Lam Sơn and là tác giả của Bình Ngô đại cáo - bản tuyên ngôn độc lập thứ hai."
  },
  {
    "topic": "Điện Biên Phủ",
    "content": "Chiến thắng Điện Biên Phủ năm 1954 là thắng lợi quân sự lớn nhất trong cuộc kháng chiến chống Pháp. Chiến thắng này buộc Pháp phải ký Hiệp định Giơ-nevơ, chấm dứt chiến tranh."
  }
];
