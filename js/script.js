let currentCertIndex = 0;
let certFiles = [
	"Criminal-Justice-Cert.pdf",
	"IT-Certification.pdf",
	"Coursera-WordPress.pdf",
	"datacamp-Python.pdf",
	"PLP-software-developer.pdf",
];

function openModal(pdfFile) {
	currentCertIndex = certFiles.indexOf(pdfFile);
	document.getElementById("pdfViewer").src = "imgs/documents/" + pdfFile;
	document.getElementById("pdfModal").style.display = "flex";
}

function closeModal() {
	document.getElementById("pdfModal").style.display = "none";
	document.getElementById("pdfViewer").src = "";
}

function nextCert() {
	currentCertIndex = (currentCertIndex + 1) % certFiles.length;
	document.getElementById("pdfViewer").src = "imgs/documents/" + certFiles[currentCertIndex];
}

function prevCert() {
	currentCertIndex = (currentCertIndex - 1 + certFiles.length) % certFiles.length;
	document.getElementById("pdfViewer").src = "imgs/documents/" + certFiles[currentCertIndex];
}

// Keyboard navigation
document.addEventListener("keydown", function (e) {
	if (document.getElementById("pdfModal").style.display === "flex") {
		if (e.key === "ArrowRight") nextCert();
		else if (e.key === "ArrowLeft") prevCert();
		else if (e.key === "Escape") closeModal();
	}
});

//Disable right-click on the entire document
document.addEventListener('contextmenu', e => e.preventDefault());