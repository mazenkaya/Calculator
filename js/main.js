// إضافة رقم أو رمز إلى شاشة الآلة الحاسبة
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

// حذف محتوى الشاشة
function clearDisplay() {
    document.getElementById("display").value = "";
}

// حساب النتيجة
function calculateResult() {
    try {
        const result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch {
        document.getElementById("display").value = "Error";
    }
}

// حذف آخر قيمة في الشاشة
function deleteLastChar() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1); // حذف آخر حرف
}
