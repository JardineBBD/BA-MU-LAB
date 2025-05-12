// ข้อมูลคณะวิศวกรรมศาสตร์และห้องแลป
const departments = [
    {
        id: 1,
        name: 'วิศวกรรมโยธา',
        icon: '🏗️',
        labs: [
            { id: 'CE101', name: 'CE101', capacity: 30, location: 'อาคาร 1 ชั้น 2' },
            { id: 'CE102', name: 'CE102', capacity: 25, location: 'อาคาร 1 ชั้น 2' },
            { id: 'CE103', name: 'CE103', capacity: 40, location: 'อาคาร 1 ชั้น 3' },
            { id: 'CE104', name: 'CE104', capacity: 35, location: 'อาคาร 1 ชั้น 3' },
            { id: 'CE105', name: 'CE105', capacity: 30, location: 'อาคาร 1 ชั้น 4' },
        ]
    },
    {
        id: 2,
        name: 'วิศวกรรมอุตสาหการ',
        icon: '🏭',
        labs: [
            { id: 'IE101', name: 'IE101', capacity: 25, location: 'อาคาร 2 ชั้น 1' },
            { id: 'IE102', name: 'IE102', capacity: 30, location: 'อาคาร 2 ชั้น 1' },
            { id: 'IE103', name: 'IE103', capacity: 35, location: 'อาคาร 2 ชั้น 2' },
            { id: 'IE104', name: 'IE104', capacity: 25, location: 'อาคาร 2 ชั้น 2' },
            { id: 'IE105', name: 'IE105', capacity: 40, location: 'อาคาร 2 ชั้น 3' },
        ]
    },
    {
        id: 3,
        name: 'วิศวกรรมเคมี',
        icon: '🧪',
        labs: [
            { id: 'CHE101', name: 'CHE101', capacity: 20, location: 'อาคาร 3 ชั้น 1' },
            { id: 'CHE102', name: 'CHE102', capacity: 25, location: 'อาคาร 3 ชั้น 1' },
            { id: 'CHE103', name: 'CHE103', capacity: 30, location: 'อาคาร 3 ชั้น 2' },
            { id: 'CHE104', name: 'CHE104', capacity: 35, location: 'อาคาร 3 ชั้น 2' },
            { id: 'CHE105', name: 'CHE105', capacity: 20, location: 'อาคาร 3 ชั้น 3' },
        ]
    },
    {
        id: 4,
        name: 'วิศวกรรมชีวการแพทย์',
        icon: '🩺',
        labs: [
            { id: 'BME101', name: 'BME101', capacity: 20, location: 'อาคาร 4 ชั้น 1' },
            { id: 'BME102', name: 'BME102', capacity: 25, location: 'อาคาร 4 ชั้น 1' },
            { id: 'BME103', name: 'BME103', capacity: 30, location: 'อาคาร 4 ชั้น 2' },
            { id: 'BME104', name: 'BME104', capacity: 20, location: 'อาคาร 4 ชั้น 2' },
            { id: 'BME105', name: 'BME105', capacity: 25, location: 'อาคาร 4 ชั้น 3' },
        ]
    },
    {
        id: 5,
        name: 'วิศวกรรมเครื่องกล',
        icon: '⚙️',
        labs: [
            { id: 'ME101', name: 'ME101', capacity: 30, location: 'อาคาร 5 ชั้น 1' },
            { id: 'ME102', name: 'ME102', capacity: 35, location: 'อาคาร 5 ชั้น 1' },
            { id: 'ME103', name: 'ME103', capacity: 40, location: 'อาคาร 5 ชั้น 2' },
            { id: 'ME104', name: 'ME104', capacity: 30, location: 'อาคาร 5 ชั้น 2' },
            { id: 'ME105', name: 'ME105', capacity: 35, location: 'อาคาร 5 ชั้น 3' },
        ]
    },
    {
        id: 6,
        name: 'วิศวกรรมคอมพิวเตอร์',
        icon: '💻',
        labs: [
            { id: 'CO101', name: 'CO101', capacity: 40, location: 'อาคาร 6 ชั้น 1' },
            { id: 'CO102', name: 'CO102', capacity: 35, location: 'อาคาร 6 ชั้น 1' },
            { id: 'CO103', name: 'CO103', capacity: 30, location: 'อาคาร 6 ชั้น 2' },
            { id: 'CO104', name: 'CO104', capacity: 40, location: 'อาคาร 6 ชั้น 2' },
            { id: 'CO105', name: 'CO105', capacity: 35, location: 'อาคาร 6 ชั้น 3' },
        ]
    },
    {
        id: 7,
        name: 'วิศวกรรมไฟฟ้า',
        icon: '⚡',
        labs: [
            { id: 'EE101', name: 'EE101', capacity: 30, location: 'อาคาร 7 ชั้น 1' },
            { id: 'EE102', name: 'EE102', capacity: 25, location: 'อาคาร 7 ชั้น 1' },
            { id: 'EE103', name: 'EE103', capacity: 35, location: 'อาคาร 7 ชั้น 2' },
            { id: 'EE104', name: 'EE104', capacity: 40, location: 'อาคาร 7 ชั้น 2' },
            { id: 'EE105', name: 'EE105', capacity: 30, location: 'อาคาร 7 ชั้น 3' },
        ]
    },
];

