function activeTab() {
    document.getElementById('header_home_menu').classList.remove("active");
    document.getElementById('header_shop_menu').classList.remove("active");
    document.getElementById('header_gallery_menu').classList.remove("active");
    document.getElementById('header_feedback_menu').classList.remove("active");
    document.getElementById('header_team_menu').classList.remove("active");
    document.getElementById('header_sitemap_menu').classList.remove("active");
    document.getElementById('header_checkout_menu').classList.remove("active");
    document.getElementById('header_userProfile_menu').classList.add("active");
}

const updateCartValue = () => {
    const productData = localStorage.getItem('products');
    if (productData && productData.length > 0) {
        const data = productData.split(', ');

        const itemCounts = {};
        let total = 0;
        data.forEach(item => {
            if (itemCounts[item]) {
                itemCounts[item]++;
            } else {
                itemCounts[item] = 1;
                total++;
            }
        });

        document.getElementById("item_count").innerHTML = total;
    } else {
        document.getElementById("item_count").innerHTML = 0;
    }
}

const ClearUserProfile = () => {
    localStorage.removeItem("fname");
    localStorage.removeItem("lname");
    localStorage.removeItem("email");
    localStorage.removeItem("mobile");
    localStorage.removeItem("gender");
    localStorage.removeItem("street");
    localStorage.removeItem("landmark");
    localStorage.removeItem("city");
    localStorage.removeItem("pincode");
    localStorage.removeItem("prefere_day");
    localStorage.removeItem("prefere_time");
    localStorage.removeItem("prefere_mode");

    localStorage.setItem("complete_profile", false);
    window.location.href = "./profile.html";
}

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem('complete_profile') === "true") {
        document.getElementById("container").hidden = true;
        document.getElementById("profileCompletion").hidden = true;
        document.getElementById("progressLabel").hidden = true;
        document.getElementById("progress").hidden = true;

        const fname = localStorage.getItem("fname");
        const lname = localStorage.getItem("lname");
        const email = localStorage.getItem("email");
        const mobile = localStorage.getItem("mobile");
        const gender = localStorage.getItem("gender");
        const street = localStorage.getItem("street");
        const landmark = localStorage.getItem("landmark");
        const city = localStorage.getItem("city");
        const pincode = localStorage.getItem("pincode");
        const preDay = localStorage.getItem("prefere_day");
        const preTime = localStorage.getItem("prefere_time");
        const preMode = localStorage.getItem("prefere_mode");

        document.getElementById("res_fname").innerText = fname;
        document.getElementById("res_lname").innerText = lname;
        document.getElementById("res_email").innerText = email;
        document.getElementById("res_mobile").innerText = mobile;
        document.getElementById("res_gender").innerText = gender;
        document.getElementById("res_street_building").innerText = street;
        document.getElementById("res_landmark").innerText = landmark;
        document.getElementById("res_city").innerText = city;
        document.getElementById("res_pincode").innerText = pincode;
        document.getElementById("res_preday").innerText = preDay;
        document.getElementById("res_pretime").innerText = preTime;
        document.getElementById("res_premode").innerText = preMode;

        document.getElementById("detail_component").hidden = false;
    } else {
        document.getElementById("container").hidden = false;
        document.getElementById("profileCompletion").hidden = false;
        document.getElementById("progressLabel").hidden = false;
        document.getElementById("progress").hidden = false;
    }
});


const onFirstSubmit = () => {
    if (document.getElementById("fname").value.length > 0) {
        document.getElementById("first").hidden = true;
        document.getElementById("second").hidden = false;

        document.getElementById("main_head").innerText = "Personal Detail: 2/5";
        localStorage.setItem("fname", document.getElementById("fname").value);

        document.getElementById("progress").value = 1;
        document.getElementById("progressLabel").innerText = "Profile Completion (8.33%)";
    } else {
        swal("Please Insert Value")
    }
}

const onSecondSubmit = () => {
    if (document.getElementById("lname").value.length > 0) {
        document.getElementById("first").hidden = true;
        document.getElementById("second").hidden = true;
        document.getElementById("third").hidden = false;

        document.getElementById("main_head").innerText = "Personal Detail: 3/5";
        localStorage.setItem("lname", document.getElementById("lname").value);

        document.getElementById("progress").value = 2;
        document.getElementById("progressLabel").innerText = "Profile Completion (16.66%)";
    } else {
        swal("Please Insert Value")
    }
}

