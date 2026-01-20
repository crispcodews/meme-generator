document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("meme-form");
    const memeContainer = document.getElementById("memeContainer");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const topText = document.getElementById("topText").value.trim();
        const bottomText = document.getElementById("bottomText").value.trim();
        const imageUrl = document.getElementById("imageURL").value.trim();

        //basic validation
        if(!topText || !bottomText || !imageUrl) {
            alert("Please fill in all fields");
            return;
        }
        // create meme div
        const memeDiv = document.createElement("div");
        memeDiv.classList.add("meme");

        //image element
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Meme Image";

        // top text element
        const top = document.createElement("div");
        top.classList.add("meme-text", "top");
        top.innerText = topText;

        // bottom text element
        const bottom = document.createElement("div");
        bottom.classList.add("meme-text", "bottom");
        bottom.innerText = bottomText;

        //delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete Meme";
        deleteBtn.classList.add("delete-button");
        deleteBtn.type = "button";

         deleteBtn.addEventListener("click", function () {
         memeDiv.remove();
});

        memeDiv.appendChild(img);
        memeDiv.appendChild(top);
        memeDiv.appendChild(bottom);
        memeDiv.appendChild(deleteBtn);
        memeContainer.appendChild(memeDiv);

console.log("Meme added:", memeDiv)
        //clear form fields
        form.reset();


     });
});