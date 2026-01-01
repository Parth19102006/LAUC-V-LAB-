function openSidebar() {
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.add('active');
        document.body.classList.add('sidebar-open');
    }   
    function closeSidebar() {
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.remove('active');
        document.body.classList.remove('sidebar-open');
    }