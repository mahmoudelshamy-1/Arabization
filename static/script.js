document.getElementById("uploadForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const fileInput = document.getElementById("fileInput");
    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    const res = await fetch("/process_docx", {
        method: "POST",
        body: formData,
    });

    const data = await res.json();

    document.getElementById("translated").innerText = "تم الترجمة بنجاح!";

    const btn = document.getElementById("downloadBtn");
    btn.style.display = "inline-block";
    btn.setAttribute("data-url", data.download_url);
});

document.getElementById("downloadBtn").addEventListener("click", () => {
    const url = document.getElementById("downloadBtn").getAttribute("data-url");
    window.open(url, "_blank");
});
