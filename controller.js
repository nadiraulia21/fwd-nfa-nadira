import users from './data.js';

const index = () => {
    console.log('Menampilkan semua data:');
    users.map((user, index) => {
        console.log(`${index + 1}. ${user.nama} - ${user.umur} tahun`);
        return user;
    });
    return users;
};

const store = (user) => {
    users.push(user);
    console.log('Data berhasil ditambahkan:', user);
    return user;
};

const destroy = (index) => {
    if (index >= 0 && index < users.length) {
        const deletedUser = users.splice(index, 1)[0];
        console.log('Data berhasil dihapus:', deletedUser);
        return deletedUser;
    }
    console.log('Index tidak valid');
    return null;
};

export { index, store, destroy };