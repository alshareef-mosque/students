document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const closeSidebar = document.getElementById('closeSidebar');
    const overlay = document.getElementById('overlay');

    // Toggle sidebar (فتح وإغلاق القائمة الجانبية)
    if (menuToggle && sidebar && closeSidebar && overlay) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.add('active');
            overlay.classList.add('active');
        });

        closeSidebar.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });

        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    // Button hover effect (تأثير تغيير لون الأزرار عند المرور عليها بالفأرة في الصفحة الرئيسية)
    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.backgroundColor = 'rgb(100, 0, 0)'; // لون أحمر أغمق عند المرور
        });
        button.addEventListener('mouseout', () => {
            button.style.backgroundColor = 'rgb(139, 0, 0)'; // اللون الأصلي عند الابتعاد
        });
    });

    // تم إزالة جميع الأكواد المتعلقة بإضافة/حذف الصفوف وإضافة الغياب
    // لأنك طلبت إزالتها.
});