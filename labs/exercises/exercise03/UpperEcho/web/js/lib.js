window.onload = function () {
    document.form1.onsubmit = function () {
        if (this.text.value.length === 0) {
			// 改用 document.getElementById()....
            alert('請填寫欄位');
            return false;
        }
    };
};