const onThirdSubmit = () => {
    if (document.getElementById("email").value.length > 0) {
        document.getElementById("first").hidden = true;
        document.getElementById("second").hidden = true;
        document.getElementById("third").hidden = true;
        document.getElementById("forth").hidden = false;

        document.getElementById("main_head").innerText = "Personal Detail: 4/5";
        localStorage.setItem("email", document.getElementById("email").value);

        document.getElementById("progress").value = 3;
        document.getElementById("progressLabel").innerText = "Profile Completion (24.99%)";
    } else {
        swal("Please Insert Value")
    }
}

const onForthSubmit = () => {
    if (document.getElementById("mobile").value.length > 0) {
        document.getElementById("first").hidden = true;
        document.getElementById("second").hidden = true;
        document.getElementById("third").hidden = true;
        document.getElementById("forth").hidden = true;
        document.getElementById("fifth").hidden = false;

        document.getElementById("main_head").innerText = "Personal Detail: 5/5";
        localStorage.setItem("mobile", document.getElementById("mobile").value);

        document.getElementById("progress").value = 4;
        document.getElementById("progressLabel").innerText = "Profile Completion (33.32%)";
    } else {
        swal("Please Insert Value")
    }
}

const onFifthSubmit = () => {
    if (document.getElementById("gender").value.length > 0) {
        document.getElementById("first").hidden = true;
        document.getElementById("second").hidden = true;
        document.getElementById("third").hidden = true;
        document.getElementById("forth").hidden = true;
        document.getElementById("fifth").hidden = true;
        document.getElementById("street").hidden = false;

        document.getElementById("main_head").innerText = "Address Detail: 1/4";
        localStorage.setItem("gender", document.getElementById("gender").value);

        document.getElementById("progress").value = 5;
        document.getElementById("progressLabel").innerText = "Profile Completion (41.65%)";
    } else {
        swal("Please Insert Value")
    }
}

const onStreetSubmit = () => {
    if (document.getElementById("streetAdd").value.length > 0) {
        document.getElementById("first").hidden = true;
        document.getElementById("second").hidden = true;
        document.getElementById("third").hidden = true;
        document.getElementById("forth").hidden = true;
        document.getElementById("fifth").hidden = true;
        document.getElementById("street").hidden = true;
        document.getElementById("landmark").hidden = false;

        document.getElementById("main_head").innerText = "Address Detail: 2/4";
        localStorage.setItem("street", document.getElementById("streetAdd").value);

        document.getElementById("progress").value = 6;
        document.getElementById("progressLabel").innerText = "Profile Completion (49.98%)";
    } else {
        swal("Please Insert Value")
    }
}

const onLandmarkSubmit = () => {
    if (document.getElementById("landmarkAdd").value.length > 0) {
        document.getElementById("first").hidden = true;
        document.getElementById("second").hidden = true;
        document.getElementById("third").hidden = true;
        document.getElementById("forth").hidden = true;
        document.getElementById("fifth").hidden = true;
        document.getElementById("street").hidden = true;
        document.getElementById("landmark").hidden = true;
        document.getElementById("city").hidden = false;

        document.getElementById("main_head").innerText = "Address Detail: 3/4";
        localStorage.setItem("landmark", document.getElementById("landmarkAdd").value);

        document.getElementById("progress").value = 7;
        document.getElementById("progressLabel").innerText = "Profile Completion (58.31%)";
    } else {
        swal("Please Insert Value")
    }
}

const onCitySubmit = () => {
    if (document.getElementById("cityAdd").value.length > 0) {
        document.getElementById("first").hidden = true;
        document.getElementById("second").hidden = true;
        document.getElementById("third").hidden = true;
        document.getElementById("forth").hidden = true;
        document.getElementById("fifth").hidden = true;
        document.getElementById("street").hidden = true;
        document.getElementById("landmark").hidden = true;
        document.getElementById("city").hidden = true;
        document.getElementById("pincode").hidden = false;

        document.getElementById("main_head").innerText = "Address Detail: 4/4";
        localStorage.setItem("city", document.getElementById("cityAdd").value);

        document.getElementById("progress").value = 8;
        document.getElementById("progressLabel").innerText = "Profile Completion (66.64%)";
    } else {
        swal("Please Insert Value")
    }
}

