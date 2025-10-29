  # 🚀 AI-Powered CV Screening & HR Support System

  <div align="center">

  [![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue.svg)](https://www.typescriptlang.org/)
  [![Firebase](https://img.shields.io/badge/Firebase-12.3.0-orange.svg)](https://firebase.google.com/)
  [![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF.svg)](https://vitejs.dev/)
  [![License](https://img.shields.io/badge/License-Private-red.svg)](LICENSE)

  *Hệ thống AI hỗ trợ HR sàng lọc CV thông minh với khả năng phân tích đa định dạng và gợi ý câu hỏi phỏng vấn*

  [🎯 Demo](#demo) • [📦 Cài đặt](#cài-đặt) • [🔧 Sử dụng](#sử-dụng) • [🤖 AI Features](#ai-features) • [📖 Tài liệu](#tài-liệu)

  </div>

  ---

  ## ✨ Tính năng nổi bật

  ### 🎯 **AI-Powered CV Analysis**
  - **Phân tích thông minh**: Sử dụng Google Gemini AI để đánh giá CV theo 8+ tiêu chí
  - **Đa định dạng**: Hỗ trợ PDF, Word, Excel và hình ảnh (OCR)
  - **Chấm điểm deterministic**: Kết quả nhất quán 100% với cùng input
  - **Trọng số tùy chỉnh**: Điều chỉnh tiêu chí đánh giá theo từng vị trí

  ### ⚖️ **Advanced Comparison Tools** 
  - **Side-by-side Compare**: So sánh chi tiết giữa ứng viên
  - **Strengths Analysis**: Phân tích điểm mạnh/yếu của từng ứng viên
  - **Ranking Dashboard**: Bảng xếp hạng trực quan với filters
  - **Export Comparison**: Xuất báo cáo so sánh dạng Excel/PDF

  ### ☁️ **Cross-Device Data Sync**
  - **Firebase Integration**: Đồng bộ dữ liệu qua Gmail account
  - **Multi-device Access**: Truy cập mọi lúc, mọi nơi
  - **Auto-sync**: Tự động đồng bộ khi có dữ liệu mới
  - **Local + Cloud Caching**: Hiệu suất tối ưu

  ### 📊 **Advanced Analytics**
  - **Dashboard trực quan**: Thống kê chi tiết với biểu đồ
  - **Lịch sử đầy đủ**: Theo dõi tất cả lần phân tích
  - **Export dữ liệu**: Xuất kết quả dạng Excel/PDF
  - **Performance Metrics**: Cache hit rate, sync status
  - **Real-time Performance**: Web Vitals monitoring với Vercel Speed Insights

  ---

  ## 🏗️ Sơ Đồ Tổng Thể Hệ Thống HR Support

  ### **🎯 LƯU ĐỒ TỔNG QUAN PHẦN MỀM HỖ TRỢ TUYỂN DỤNG NHÂN SỰ**

  ```
                    ┌─────────────────────────────────────────────────────────┐
                    │          HỆ THỐNG HỖ TRỢ TUYỂN DỤNG NHÂN SỰ            │
                    │              (HR SUPPORT SYSTEM)                       │
                    └─────────────────────┬───────────────────────────────────┘
                                        │
                    ┌───────────────────────────────────────────────────────────┐
                    │                 🔐 XÁC THỰC NGƯỜI DÙNG                   │
                    │              • Đăng nhập Gmail                          │
                    │              • Firebase Authentication                   │
                    │              • Quản lý phiên làm việc                   │
                    └─────────────────────┬─────────────────────────────────────┘
                                        │
          ┌─────────────────────────────┼─────────────────────────────┐
          │                             │                             │
          ▼                             ▼                             ▼
    ┌──────────────┐           ┌──────────────┐            ┌──────────────┐
    │   📋 NHẬP    │           │  ⚙️ CẤU HÌNH │            │  📁 TẢI LÊN  │
    │ JOB DESCRIP  │           │   HỆ THỐNG   │            │      CV      │
    │   TION (JD)  │           │              │            │              │
    └──────┬───────┘           └──────┬───────┘            └──────┬───────┘
           │                          │                           │
           │   ┌──────────────────────┼──────────────────────────┘
           │   │                      │
           ▼   ▼                      ▼
    ┌─────────────────┐    ┌─────────────────┐         ┌─────────────────┐
    │ 🎯 XỬ LÝ & PHÂN │    │ 📊 THIẾT LẬP    │         │ 🔍 TRÍCH XUẤT   │
    │   TÍCH YÊU CẦU  │    │   TRỌNG SỐ      │         │    VĂN BẢN     │
    │                 │    │                 │         │                 │
    │ • Phân tích JD  │    │ • 8 Tiêu chí   │         │ • PDF Parser    │
    │ • Tách kỹ năng  │    │ • Điều chỉnh %  │         │ • Word Reader   │
    │ • Yêu cầu kinh  │    │ • Hard Filter   │         │ • OCR (Images)  │
    │   nghiệm        │    │ • Soft Filter   │         │ • Excel Reader  │
    └─────────┬───────┘    └─────────┬───────┘         └─────────┬───────┘
              │                      │                           │
              └──────────────────────┼───────────────────────────┘
                                   │
                                   ▼
                    ┌─────────────────────────────────────┐
                    │       🤖 BỘ PHÂN TÍCH AI           │
                    │    (Google Gemini Integration)     │
                    │                                     │
                    │ ┌─────────────┐ ┌─────────────────┐ │
                    │ │ Phân tích   │ │ So khớp kỹ năng │ │
                    │ │ nội dung CV │ │ với yêu cầu JD  │ │
                    │ └─────────────┘ └─────────────────┘ │
                    │ ┌─────────────┐ ┌─────────────────┐ │
                    │ │ Đánh giá    │ │ Xác thực học    │ │
                    │ │ kinh nghiệm │ │ vấn & chứng chỉ │ │
                    │ └─────────────┘ └─────────────────┘ │
                    └─────────────────┬───────────────────┘
                                    │
                                    ▼
              ┌─────────────────────────────────────────────────────────┐
              │              📈 HỆ THỐNG CHẤM ĐIỂM                      │
              │           (Deterministic Scoring Engine)                │
              │                                                         │
              │  🎯 JD Fit (25%)     💼 Experience (20%)               │
              │  🏢 Projects (15%)   🎓 Education (10%)                │
              │  🏆 Recency (10%)    🛠️ Soft Skills (10%)             │
              │  💎 Quality (5%)     📜 Certificates (5%)             │
              │                                                         │
              │  ⚠️ ĐIỂM PHẠT: Gap Penalty + Format Penalty           │
              │                                                         │
              │  📊 CÔNG THỨC: Σ(trọng_số × điểm_thành_phần) - phạt   │
              └─────────────────────┬───────────────────────────────────┘
                                  │
                                  ▼
          ┌───────────────────────────────────────────────────────────────┐
          │                🏆 XẾP HẠNG & LỌC ỨNG VIÊN                    │
          │                                                               │
          │  ┌──────────────┐  ┌──────────────┐  ┌───────────────────┐   │
          │  │ Xếp hạng     │  │ Lọc theo     │  │ So sánh chi tiết  │   │
          │  │ theo điểm    │  │ tiêu chí     │  │ giữa ứng viên     │   │
          │  │              │  │              │  │                   │   │
          │  │ • Grade A    │  │ • Điểm số    │  │ • Điểm mạnh/yếu   │   │
          │  │ • Grade B    │  │ • Kinh nghiệm│  │ • Khuyến nghị     │   │
          │  │ • Grade C    │  │ • Kỹ năng    │  │ • Ranking visual  │   │
          │  └──────────────┘  └──────────────┘  └───────────────────┘   │
          └─────────────────────┬─────────────────────────────────────────┘
                              │
              ┌───────────────────────────────────────────────────┐
              │                                                   │
              ▼                                                   ▼
    ┌─────────────────┐                                ┌─────────────────┐
    │  ❓ TẠO CÂU HỎI │                                │  📊 BÁO CÁO &   │
    │   PHỎNG VẤN     │                                │    THỐNG KÊ     │
    │                 │                                │                 │
    │ • General Mode  │                                │ • Dashboard     │
    │ • Specific Mode │                                │ • Export Excel  │
    │ • Compare Mode  │                                │ • Export PDF    │
    │ • AI Generated  │                                │ • Lịch sử phân  │
    └─────────┬───────┘                                │   tích          │
              │                                        └─────────┬───────┘
              │                                                  │
              └──────────────────┬───────────────────────────────┘
                                │
                                ▼
                  ┌─────────────────────────────────────┐
                  │       💾 LƯU TRỮ & ĐỒNG BỘ         │
                  │                                     │
                  │ ┌─────────────┐ ┌─────────────────┐ │
                  │ │ Local Cache │ │ Firebase Cloud  │ │
                  │ │ (100 items) │ │ Sync            │ │
                  │ │ 7 days TTL  │ │ Cross-device    │ │
                  │ └─────────────┘ └─────────────────┘ │
                  │                                     │
                  │ 🔒 BẢO MẬT: Encryption + Access    │
                  │                Control              │
                  └─────────────────────────────────────┘

                  ┌─────────────────────────────────────┐
                  │     📈 GIÁM SÁT HIỆU SUẤT          │
                  │                                     │
                  │ • Vercel Analytics                  │
                  │ • Web Vitals (CLS, INP, FCP...)    │
                  │ • Performance Monitor              │
                  │ • Real-time Tracking               │
                  └─────────────────────────────────────┘

    ┌─────────────────────────────────────────────────────────────────────┐
    │                        🛠️ CÔNG NGHỆ SỬ DỤNG                        │
    │                                                                     │
    │  Frontend: React 19.1.1 + TypeScript + Tailwind CSS + Vite        │
    │  AI Engine: Google Gemini API (Multi-key Support)                  │
    │  OCR: Tesseract.js + PDF.js + Mammoth.js                          │
    │  Database: Firebase Firestore + Local Storage                      │
    │  Analytics: Vercel Analytics + Speed Insights                      │
    │  Authentication: Firebase Auth (Gmail Login)                        │
    └─────────────────────────────────────────────────────────────────────┘

                             ┌──────────────────┐
                             │   👤 NGƯỜI DÙNG  │
                             │                  │
                             │ • HR Recruiter   │
                             │ • Hiring Manager │
                             │ • Team Lead      │
                             └──────────────────┘
  ```

  ### **🔄 LUỒNG XỬ LÝ CHÍNH (Main Processing Flow)**

  ```
    Bước 1: Đăng nhập         Bước 2: Thiết lập        Bước 3: Upload CV
         │                         │                        │
         ▼                         ▼                        ▼
  ┌──────────────┐          ┌──────────────┐         ┌──────────────┐
  │ 🔐 Gmail     │ ────────▶│ ⚙️ Cấu hình  │────────▶│ 📁 Tải file │
  │ Authentication│          │ trọng số     │         │ CV (multi    │
  │              │          │ & tiêu chí   │         │ format)      │
  └──────────────┘          └──────────────┘         └──────┬───────┘
                                                           │
  Bước 4: Trích xuất       Bước 5: Phân tích AI      Bước 6: Chấm điểm
         ▲                         │                        │
         │                         ▼                        ▼
  ┌──────────────┐          ┌──────────────┐         ┌──────────────┐
  │ 🔍 Text      │ ◀────────│ 🤖 Google    │────────▶│ 📊 8 Tiêu    │
  │ Extraction   │          │ Gemini       │         │ chí + Phạt   │
  │ (OCR/PDF)    │          │ Analysis     │         │ → Điểm cuối  │
  └──────────────┘          └──────────────┘         └──────┬───────┘
                                                           │
  Bước 7: Kết quả          Bước 8: Tạo câu hỏi      Bước 9: Lưu trữ
         ▲                         │                        │
         │                         ▼                        ▼
  ┌──────────────┐          ┌──────────────┐         ┌──────────────┐
  │ 🏆 Ranking   │ ◀────────│ ❓ Interview │────────▶│ 💾 Cache +   │
  │ & Comparison │          │ Questions    │         │ Firebase     │
  │ Dashboard    │          │ Generation   │         │ Sync         │
  └──────────────┘          └──────────────┘         └──────────────┘
  ```

  ---

  ## 🛠️ Công nghệ sử dụng

  ### **Frontend**
  - **React 19.1.1** - UI Framework hiện đại
  - **TypeScript** - Type safety và developer experience
  - **Tailwind CSS** - Utility-first CSS framework
  - **Vite** - Lightning fast build tool

  ### **Backend & AI**
  - **Google Gemini AI** - Phân tích CV và tạo câu hỏi
  - **Firebase** - Authentication & Firestore database
  - **Tesseract.js** - OCR cho hình ảnh
  - **PDF.js** - Xử lý file PDF

  ### **Additional Libraries**
  - **React Router** - Navigation
  - **Recharts** - Data visualization  
  - **Canvas API** - Image processing
  - **Mammoth.js** - Word document parsing
  - **Vercel Analytics & Speed Insights** - Performance monitoring
  - **Web Vitals** - Core Web Vitals tracking

  ---

  ## 📦 Cài đặt

  ### **Yêu cầu hệ thống**
  - **Node.js**: >= 20.x < 21.x
  - **npm**: >= 10.9.0
  - **Modern Browser**: Chrome, Firefox, Safari, Edge

  ### **Clone & Setup**
  ```bash
  # Clone repository
  git clone https://github.com/your-username/hr-support-system.git
  cd hr-support-system

  # Cài đặt dependencies
  npm install

  # Tạo file environment
  cp .env.example .env.local
  ```

  ### **Environment Configuration**
  Tạo file `.env.local` với các biến môi trường:

  ```env
  # Firebase Configuration
  VITE_FIREBASE_API_KEY=your_firebase_api_key
  VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
  VITE_FIREBASE_PROJECT_ID=your_project_id
  VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
  VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
  VITE_FIREBASE_APP_ID=1:123456789:web:abcdef

  # Google Gemini AI
  VITE_GEMINI_API_KEY_1=your_gemini_key_1
  VITE_GEMINI_API_KEY_2=your_gemini_key_2
  VITE_GEMINI_API_KEY_3=your_gemini_key_3

  # App Configuration
  VITE_APP_NAME="HR Support System"
  VITE_APP_VERSION="1.0.0"
  ```

  ### **Khởi chạy**
  ```bash
  # Development server
  npm run dev

  # Build for production
  npm run build

  # Preview production build
  npm run preview
  ```

  Ứng dụng sẽ chạy tại: `http://localhost:3000`

  ---

  ## 🔧 Sử dụng

  ### **1. Đăng nhập & Setup**
  - Đăng nhập bằng Gmail để đồng bộ dữ liệu
  - Cấu hình trọng số đánh giá theo nhu cầu
  - Upload Job Description (JD)

  ### **2. Upload & Phân tích CV**
  ```
  📁 Supported Formats:
  ├── 📄 PDF Files (.pdf)
  ├── 📝 Word Documents (.doc, .docx)  
  ├── 📊 Excel Files (.xlsx, .xls)
  └── 🖼️ Images (.jpg, .png) - OCR enabled
  ```

  ### **3. Đánh giá & Sàng lọc**
  - **Real-time Analysis**: Kết quả tức thì với AI
  - **Scoring System**: 8 tiêu chí với trọng số tùy chỉnh
  - **Filtering**: Lọc theo điểm số, kinh nghiệm, kỹ năng
  - **Comparison**: So sánh chi tiết giữa ứng viên

  ### **4. So sánh & Phân tích**
  - So sánh chi tiết giữa các ứng viên
  - Phân tích điểm mạnh/yếu từng người
  - Dashboard xếp hạng trực quan

  ### **5. Export & Báo cáo**
  - Export kết quả dạng Excel/PDF
  - Lưu lịch sử phân tích
  - Đồng bộ với team qua Firebase

  ---

  ## 🤖 AI Features

  ### **Hệ Thống Thuật Toán AI Chấm Điểm Deterministic**
  
  #### **1. Công Thức Chấm Điểm Tổng Thể**
  ```
  Điểm Cuối Cùng = Σ(trọng_số_i × điểm_thành_phần_i) - điểm_phạt
  Độ Tin Cậy = min(độ_bao_phủ, chất_lượng, tín_hiệu_liên_quan)
  ```

  #### **2. Các Tiêu Chí Chấm Điểm Chính (8 Tiêu Chí)**
  
  **🎯 Độ Phù Hợp JD (K) - 25%:**
  ```
  điểm_K = số_kỹ_năng_trùng_khớp / max(1, tổng_kỹ_năng_yêu_cầu)
  ```
  
  **💼 Kinh Nghiệm Làm Việc (E) - 20%:**
  ```
  năm_yêu_cầu = trích_xuất_yêu_cầu_năm(JD)
  nếu năm_yêu_cầu:
      điểm_E = min(năm_kinh_nghiệm / năm_yêu_cầu, 1)
  ngược_lại:
      điểm_E = min(năm_kinh_nghiệm / 5, 1)
  ```
  
  **� Dự Án & Portfolio (P) - 15%:**
  ```
  có_link_hợp_lệ = kiểm_tra_https(links)
  có_repo = kiểm_tra_github_gitlab(links)  
  có_KPI = phát_hiện_số_liệu_thành_tích(CV)
  
  điểm_P = min(1, 0.4×có_link_hợp_lệ + 0.3×có_repo + 0.3×có_KPI)
  ```
  
  **🎓 Học Vấn & Trường (U) - 10%:**
  ```
  hệ_số_trường = đánh_giá_uy_tín_trường(danh_sách_học_vấn)
  điểm_cơ_bản = phân_tích_chuyên_ngành(học_vấn, JD)
  
  điểm_U = min(1.2, điểm_cơ_bản × (0.7 + 0.5×hệ_số_trường))
  ```
  
  **🏆 Mức Độ Gần Đây (R) - 10%:**
  ```
  nếu đang_làm_việc: điểm_R = 1
  ngược_lại:
      tháng_nghỉ = tính_tháng_từ_công_việc_cuối
      nếu tháng_nghỉ < 6: điểm_R = 1
      nếu tháng_nghỉ < 12: điểm_R = 0.8
      nếu tháng_nghỉ < 24: điểm_R = 0.5
      ngược_lại: điểm_R = 0.2
  ```
  
  **🛠️ Kỹ Năng Mềm (S) - 10%:**
  ```
  từ_khóa_mềm_JD = trích_xuất_kỹ_năng_mềm(JD)
  từ_khóa_mềm_CV = trích_xuất_kỹ_năng_mềm(CV)
  
  nếu từ_khóa_mềm_JD > 0:
      điểm_S = số_trùng_khớp / từ_khóa_mềm_JD
  ngược_lại:
      điểm_S = min(từ_khóa_mềm_CV / 8, 1)
  ```
  
  **💎 Chất Lượng CV (Q) - 5%:**
  ```
  điểm_Q = 0.8  # mặc định
  nếu mức_nhiễu_OCR > 0.6: điểm_Q = 0.4
  nếu định_dạng_không_nhất_quán: điểm_Q = min(điểm_Q, 0.6)
  
  điểm_Q = max(0.2, min(1, điểm_Q))
  ```
  
  **📈 Chứng Chỉ & Giá Trị (V) - 5%:**
  ```
  nếu không_có_chứng_chỉ: điểm_V = 0.2
  nếu có_chứng_chỉ_liên_quan(AWS, Azure, PMP, etc.): điểm_V = 1
  nếu chứng_chỉ_hết_hạn: điểm_V = 0.5
  ngược_lại: điểm_V = 0.2
  ```

  #### **3. Hệ Thống Điểm Phạt**
  
  **🚫 Phạt Sao Chép (G) - λ_G = 0.15:**
  ```
  tỷ_lệ_trùng_lặp = tính_độ_trùng_n_gram(JD, CV)
  
  nếu tỷ_lệ_trùng_lặp >= 0.85: phạt_G = 1
  nếu tỷ_lệ_trùng_lặp >= 0.70: phạt_G = 0.5
  ngược_lại: phạt_G = 0
  ```
  
  **❌ Phạt Nghi Ngờ (F) - λ_F = 0.10:**
  ```
  phạt_F = 0
  
  # Trùng lặp vai trò
  nếu cùng_chức_danh >= 3_lần: phạt_F += 0.4
  
  # Chứng chỉ thiếu thông tin
  nếu chứng_chỉ_không_có_issuer: phạt_F += 0.3
  
  # Senior với kinh nghiệm ít
  nếu chức_danh_senior AND kinh_nghiệm < 3_năm: phạt_F += 0.3
  
  phạt_F = min(1, phạt_F)
  ```

  #### **4. Công Thức Độ Tin Cậy**
  ```
  độ_bao_phủ = số_trường_đã_điền / 4  # kỹ năng, vai trò, học vấn, chứng chỉ/dự án
  
  độ_tin_cậy = min(
      độ_bao_phủ,
      điểm_Q,  # chất lượng CV
      1 nếu (có_link_hợp_lệ OR có_KPI) ngược_lại 0.6
  )
  ```

  #### **5. Trọng Số Mặc Định**
  ```typescript
  trọng_số_mặc_định = {
      K: 0.25,  // Độ phù hợp JD (25%)
      E: 0.20,  // Kinh nghiệm (20%)  
      P: 0.15,  // Dự án/Portfolio (15%)
      U: 0.10,  // Học vấn/Trường (10%)
      R: 0.10,  // Mức độ gần đây (10%)
      S: 0.10,  // Kỹ năng mềm (10%)
      Q: 0.05,  // Chất lượng CV (5%)
      V: 0.05   // Chứng chỉ/Giá trị (5%)
  }
  ```

  ### **6. Thuật Toán JD-CV Matching Engine**
  
  #### **Công Thức Tổng Thể:**
  ```
  điểm_match = Σ(trọng_số_i × điểm_thành_phần_i) + điều_chỉnh
  
  điều_chỉnh = recency_boost - seniority_penalty
  ```
  
  #### **Các Thành Phần Chấm Điểm:**
  
  **📅 Kinh Nghiệm (30%):**
  ```
  năm_yêu_cầu = phát_hiện_năm(JD)
  năm_có = phát_hiện_năm(CV)
  
  nếu năm_yêu_cầu:
      điểm = min(100, (năm_có / năm_yêu_cầu) × 100)
  ngược_lại:
      điểm = min(100, năm_có × 8)
      
  # Điều chỉnh gần đây
  recency_boost = 0-10 (dựa trên domain match trong 8 dòng đầu CV)
  seniority_penalty = 0-20 (chênh lệch cấp độ senior)
  ```
  
  **🛠️ Kỹ Năng (30%):**
  ```
  kỹ_năng_bắt_buộc = trích_xuất_must_have(JD)
  kỹ_năng_ưu_tiên = trích_xuất_nice_to_have(JD)
  kỹ_năng_CV = trích_xuất_kỹ_năng(CV)
  
  điểm_must = số_trùng_must / tổng_must
  điểm_nice = số_trùng_nice / tổng_nice
  
  điểm_kỹ_năng = (điểm_must × 0.7 + điểm_nice × 0.3) × 100
  
  # Áp dụng coverage gating
  coverage = số_nhóm_kỹ_năng_matched / số_nhóm_yêu_cầu
  điểm_cuối = điểm_kỹ_năng × coverage
  ```
  
  **🎓 Học Vấn (15%):**
  ```
  thứ_tự_bằng = ['highschool', 'associate', 'bachelor', 'master', 'phd']
  
  bằng_yêu_cầu = phát_hiện_bằng(JD)
  bằng_có = phát_hiện_bằng(CV)
  
  nếu bằng_có == bằng_yêu_cầu: điểm = 100
  nếu bằng_có > bằng_yêu_cầu: điểm = 100
  ngược_lại: điểm = max(0, 100 - (chênh_lệch × 40))
  ```
  
  **🌐 Ngôn Ngữ (15%):**
  ```
  ngôn_ngữ_yêu_cầu = ['english', 'japanese', 'korean', ...]
  
  điểm_cơ_bản = 0
  cho mỗi ngôn_ngữ trong yêu_cầu:
      nếu có_trong_CV: điểm_cơ_bản += 100/số_ngôn_ngữ_yêu_cầu
      
  # Điều chỉnh theo trình độ
  mẫu_trình_độ = [(ielts|toeic)_số, native, advanced, intermediate, basic]
  nếu tìm_thấy_mẫu: điểm_cơ_bản += 10
  ```
  
  **📜 Chứng Chỉ (10%):**
  ```
  chứng_chỉ_quan_trọng = ['aws', 'azure', 'gcp', 'pmp', 'scrum', ...]
  
  chứng_chỉ_yêu_cầu = lọc_từ_JD(chứng_chỉ_quan_trọng)
  chứng_chỉ_có = lọc_từ_CV(chứng_chỉ_quan_trọng)
  
  điểm = (số_trùng / số_yêu_cầu) × 100
  ```

  #### **Quy Tắc Loại Bỏ:**
  ```
  # Mandatory Fail: Thiếu kỹ năng bắt buộc
  nếu kỹ_năng_must_miss > 0:
      trạng_thái = 'REJECT'
      điểm_match = 0
  ```

  #### **Phân Loại Level:**
  ```
  nếu trạng_thái == 'REJECT': level = 'Rejected'
  nếu điểm >= 85: level = 'Expert'
  nếu điểm >= 70: level = 'Advanced'
  nếu điểm >= 50: level = 'Intermediate'
  nếu điểm >= 30: level = 'Beginner'
  ngược_lại: level = 'Unqualified'
  ```

  ### **7. Thuật Toán Tạo Câu Hỏi Phỏng Vấn AI**
  
  #### **3 Chế Độ Tạo Câu Hỏi:**
  
  **🌐 General Mode:**
  ```
  input: {
      vị_trí, tổng_ứng_viên, ngành_nghề,
      điểm_yếu_phổ_biến[], kỹ_năng_thiếu[]
  }
  
  prompt = xây_dựng_prompt_chung(
      "Tạo 4-5 nhóm câu hỏi dựa trên điểm yếu thực tế: " +
      điểm_yếu_phổ_biến + kỹ_năng_thiếu
  )
  ```
  
  **👤 Specific Mode:**
  ```
  input: {
      thông_tin_ứng_viên_cụ_thể,
      điểm_mạnh[], điểm_yếu[],
      lĩnh_vực_mạnh[], lĩnh_vực_yếu[]
  }
  
  prompt = xây_dựng_prompt_cá_nhân(
      "Tạo câu hỏi riêng biệt để:" +
      "- Xác nhận điểm mạnh: " + điểm_mạnh +
      "- Thách thức điểm yếu: " + điểm_yếu
  )
  ```
  
  **⚖️ Comparative Mode:**
  ```
  input: {
      danh_sách_ứng_viên_top[],
      so_sánh_điểm_mạnh_yếu[]
  }
  
  prompt = xây_dựng_prompt_so_sánh(
      "Tạo câu hỏi để phân biệt và lựa chọn giữa:" +
      ứng_viên_profiles
  )
  ```

  #### **Schema Trả Về:**
  ```typescript
  interface QuestionSet {
      category: string;      // Tên danh mục
      icon: string;         // Font Awesome class
      color: string;        // Tailwind color
      questions: string[];  // 4-6 câu hỏi cụ thể
  }
  ```

  ### **8. Thuật Toán OCR & Xử Lý Văn Bản Thông Minh**
  
  #### **Pipeline Xử Lý:**
  ```
  file_input → format_detection → content_extraction → enhancement → output
  ```
  
  #### **Chiến Lược OCR Đa Tầng:**
  ```
  # Bước 1: Kiểm tra text layer
  nếu PDF:
      text_layer = trích_xuất_text_layer()
      nếu độ_dài(text_layer) >= 200: return text_layer
      
  # Bước 2: OCR với enhancement
  canvas = tạo_canvas(scale=1.5)
  enhanced_image = áp_dụng_enhancement(canvas)
  
  # Bước 3: Multi-attempt OCR
  kết_quả_tốt_nhất = ""
  độ_tin_cậy_cao_nhất = 0
  
  cho từng cấu_hình in [cấu_hình_tối_ưu, cấu_hình_dự_phòng]:
      kết_quả = tesseract.recognize(enhanced_image, {
          lang: 'eng+vie',
          psm: cấu_hình.page_segmentation_mode,
          oem: '2'  # LSTM engine
      })
      
      nếu kết_quả.confidence > độ_tin_cậy_cao_nhất:
          kết_quả_tốt_nhất = kết_quả.text
          độ_tin_cậy_cao_nhất = kết_quả.confidence
  ```
  
  #### **Thuật Toán Sửa Lỗi OCR:**
  ```
  # Common OCR corrections
  sửa_lỗi_map = {
      /([a-zA-Z])0([a-zA-Z])/g: '$1o$2',    # 0 -> o
      /([a-zA-Z])1([a-zA-Z])/g: '$1l$2',    # 1 -> l  
      /([a-zA-Z])5([a-zA-Z])/g: '$1s$2',    # 5 -> s
      /[Mm]anag(?:e|3)r/g: 'Manager',       # Manager
      /[Dd]ev(?:e|3)l(?:o|0)p(?:e|3)r/g: 'Developer',  # Developer
      /[Kk]ỹ\s*sư/g: 'Kỹ sư',             # Kỹ sư
  }
  
  cho từng [pattern, replacement] in sửa_lỗi_map:
      text = text.replace(pattern, replacement)
  ```

  #### **Thuật Toán Phát Hiện Chức Danh:**
  ```
  # Pattern matching
  job_patterns = [
      /(?:vị trí|position)[:\s]*([^\n\r]{5,50})/i,
      /(?:tuyển dụng|hiring)[:\s]*([^\n\r]{5,50})/i,
      /(?:cần tuyển|looking for)[:\s]*([^\n\r]{5,50})/i
  ]
  
  # Keyword detection trong 10 dòng đầu
  job_keywords = ['developer', 'engineer', 'manager', 'kỹ sư', 'chuyên viên']
  
  cho từng dòng in first_10_lines:
      nếu có_job_keyword(dòng) AND 5 <= độ_dài <= 60:
          return dòng
  ```

  ### **9. Hệ Thống Cache & Tối Ưu Hiệu Suất**
  
  #### **Chiến Lược Cache Phân Tầng:**
  ```
  # Local Cache (100 entries, 7 days TTL)
  cache_key = hash(jdText + cvText + weights + config)
  
  nếu cache.has(cache_key) AND !expired(cache_key):
      return cache.get(cache_key)
      
  # Computation & Store
  kết_quả = compute_analysis(input)
  cache.set(cache_key, kết_quả, ttl=7*24*3600)
  
  # Firebase Cloud Sync (cross-device)
  nếu user_logged_in:
      firebase.sync(cache_key, kết_quả)
  ```
  
  #### **Performance Monitoring:**
  ```
  # Web Vitals Tracking
  metrics = {
      CLS: Cumulative_Layout_Shift,
      INP: Interaction_to_Next_Paint, 
      FCP: First_Contentful_Paint,
      LCP: Largest_Contentful_Paint,
      TTFB: Time_to_First_Byte
  }
  
  # Real-time Performance
  vercel_analytics.track(user_behavior + performance_correlation)
  speed_insights.monitor(core_web_vitals)
  ```

  ---

  ## 📁 Cấu trúc dự án

  ```
  hr-support-system/
  ├── 📁 components/          # React Components
  │   ├── 📁 layout/         # Layout components (Navbar, Sidebar, Footer)
  │   ├── 📁 modules/        # Feature modules (CVUpload, Analysis, etc.)
  │   ├── 📁 pages/          # Page components
  │   └── 📁 ui/             # Reusable UI components
  ├── 📁 services/           # Business Logic & APIs
  │   ├── 🤖 geminiService.ts      # AI integration
  │   ├── 🔥 dataSyncService.ts    # Firebase sync
  │   ├── 📊 analysisCache.ts     # Caching system
  │   ├── ❓ interviewQuestionService.ts  # Interview questions
  │   └── 🎯 deterministicScoring.ts     # Scoring engine
  ├── 📁 public/            # Static assets
  ├── 📁 types/             # TypeScript definitions
  └── 🔧 Config files       # Vite, Tailwind, TypeScript
  ```

  ---

  ## 🔧 Configuration

  ### **Trọng số mặc định**
  ```typescript
  const defaultWeights = {
    jdFit: 20,           // Phù hợp JD
    workExperience: 20,  // Kinh nghiệm làm việc  
    technicalSkills: 15, // Kỹ năng kỹ thuật
    education: 10,       // Học vấn
    softSkills: 10,      // Kỹ năng mềm
    achievements: 8,     // Thành tích
    languageSkills: 7,   // Ngoại ngữ
    personalInfo: 5,     // Thông tin cá nhân
    // Penalties
    gapPenalty: -5,      // Phạt khoảng trống
    formatPenalty: -3    // Phạt lỗi định dạng
  };
  ```

  ### **Caching Strategy**
  - **Local Storage**: Cache kết quả phân tích (100 entries max)
  - **Firebase**: Sync dữ liệu cross-device
  - **Hit Rate**: ~85-90% cho cùng JD và trọng số
  - **TTL**: 7 ngày cho cache entries

  ---

  ## 🚀 Deployment

  ### **Development**
  ```bash
  npm run dev
  ```

  ### **Production Build**
  ```bash
  npm run build
  npm run preview
  ```

  ### **Docker Support**
  ```dockerfile
  FROM node:20-alpine
  WORKDIR /app
  COPY package*.json ./
  RUN npm install
  COPY . .
  RUN npm run build
  EXPOSE 3000
  CMD ["npm", "run", "preview"]
  ```

  ---

  ## 📖 Tài liệu

  ### **API Documentation**
  - [🤖 AI Services](./docs/AI_SERVICES.md)
  - [🔥 Firebase Integration](./docs/FIREBASE.md)  
  - [📊 Analytics & Caching](./docs/ANALYTICS.md)

  ### **User Guides**
  - [📋 CV Analysis Guide](./docs/CV_ANALYSIS.md)
  - [❓ Interview Questions](./INTERVIEW_QUESTIONS_GUIDE.md)
  - [⚙️ Configuration Guide](./docs/CONFIGURATION.md)

  ### **Developer Docs**
  - [🏗️ Architecture](./docs/ARCHITECTURE.md)
  - [🧪 Testing Guide](./docs/TESTING.md)
  - [🔧 Contributing](./docs/CONTRIBUTING.md)

  ---

  ## 🐛 Troubleshooting

  ### **Common Issues**

  **❌ Firebase Connection Error**
  ```bash
  # Check environment variables
  echo $VITE_FIREBASE_API_KEY
  ```

  **❌ Gemini API Rate Limit**
  - Kiểm tra multiple API keys đã setup
  - Rate limit: 60 requests/minute per key

  **❌ OCR không hoạt động**
  - Kiểm tra image format (JPG, PNG)
  - File size < 10MB

  **❌ Build Errors**
  ```bash
  # Clear cache and reinstall
  rm -rf node_modules package-lock.json
  npm install
  ```

  ---

  ## 🤝 Contributing

  Chúng tôi hoan nghênh mọi đóng góp! 

  ### **Development Setup**
  1. Fork repository
  2. Create feature branch: `git checkout -b feature/amazing-feature`
  3. Commit changes: `git commit -m 'Add amazing feature'`
  4. Push to branch: `git push origin feature/amazing-feature`
  5. Open Pull Request

  ### **Code Standards**
  - ✅ TypeScript strict mode
  - ✅ ESLint + Prettier
  - ✅ Conventional commits
  - ✅ Component testing

  ---

  ## 📄 License

  **Private License** - Phần mềm độc quyền

  © 2025 HR Support System. All rights reserved.

  ---

  ## 🙏 Acknowledgments

  - [Google Gemini AI](https://ai.google.dev/) - AI capabilities
  - [Firebase](https://firebase.google.com/) - Backend infrastructure  
  - [Tesseract.js](https://tesseract.projectnaptha.com/) - OCR technology
  - [React Community](https://reactjs.org/) - Amazing ecosystem

  ---

  ## 📞 Support

  Gặp vấn đề? Chúng tôi sẵn sàng hỗ trợ!

  - 📧 **Email**: support@hr-system.com
  - 🐛 **Bug Reports**: [GitHub Issues](https://github.com/your-username/hr-support-system/issues)
  - 💬 **Discussions**: [GitHub Discussions](https://github.com/your-username/hr-support-system/discussions)
  - 📖 **Documentation**: [Wiki](https://github.com/your-username/hr-support-system/wiki)

  ---

  <div align="center">

  **⭐ Nếu project hữu ích, đừng quên star repo nhé!**

  Made with ❤️ by [TechFuture-Supporhr]

  </div>

