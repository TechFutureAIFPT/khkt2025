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

### 🤖 **Interview Question Generator** 
- **3 chế độ tạo câu hỏi**:
  - 🌟 **General**: Câu hỏi chung theo JD và ngành nghề
  - 🎯 **Specific**: Câu hỏi riêng cho từng ứng viên
  - ⚖️ **Comparative**: So sánh và phân biệt ứng viên
- **Chatbot AI**: Tư vấn câu hỏi phỏng vấn thông minh
- **Copy nhanh**: Sao chép từng câu hoặc toàn bộ

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

### **4. Tạo câu hỏi phỏng vấn**
- Chọn chế độ phù hợp (General/Specific/Comparative)
- AI tạo 4-5 nhóm câu hỏi chuyên nghiệp  
- Copy và sử dụng cho buổi phỏng vấn

### **5. Export & Báo cáo**
- Export kết quả dạng Excel/PDF
- Lưu lịch sử phân tích
- Đồng bộ với team qua Firebase

---

## 🤖 AI Features

### **Deterministic Scoring Engine**
Hệ thống chấm điểm nhất quán với công thức:

```
Final Score = Σ(weight_i × subscore_i) - penalties
Confidence = min(coverage, quality, relevance_signals)
```

**8 Tiêu chí chính:**
- 🎯 **Job Fit (K)**: Mức độ phù hợp với JD
- 💼 **Experience (E)**: Kinh nghiệm làm việc  
- 🎓 **Education (P)**: Học vấn và chứng chỉ
- 🏢 **University (U)**: Uy tín trường học
- 🏆 **Relevance (R)**: Kinh nghiệm liên quan
- 🛠️ **Skills (S)**: Kỹ năng cứng và mềm
- 💎 **Quality (Q)**: Chất lượng CV
- 📈 **Value (V)**: Giá trị gia tăng

**Penalties:**
- 🚫 **Gap (G)**: Khoảng trống trong CV
- ❌ **Format (F)**: Lỗi định dạng

### **AI Interview Questions**
- **Context-aware**: Dựa trên JD và dữ liệu ứng viên thực tế
- **Multi-mode**: General, Specific, Comparative
- **Professional**: Câu hỏi chất lượng cao, không generic
- **Fallback**: Backup questions nếu AI không khả dụng

### **Performance Monitoring**
- **Vercel Speed Insights**: Real-time performance tracking
- **Web Vitals**: Core metrics (CLS, INP, FCP, LCP, TTFB)
- **Development Tools**: Visual performance monitor trong dev mode
- **Analytics Integration**: User behavior và performance correlation

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

