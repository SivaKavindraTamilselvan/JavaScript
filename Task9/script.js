async function Image() {
    const container = document.getElementById("image-box")
    try {
        const response = await fetch("https://picsum.photos/v2/list?page=2&limit=10");
        const data = await response.json();

        data.forEach((item)=>{
            let div = document.createElement("div");
            let image = document.createElement("img");
            image.src=item.download_url;
            image.className="image";
            div.appendChild(image);
            container.appendChild(div);
        });
    }
    catch(error){
        console.error(error);
    }
}

const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        Image();
    }
});

observer.observe(document.getElementById("loading"));
Image();