const onPincodeSubmit = () => {
    if (document.getElementById("Addpincode").value.length > 0) {
        document.getElementById("first").hidden = true;
        document.getElementById("second").hidden = true;
        document.getElementById("third").hidden = true;
        document.getElementById("forth").hidden = true;
        document.getElementById("fifth").hidden = true;
        document.getElementById("street").hidden = true;
        document.getElementById("landmark").hidden = true;
        document.getElementById("city").hidden = true;
        document.getElementById("pincode").hidden = true;
        document.getElementById("daySelection").hidden = false;

        document.getElementById("main_head").innerText = "Your Preferences: 1/3";
        localStorage.setItem("pincode", document.getElementById("Addpincode").value);

        document.getElementById("progress").value = 9;
        document.getElementById("progressLabel").innerText = "Profile Completion (74.97%)";
    } else {
        swal("Please Insert Value")
    }
}

const onPrefereDaySubmit = () => {
    let data = "";
    if (document.getElementById("mon-fri").checked == true) {
        data = document.getElementById("mon-fri").value;
    } else if (document.getElementById("satur-sun").checked == true) {
        data = document.getElementById("satur-sun").value;
    }

    if (data.length > 0) {
        document.getElementById("first").hidden = true;
        document.getElementById("second").hidden = true;
        document.getElementById("third").hidden = true;
        document.getElementById("forth").hidden = true;
        document.getElementById("fifth").hidden = true;
        document.getElementById("street").hidden = true;
        document.getElementById("landmark").hidden = true;
        document.getElementById("city").hidden = true;
        document.getElementById("pincode").hidden = true;
        document.getElementById("daySelection").hidden = true;
        document.getElementById("timeSelection").hidden = false;

        document.getElementById("main_head").innerText = "Your Preferences: 2/3";
        localStorage.setItem("prefere_day", data);

        document.getElementById("progress").value = 10;
        document.getElementById("progressLabel").innerText = "Profile Completion (83.3%)";
    } else {
        swal("Please Insert Value")
    }
}

const onPrefereTimeSubmit = () => {
    let data = "";
    if (document.getElementById("mor").checked == true) {
        data = document.getElementById("mor").value;
    } else if (document.getElementById("eve").checked == true) {
        data = document.getElementById("eve").value;
    }

    if (data.length > 0) {
        document.getElementById("first").hidden = true;
        document.getElementById("second").hidden = true;
        document.getElementById("third").hidden = true;
        document.getElementById("forth").hidden = true;
        document.getElementById("fifth").hidden = true;
        document.getElementById("street").hidden = true;
        document.getElementById("landmark").hidden = true;
        document.getElementById("city").hidden = true;
        document.getElementById("pincode").hidden = true;
        document.getElementById("daySelection").hidden = true;
        document.getElementById("timeSelection").hidden = true;
        document.getElementById("UrgentDeliverySelection").hidden = false;

        document.getElementById("main_head").innerText = "Your Preferences: 3/3";
        localStorage.setItem("prefere_time", data);

        document.getElementById("progress").value = 11;
        document.getElementById("progressLabel").innerText = "Profile Completion (91.63%)";
    } else {
        swal("Please Insert Value")
    }
}

const onPrefereModeSubmit = () => {
    let data = "";
    if (document.getElementById("urgent").checked == true) {
        data = document.getElementById("urgent").value;
    } else if (document.getElementById("normal").checked == true) {
        data = document.getElementById("normal").value;
    }

    if (data.length > 0) {
        document.getElementById("progress").value = 12;
        document.getElementById("progressLabel").innerText = "Profile Completion (100%)";

        localStorage.setItem("prefere_mode", data);
        localStorage.setItem("complete_profile", true);
        window.location.href = './profile.html';
    } else {
        swal("Please Insert Value")
    }
}
document.addEventListener('DOMContentLoaded', function () {
    activeTab();
    updateCartValue();
})