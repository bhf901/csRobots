document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('student-selection').value = '';
    const students = ['Nico', 'Jack', 'Sory', 'Luke', 'Ben', 'Kai', 'Alice', 'Will', 'Zoe', 'Jordan', 'Jolie', 'Noah'];
    students.forEach((student) => {
        document.getElementById('student-selection').innerHTML += `<option value="${student.toLowerCase()}">${student}</option>`;
    });
    document.getElementById('student-selection').addEventListener('change', () => {
        window.location.href = `${document.getElementById('student-selection').value}`;
    });
});