# 🧮 JavaScript Calculator

ماشین‌حساب ساده و کاربردی ساخته‌شده با HTML, CSS و JavaScript

## ✨ امکانات:
- عملیات ریاضی پایه: جمع، تفریق، ضرب، تقسیم
- پشتیبانی از اعشار (decimal)
- مدیریت دقیق دکمه‌های ماشین‌حساب (ارقام، عملگرها، نقطه)
- بازنشانی کامل با دکمه "AC"
- طراحی تعاملی و واکنش‌گرا برای موبایل و دسکتاپ

## 💻 تکنولوژی‌های استفاده‌شده:
- HTML5
- CSS3
- JavaScript (Vanilla)

## 🧠 منطق پروژه:
- استفاده از یک آبجکت به نام `calculate` برای مدیریت عملیات ریاضی
- ذخیره‌ی `firstValue`، `operatorValue` و `waitForNextValue` برای کنترل مراحل محاسبه
- نمایش اعداد در یک `h1` به‌صورت زنده با تابع `sendValueToDisplay`
- بررسی وجود نقطه با تابع `decimal()`
- عملیات نهایی با تابع `operate(operator)` و به‌روزرسانی مقدار `firstValue`

## 🖱️ تجربه کاربری:
- دکمه‌ها به‌صورت داینامیک بررسی می‌شن (عددی، عملگر، اعشار)
- با استفاده از `classList` مشخص می‌شه هر دکمه چه کاری انجام می‌ده

______________________________________
# 🧮 JavaScript Calculator

A simple, interactive calculator built using HTML, CSS, and vanilla JavaScript.

## ✨ Features:
- Basic math operations: addition, subtraction, multiplication, division
- Decimal number support
- Live number display and input
- Clear all functionality (AC button)
- Fully responsive design for mobile and desktop

## 💻 Technologies Used:
- HTML5
- CSS3
- JavaScript (Vanilla)

## 🧠 How It Works:
- A `calculate` object handles math operations based on the operator key
- Three main states manage logic:  
  - `firstValue`: stores the first number
  - `operatorValue`: stores the selected operator
  - `waitForNextValue`: tracks whether to reset display or append numbers
- Numbers are updated using `sendValueToDisplay()`
- The `decimal()` function ensures only one decimal point per number
- `operate(operator)` handles operator logic and updates the result on screen

## 🖱️ User Interaction:
- All buttons (numbers, operators, decimal) are managed using `classList` to determine behavior
- Clean and intuitive UI for smooth user experience