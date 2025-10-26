# Tính năng Gợi ý Câu hỏi Phỏng vấn AI

## Tổng quan
Tính năng mới này giúp HR tạo ra các câu hỏi phỏng vấn thông minh và cụ thể dựa trên:
- Job Description (JD) và vị trí tuyển dụng
- Dữ liệu thực tế từ lần lọc CV (điểm mạnh/yếu của ứng viên, kỹ năng thiếu)
- Phân tích chi tiết các ứng viên đã được đánh giá

## Các tính năng chính

### 1. Gợi ý câu hỏi từ Dashboard
- **Vị trí**: Nút "Gợi ý câu hỏi PV" trong Dashboard
- **Chức năng**: Mở modal InterviewQuestionGenerator với 3 chế độ:
  - **Câu hỏi chung**: Dựa trên JD và xu hướng chung của các ứng viên
  - **Câu hỏi cụ thể**: Dành cho 1 ứng viên cụ thể (dựa trên điểm mạnh/yếu)
  - **So sánh ứng viên**: Câu hỏi để phân biệt giữa nhiều ứng viên được chọn

### 2. Chatbot AI tích hợp
- **Vị trí**: ChatbotPanel
- **Tính năng mới**: 
  - Thêm quick buttons cho câu hỏi phỏng vấn
  - Hỗ trợ các query về câu hỏi phỏng vấn trong chat
  - Tự động đề xuất câu hỏi dựa trên ngành nghề chính

## Cách sử dụng

### Từ Dashboard:
1. Sau khi hoàn tất phân tích CV, vào Dashboard
2. Click nút "Gợi ý câu hỏi PV" (màu tím)
3. Chọn loại câu hỏi:
   - **Chung**: Không cần chọn ứng viên cụ thể
   - **Cụ thể**: Chọn 1 ứng viên từ dropdown
   - **So sánh**: Đã chọn ứng viên bằng checkbox trong danh sách
4. Click "Tạo câu hỏi phỏng vấn"
5. AI sẽ tạo 4-5 nhóm câu hỏi với 4-6 câu mỗi nhóm
6. Copy từng câu hoặc copy tất cả

### Từ Chatbot:
1. Mở Chatbot trong Dashboard
2. Sử dụng quick buttons:
   - "Câu hỏi chung": Câu hỏi phỏng vấn tổng quát
   - "Kỹ thuật": Câu hỏi đánh giá kỹ năng chuyên môn
   - "Phân biệt": Câu hỏi để so sánh ứng viên
3. Hoặc nhập query tự do như:
   - "Gợi ý 5 câu hỏi phỏng vấn cho vị trí Developer"
   - "Câu hỏi nào để đánh giá kỹ năng React của ứng viên?"
   - "Tôi nên hỏi gì để phân biệt senior và junior?"

## Ví dụ câu hỏi được tạo

### Câu hỏi chung cho Developer:
1. **Kỹ thuật cốt lõi**:
   - Bạn approach một dự án mới với yêu cầu không rõ ràng ra sao?
   - Mô tả process debug một bug phức tạp bạn đã giải quyết.
   - Kinh nghiệm với Git và collaboration trong team?

2. **Điểm yếu phổ biến** (dựa trên dữ liệu lọc CV):
   - Nhiều ứng viên yếu về "Kinh nghiệm thực tế". Bạn có dự án nào chứng minh điều này?
   - CV thiếu thông tin về testing. Bạn test code như thế nào?

3. **Tình huống thực tế**:
   - Deadline sát, requirements thay đổi. Bạn ưu tiên như thế nào?
   - Conflict trong team về technical approach. Bạn giải quyết ra sao?

### Câu hỏi cụ thể cho ứng viên:
Nếu chọn ứng viên A có điểm mạnh "ReactJS, TypeScript" nhưng yếu "Testing, Documentation":

1. **Xác nhận điểm mạnh**:
   - Bạn đã build ứng dụng React nào phức tạp nhất? Challenges là gì?
   - TypeScript giúp project của bạn như thế nào? Ví dụ cụ thể?

2. **Thách thức điểm yếu**:
   - Bạn viết test cho React components ra sao?
   - Cách bạn document code và APIs?

## Công nghệ

### Backend (Services):
- `interviewQuestionService.ts`: Service chính tạo câu hỏi
- Tích hợp với Gemini AI API
- Schema validation cho câu trả lời từ AI
- Fallback questions nếu AI không khả dụng

### Frontend (Components):
- `InterviewQuestionGenerator.tsx`: Modal component chính
- Tích hợp vào `DashboardPage.tsx`
- Cập nhật `ChatbotPanel.tsx` với quick buttons
- Responsive design, copy functionality

### AI Prompts:
- **General Questions**: Dựa trên JD, ngành nghề, điểm yếu phổ biến
- **Specific Questions**: Phân tích chi tiết 1 ứng viên cụ thể
- **Comparative Questions**: So sánh profile của nhiều ứng viên

## Lợi ích

1. **Tiết kiệm thời gian**: Không cần brainstorm câu hỏi từ đầu
2. **Câu hỏi chất lượng**: Dựa trên dữ liệu thực tế, không generic
3. **Cá nhân hóa**: Câu hỏi riêng cho từng ứng viên/vị trí
4. **Toàn diện**: Bao gồm kỹ thuật, soft skills, tình huống
5. **Dễ sử dụng**: UI thân thiện, copy nhanh chóng

## Ghi chú kỹ thuật

- Sử dụng chung AI client với geminiService
- Fallback mechanism nếu AI fails
- Cache không áp dụng (câu hỏi cần fresh mỗi lần)
- JSON schema validation cho output
- Temperature 0.3 để có đa dạng nhưng vẫn focused

## Mở rộng tương lai

1. **Templates**: Lưu templates câu hỏi theo ngành nghề
2. **Rating**: Đánh giá chất lượng câu hỏi từ HR
3. **Integration**: Tích hợp với calendar để schedule interviews
4. **Analytics**: Theo dõi hiệu quả của các loại câu hỏi
5. **Multi-language**: Hỗ trợ tiếng Anh cho doanh nghiệp quốc tế