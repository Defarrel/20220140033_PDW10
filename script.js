document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const nim = document.getElementById('nim').value;
    const angkatan = document.getElementById('angkatan').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const alamat = document.getElementById('message').value;

    swal({
        title: "Form Data",
        text: `Nama: ${name}\nNIM: ${nim}\nAngkatan: ${angkatan}\nTanggal Lahir: ${birthdate}\nPeminatan: ${gender}\nAlamat: ${alamat}`,
        icon: "info",
    });
});