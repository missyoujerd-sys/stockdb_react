# ระบบจัดการสต็อก (Stock Management System)

เว็บแอปพลิเคชันจัดการสต็อกสินค้า พัฒนาด้วย React.js และ Firebase 
รองรับการเข้ารหัสข้อมูล (Encryption) และการออกรายงาน Excel

## ความต้องการของระบบ (Prerequisites)
- Node.js (v14 ขึ้นไป)
- NPM

## การติดตั้ง (Installation)

1. เข้าไปที่โฟลเดอร์โปรเจค
   ```bash
   cd react_project
   ```

2. ติดตั้ง Dependencies
   ```bash
   npm install
   ```

## การตั้งค่า (Configuration)

### 1. Firebase Setup
1. สร้างโปรเจคใหม่ที่ [Firebase Console](https://console.firebase.google.com/)
2. เปิดใช้งาน **Authentication** (Email/Password)
3. เปิดใช้งาน **Realtime Database**
4. ไปที่ Project Settings > General เพื่อดูค่า Configuration

### 2. Environment Variables
สร้างไฟล์ `.env` ในโฟลเดอร์ราก (Root) ของโปรเจค และใส่ค่าตามนี้:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_DATABASE_URL=your_database_url
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_ENCRYPTION_KEY=your_secret_key_for_encryption
```
*เปลี่ยนค่า `your_...` เป็นค่าที่ได้จาก Firebase และตั้งรหัสลับสำหรับเข้ารหัสข้อมูล*

## การใช้งาน (Usage)

### รันในโหมดพัฒนา (Development)
```bash
npm start
```
เปิดบราวเซอร์ไปที่ [http://localhost:3000](http://localhost:3000)

### สร้างไฟล์สำหรับ Production (Build)
```bash
npm run build
```

## ฟีเจอร์หลัก (Features)
1. **ระบบสมาชิก**: เข้าสู่ระบบ / ลงทะเบียน
2. **Dashboard**: ดูภาพรวมสินค้า
3. **รับเข้า Stock**: บันทึกข้อมูลสินค้าเข้าระบบ (ข้อมูลถูกเข้ารหัส)
4. **รายการสินค้า**: ดูรายการสินค้าทั้งหมด ค้นหาตามวันที่ได้
5. **จำหน่ายออก**: ตัดสต็อกและดาวน์โหลดรายงาน Excel อัตโนมัติ

## โครงสร้างข้อมูล (Data Structure)
ข้อมูลใน Firebase จะถูกจัดเก็บใน node `stocks` โดยข้อมูลสำคัญจะถูกเข้ารหัสใน field `encryptedData`

```json
{
  "stocks": {
    "stock_id": {
      "encryptedData": "...", 
      "timestamp": 123456789,
      "userId": "..."
    }
  }
}
```
