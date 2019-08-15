window.addEventListener("load", function (ev) {
    $.post("backend/r.php", {request: "users"}, e=> {
        e = JSON.parse(e);
    e.data.forEach(e1=> {
        var elem = element_renderers.users(e1.user_name, e1.email, e1.videos_num);
        $(".Users")[0].appendChild(elem);});
    });

    $.post("backend/r.php", {request: "videos_resume"}, e=> {
        e = JSON.parse(e);
    e.data.forEach(e1=> {

        var elem = element_renderers.resume(e1.title,e1.url);
    $(".Resume")[0].appendChild(elem);
})
    ;
})
    ;
    $.post("backend/r.php", {request: "videos_fun"}, e=> {
        e = JSON.parse(e);
    e.data.forEach(e1=> {
        var elem = element_renderers.fun(e1.title,e1.url);
    $(".Fun")[0].appendChild(elem);
})
    ;
})
    ;


    $(".a").click(function (e) {
        $(".con").hide();
        console.log("." + e.target.innerText.split("\n")[1]);
        $("." + e.target.innerText.split("\n")[1]).show();
    });
    $(".Users").show();
});
var element_renderers = {
    users: function (user, email, videos) {
        return this.re(`<div class="user demo-card-wide mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
    <h2 class="mdl-card__title-text">${user}</h2>
    </div> 
    <div class="mdl-card__supporting-text">Email - ${email}
</div>
<div class="mdl-card__actions mdl-card--border">
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
    Number of Videos - ${videos}
</a>
</div>
    </div>`, "usee");
    },
    resume: function (title, url) {
        return this.re(`<div class="demo-card-wide mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
    <h2 class="mdl-card__title-text">${title}</h2>
    </div>
    <div class="mdl-card__supporting-text"><video class="resume video" controls src="${url}">
</video>
</div>
<div class="mdl-card__actions mdl-card--border">
    
</div>
    </div>`, "res");
    },
    fun: function (title, url) {
        return this.re(`<div class="demo-card-wide mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
    <h2 class="mdl-card__title-text">${title}</h2>
    </div>
    <div class="mdl-card__supporting-text"><video class="resume video" controls src="${url}">
</video>
</div>
<div class="mdl-card__actions mdl-card--border">
    
</div>
    </div>`, "fu");
    },
    re: function (a, classw) {
        var b = document.createElement("div");
        b.setAttribute("class", classw);
        b.innerHTML = a;
        return b;
    }
};

