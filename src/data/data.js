// @ts-nocheck
export const CONFIG = {
  startYear: 2022,
  birthYear: 1993,
  socials: {
    github: "https://github.com/vietkhoa-dev/vietkhoa-dev.github.io",
    facebook: "https://www.facebook.com/khoa.nguyen93312",
    instagram: "https://www.instagram.com/khoa.nguyen93312"
  }
};

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1;
const baseYears = currentYear - CONFIG.startYear;
const expDisplay = currentMonth >= 6 ? `${baseYears}.5` : `${baseYears}`;

export const profile = {
  userName: "nvkdevs",
  kernel: `v${currentYear}.${currentMonth.toString().padStart(2, '0')}.${today.getDate().toString().padStart(2, '0')}`,
  socials: CONFIG.socials,

  vi: {
    name: "Nguyễn Việt Khoa",
    role: "Kỹ sư hệ thống | Lập trình viên",
    location: "Osaka, Nhật Bản 🇯🇵",
    hometown: "Vĩnh Long, Việt Nam",
    uptime: `${expDisplay} Năm`,
    languages: { vi: "Tiếng Việt (Bản ngữ)", ja: "Tiếng Nhật N2", en: "Tiếng Anh (Kỹ thuật)" },
    skills: {
      backend: ["JavaScript", "PHP", "HTML/CSS"],
      database: ["MySQL", "MariaDB", "Oracle SQL"],
      system: ["Linux (CentOS, Ubuntu)", "AWS"],
      docs: ["Thiết kế cơ bản", "Sơ đồ DB"],
      tools: ["Git", "Docker", "VS Code"]
    },
    education: [
      { year: "2022", school: "Trường Chuyên môn Máy tính ECC", status: "Tốt nghiệp" },
      { year: "2019", school: "Trường Chuyên môn Ngoại ngữ Quốc tế ECC", status: "Tốt nghiệp" },
      { year: "2018", school: "Học viện Ngôn ngữ Shin-ai", status: "Tốt nghiệp" },
      { year: "2015", school: "Học viện Hàng không Việt Nam", status: "Tốt nghiệp" },
      { year: "2011", school: "THPT Phan Văn Trị", status: "Tốt nghiệp" },
    ],
    eduText: {
      loading: "Đang khởi tạo môi trường Linux...",
      rendering: "Đang nạp dữ liệu:",
      active: "Hệ thống hoạt động: OK"
    },
    career: [
      { id: 1, status: "HIỆN TẠI", company: "FPT Software Japan", role: "Hiện đại hóa hệ thống (Modernization System)", period: "2024 - Nay" },
      { id: 2, status: "LỊCH SỬ", company: "Uluca Co., Ltd.", role: "Phát triển Web", period: "2021 - 2024" }
    ],
    sqlUi: {
      title: "Kết quả truy vấn: 2 bản ghi",
      status: "Trạng thái", company: "Công ty", role: "Công việc chính", period: "Thời gian"
    }
  },

  ja: {
    name: "グエン ヴェット コア",
    role: "システムエンジニア | プログラマー",
    location: "日本、大阪府 🇯🇵",
    hometown: "ベトナム、ビンロン省",
    uptime: `${expDisplay} 年`,
    languages: { vi: "ベトナム語 (母国語)", ja: "日本語 N2 (ビジネス)", en: "英語 (技術ドキュメント)" },
    skills: {
      backend: ["JavaScript", "PHP", "HTML/CSS"],
      database: ["MySQL", "MariaDB", "Oracle SQL"],
      system: ["Linux (CentOS, Ubuntu)", "AWS"],
      docs: ["基本設計 (Basic Design)", "DB設計 / ER図"],
      tools: ["Git", "Docker", "VS Code"]
    },
    education: [
      { year: "2022", school: "ECCコンピュータ専門学校", status: "卒業" },
      { year: "2019", school: "ECC国際外語専門学校", status: "卒業" },
      { year: "2018", school: "シンアイ語学専門学院", status: "卒業" },
      { year: "2015", school: "ベトナム航空学院", status: "卒業" },
      { year: "2011", school: "ファン・ヴァン・チー高校", status: "卒業" },
    ],
    eduText: {
      loading: "Linux環境を初期化中...",
      rendering: "レンダリング中:",
      active: "システム状態: 正常"
    },
    career: [
      { id: 1, status: "現在", company: "FPTソフトウェアジャパン株式会社", role: "システム・モダナイゼーション", period: "2024 - 現在" },
      { id: 2, status: "職歴", company: "株式会社Uluca", role: "Web開発", period: "2021 - 2024" }
    ],
    sqlUi: {
      title: "クエリ結果: 2件",
      status: "ステータス", company: "企業名", role: "主な業務", period: "期間"
    }
  },

  en: {
    name: "Viet Khoa Nguyen",
    role: "System Engineer | Programmer",
    location: "Osaka, Japan 🇯🇵",
    hometown: "Vinh Long, Vietnam",
    uptime: `${expDisplay} Years`,
    languages: { vi: "Vietnamese (Native)", ja: "Japanese N2", en: "English (Technical)" },
    skills: {
      backend: ["JavaScript", "PHP", "HTML/CSS"],
      database: ["MySQL", "MariaDB", "Oracle SQL"],
      system: ["Linux (CentOS, Ubuntu)", "AWS"],
      docs: ["Basic Design", "DB Schema"],
      tools: ["Git", "Docker", "VS Code"]
    },
    education: [
      { year: "2022", school: "ECC College of Computer and Multimedia", status: "Graduated" },
      { year: "2019", school: "ECC Kokusai College of Foreign Languages", status: "Graduated" },
      { year: "2018", school: "Shin-ai Institute of Languages", status: "Graduated" },
      { year: "2015", school: "Vietnam Aviation Academy", status: "Graduated" },
      { year: "2011", school: "Phan Van Tri High School", status: "Graduated" },
    ],
    eduText: {
      loading: "Initializing Linux environment...",
      rendering: "Rendering data:",
      active: "System active: OK"
    },
    career: [
      { id: 1, status: "CURRENT", company: "FPT Software Japan", role: "System Modernization", period: "2024 - Present" },
      { id: 2, status: "HISTORY", company: "Uluca Co., Ltd.", role: "Web Development", period: "2021 - 2024" }
    ],
    sqlUi: {
      title: "Query result: 2 records",
      status: "Status", company: "Company", role: "Main Role", period: "Period"
    }
  }
};

