var inputs = document.forms['contact'].getElementsByTagName('input');
var run_onchange = false;

function valid() {
    var error = false;
    var reg_mail = /^[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;
    for (var i = 0; i < inputs.length; i++) {
        var value = inputs[i].value;
        var id = inputs[i].getAttribute('id');

        // Tao ptu luu thong tin loi
        var span = document.createElement('span');
        // Neu span da ton tai thi xoa
        var p = inputs[i].parentNode;
        if (p.lastChild.nodeName == 'SPAN') {
            p.removeChild(p.lastChild);
        }

        // ktra rong
        if (value == '') {
            span.innerHTML = 'Thong tin dc yeu cau';
        } else {
            // ktra cac truong hop khac
            if (id == 'email') {
                if (reg_mail.test(value) == false) {
                    span.innerHTML = 'Email khong hop le';
                }
                var email = value;
            }

            if (id == 'confirm_email' && value != email) {
                span.innerHTML = 'Email nhap lai chua dung';
            }

            // ktra sdt
            if (id == 'phone' && isNaN(value) == true) {
                span.innerHTML = 'So dien thoai phai la kieu so';
            }
        }

        if (span.innerHTML != '') {
            inputs[i].parentNode.appendChild(span);
            errors = true;
            run_onchange = true;
            inputs[i].style.border = '1px solid #0f0301';
            inputs[i].style.backgroud = '#0f0301';
        }
    }

    if (errors == false) {
        alert('Success!');
    }
    return !errors;
}

// chay ham ktra valid
var contact = document.getElementById('submit');
contact.onclick = function() {
    return valid();
}

// Kiểm tra lỗi với sự kiện onchange -> gọi lại hàm valid()
for (var i = 0; i < inputs.length; i++) {
    var id = inputs[i].getAttribute('id');
    inputs[i].onchange = function() {
        if (run_onchange == true) {
            this.style.border = '1px solid #0f0301';
            this.style.background = '#0f0301';
            valid();
        }
    }
}