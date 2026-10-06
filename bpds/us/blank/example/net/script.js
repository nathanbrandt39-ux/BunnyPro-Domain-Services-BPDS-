// Variables:
const dlg = document.getElementById('dlg');
const btnY = document.getElementById('btnY');
const btnN = document.getElementById('btnN');
const hdr = document.getElementById('hdr');
const mn = document.getElementById('mn');
const ftr = document.getElementById('ftr');

// Gotta Code Code Code
dlg.showModal();

btnY.addEventListener("click", () => {
    dlg.close();
    hdr.innerHTML = "<input>";
    mn.innerHTML = "<input>";
    ftr.innerHTML = "<input>";
});

btnN.addEventListener("click", () => {
    dlg.close();
});