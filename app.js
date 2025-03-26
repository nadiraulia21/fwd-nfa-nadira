import { index, store, destroy } from './controller.js';
import users from './data.js';

// Fungsi untuk render data ke tabel
function renderUserList() {
    const tbody = document.getElementById('userList');
    tbody.innerHTML = '';

    users.map((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.nama}</td>
            <td>${user.umur}</td>
            <td>${user.alamat}</td>
            <td>${user.email}</td>
            <td><button class="delete-btn" data-index="${index}">Hapus</button></td>
        `;
        tbody.appendChild(row);
        return user;
    });

    // Tambahkan event listener untuk semua tombol hapus
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            destroy(index);
            renderUserList();
        });
    });
}

// Event Listeners
document.getElementById('showBtn').addEventListener('click', () => {
    index();
    renderUserList();
});

document.getElementById('addDefaultBtn').addEventListener('click', () => {
    store({ nama: 'Nova', umur: 30, alamat: 'Jl. Baru No.11', email: 'nova@example.com' });
    store({ nama: 'Nani', umur: 31, alamat: 'Jl. Baru No.12', email: 'nani@example.com' });
    renderUserList();
});

document.getElementById('addBtn').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;

    if (!name || !age || !address || !email) {
        alert('Harap isi semua field!');
        return;
    }

    store({
        nama: name,
        umur: parseInt(age),
        alamat: address,
        email: email
    });

    renderUserList();

    // Reset form
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('address').value = '';
    document.getElementById('email').value = '';
});

// Tampilkan data saat pertama kali load
document.addEventListener('DOMContentLoaded', () => {
    renderUserList();
});