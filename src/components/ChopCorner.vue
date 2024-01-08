<template>
    <div class="chopcorner" @click="togglePopup()">
        <p>Learn More About Chopt</p>
    </div>
    <div class="popup" id="popup">
        <span class="close-btn" @click="hidePopup()">X</span>
        <p>Hi everyone,

            My name is Chop! I am the mascot for Chopt Harvest. I was adopted by my owner from the shelter and have made
            it my mission to spread awareness about food insecurity in my community. Please share this with others who
            might be experiencing food insecurity. Hunger does not discriminate.
            <img src="@/assets/chopt.png" alt="Chop">
        </p>
    </div>
</template>

<script setup>
function togglePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = (popup.style.display === "none" || popup.style.display === "") ? "block" : "none";
}

function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}
</script>