export const uiText = {
  vi: {
    sidebar: {
      status: "ACTIVE (RUNNING)",
      quote: "Logic là xương sống, sự ổn định là mục tiêu.",
      uptimeLog: "// Đang xác thực thời gian vận hành...",
      identityLog: "// Đang phân tích nhật ký định danh...",
      waitingMsg: "Đang chờ yêu cầu kết nối...",
      systemReady: "Hệ thống đã sẵn sàng.",
      unit: " Năm",
      labels: { status: "Trạng thái:", exp: "Kinh nghiệm:", home: "Quê quán:", kernel: "Kernel:" }
    },
    tabAbout: {
      codeComments: {
        personal: "1. Định nghĩa thông tin cá nhân",
        tech: "2. Định nghĩa bộ kỹ năng chuyên môn",
        method: "3. Hàm xuất thông tin hệ thống",
        spread: "Toán tử Spread (ES6)",
        message: "Xin chào! Tôi là"
      }
    }
  },
  ja: {
    sidebar: {
      status: "稼働中 (RUNNING)",
      quote: "ロジックはバックボーン、安定性は目標です。",
      uptimeLog: "// システム稼働時間を確認中...",
      identityLog: "// アイデンティティログを解析中...",
      waitingMsg: "接続リクエスト待機中...",
      systemReady: "システム接続準備完了。",
      unit: " 年",
      labels: { status: "ステータス:", exp: "経験年数:", home: "出身地:", kernel: "カーネル:" }
    },
    tabAbout: {
      codeComments: {
        personal: "1. 個人情報の定義",
        tech: "2. 技術スタックの定義",
        method: "3. システム情報出力関数",
        spread: "スプレッド演算子 (ES6)",
        message: "こんにちは！私は"
      }
    }
  },
  en: {
    sidebar: {
      status: "ACTIVE (RUNNING)",
      quote: "Logic is the backbone, stability is the goal.",
      uptimeLog: "// Verifying system uptime...",
      identityLog: "// Parsing identity logs...",
      waitingMsg: "Waiting for contact request...",
      systemReady: "System is ready for connection.",
      unit: " Years",
      labels: { status: "Status:", exp: "Experience:", home: "Hometown:", kernel: "Kernel:" }
    },
    tabAbout: {
      codeComments: {
        personal: "1. Define personal information",
        tech: "2. Define technical skill set",
        method: "3. System information output function",
        spread: "Spread Operator (ES6)",
        message: "Hello! I am"
      }
    }
  }
};