let selectedDepartment = null;
let selectedLab = null;

// สลับระหว่างหน้า Login และ Register
function toggleRegisterPage(show) {
    if (show) {
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('registerPage').classList.remove('hidden');
    } else {
        document.getElementById('loginPage').classList.remove('hidden');
        document.getElementById('registerPage').classList.add('hidden');
    }
}

// เริ่มต้นแสดงรายการแผนก
function renderDepartments() {
    const departmentsGrid = document.getElementById('departmentsGrid');
    departmentsGrid.innerHTML = '';
    
    departments.forEach(dept => {
        const deptCard = document.createElement('div');
        deptCard.className = 'bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow department-card';
        deptCard.innerHTML = `
            <div class="flex items-center mb-4">
                <span class="text-4xl mr-4">${dept.icon}</span>
                <h3 class="text-xl font-bold">${dept.name}</h3>
            </div>
            <p class="text-gray-600">จำนวนห้องแลป: ${dept.labs.length} ห้อง</p>
        `;
        
        deptCard.addEventListener('click', () => selectDepartment(dept));
        departmentsGrid.appendChild(deptCard);
    });
}

// เลือกแผนก
function selectDepartment(dept) {
    selectedDepartment = dept;
    document.getElementById('departmentList').style.display = 'none';
    document.getElementById('labList').style.display = 'block';
    
    // แสดงชื่อแผนก
    document.getElementById('deptTitle').textContent = `${dept.icon} ${dept.name}`;
    
    // แสดงรายการห้องแลป
    renderLabs();
}

// แสดงรายการห้องแลป
function renderLabs() {
    const labsGrid = document.getElementById('labsGrid');
    labsGrid.innerHTML = '';
    
    selectedDepartment.labs.forEach(lab => {
        const labCard = document.createElement('div');
        labCard.className = 'bg-white rounded-lg shadow-md p-6';
        labCard.innerHTML = `
            <h3 class="text-xl font-bold mb-2">${lab.name}</h3>
            <div class="mb-4">
                <p class="text-gray-600">
                    <span class="font-semibold">ความจุ:</span> ${lab.capacity} คน
                </p>
                <p class="text-gray-600">
                    <span class="font-semibold">สถานที่:</span> ${lab.location}
                </p>
            </div>
            <button 
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded book-btn"
                data-lab-id="${lab.id}"
            >
                จองห้อง
            </button>
        `;
        
        labsGrid.appendChild(labCard);
    });
    
    // เพิ่ม event listener สำหรับปุ่มจองห้อง
    document.querySelectorAll('.book-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const labId = this.getAttribute('data-lab-id');
            const lab = selectedDepartment.labs.find(l => l.id === labId);
            openBookingModal(lab);
        });
    });
}

// เปิด modal จองห้อง
function openBookingModal(lab) {
    selectedLab = lab;
    document.getElementById('modalTitle').textContent = `จองห้อง ${lab.name}`;
    
    // กำหนดค่าเริ่มต้น
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    document.getElementById('bookingDate').min = formattedDate;
    document.getElementById('bookingDate').value = formattedDate;
    
    // แสดง modal
    document.getElementById('bookingModal').classList.add('show');
}

// ปิด modal จองห้อง
function closeBookingModal() {
    document.getElementById('bookingModal').classList.remove('show');
    selectedLab = null;
}

// ตรวจสอบการลงทะเบียน
function validateRegistration() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const studentId = document.getElementById('studentId').value;
    const faculty = document.getElementById('faculty').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (!firstName || !lastName || !studentId || !faculty || !email || !password || !confirmPassword) {
        alert('กรุณากรอกข้อมูลให้ครบทุกช่อง');
        return false;
    }
    
    if (password !== confirmPassword) {
        alert('รหัสผ่านไม่ตรงกัน กรุณาตรวจสอบอีกครั้ง');
        return false;
    }
    
    if (studentId.length !== 10 || isNaN(studentId)) {
        alert('รหัสนักศึกษาต้องเป็นตัวเลข 10 หลัก');
        return false;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
        alert('รูปแบบอีเมลไม่ถูกต้อง');
        return false;
    }
    
    return true;
}

// เมื่อหน้าเว็บโหลดเสร็จ
document.addEventListener('DOMContentLoaded', function() {
    // แสดงรายการแผนก
    renderDepartments();
    
    // กลับไปยังรายการแผนก
    document.getElementById('backToDeptBtn').addEventListener('click', function() {
        document.getElementById('departmentList').style.display = 'block';
        document.getElementById('labList').style.display = 'none';
        selectedDepartment = null;
    });
    
    // ล็อกอิน
    document.getElementById('loginBtn').addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (!username || !password) {
            alert('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน');
            return;
        }
        
        // สำหรับการสาธิต - ในระบบจริงควรตรวจสอบกับเซิร์ฟเวอร์
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('appMain').classList.remove('hidden');
        
        // สำหรับการสาธิต - แสดงรหัสนักศึกษา
        document.getElementById('studentIdDisplay').textContent = 'นักศึกษา: ' + (username.startsWith('64') ? username : '6412345678');
    });
    
    // ไปที่หน้าลงทะเบียน
    document.getElementById('goToRegisterBtn').addEventListener('click', function() {
        toggleRegisterPage(true);
    });
    
    // กลับไปยังหน้าล็อกอิน
    document.getElementById('backToLoginBtn').addEventListener('click', function() {
        toggleRegisterPage(false);
    });
    
    // ยืนยันการลงทะเบียน
    document.getElementById('confirmRegisterBtn').addEventListener('click', function() {
        if (validateRegistration()) {
            alert('ลงทะเบียนสำเร็จ กรุณาเข้าสู่ระบบ');
            toggleRegisterPage(false);
            
            // กำหนดค่าเริ่มต้นสำหรับการล็อกอิน (สำหรับการสาธิต)
            const studentId = document.getElementById('studentId').value;
            document.getElementById('username').value = studentId;
        }
    });
    
    // ออกจากระบบ
    document.getElementById('logoutBtn').addEventListener('click', function() {
        document.getElementById('loginPage').classList.remove('hidden');
        document.getElementById('appMain').classList.add('hidden');
        
        // ล้างข้อมูลการล็อกอิน
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    });
    
    // ลืมรหัสผ่าน
    document.getElementById('forgotPasswordBtn').addEventListener('click', function() {
        alert('กรุณาติดต่อเจ้าหน้าที่เพื่อรีเซ็ตรหัสผ่าน');
    });
    
    // ติดต่อเจ้าหน้าที่ (หน้า Login)
    document.getElementById('contactStaffBtn').addEventListener('click', function() {
        alert('กรุณาติดต่อเจ้าหน้าที่ได้ที่ support@mahidol.ac.th หรือ โทร. 02-849-6000');
    });
    
    // ติดต่อเจ้าหน้าที่ (หน้า Register)
    document.getElementById('registerContactStaffBtn').addEventListener('click', function() {
        alert('กรุณาติดต่อเจ้าหน้าที่ได้ที่ support@mahidol.ac.th หรือ โทร. 02-849-6000');
    });
    
    // ปิด modal
    document.getElementById('cancelBookingBtn').addEventListener('click', closeBookingModal);
    
    // ยืนยันการจอง
    document.getElementById('confirmBookingBtn').addEventListener('click', function() {
        const date = document.getElementById('bookingDate').value;
        const time = document.getElementById('bookingTime').value;
        const studentId = document.getElementById('bookingStudentId').value;
        const details = document.getElementById('bookingDetails').value;
        
        if (!date || !time || !studentId || !details) {
            alert('กรุณากรอกข้อมูลให้ครบทุกช่อง');
            return;
        }
        
        alert(`จองห้อง ${selectedLab.name} สำเร็จ!`);
        closeBookingModal();
    });
});