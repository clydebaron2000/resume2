console.log(data);
console.log(data.exp);
for (const exp of data.exp) {
    if (exp.section == "") continue;
    const cardId = exp.title.toLowerCase().replace(/ /g, "_");
    const dateRange = moment(exp.startDate, "MM DD YYYY").format("MMM D YYYY") + " - " + moment(exp.endDate, "MM DD YYYY").format("MMM D YYYY");
    var skillspan = $(`<div class='skillspan'>`);
    var bullets = $(`<ul>`);
    for (const bullet of exp.bullets) {
        bullets.append($("<li>").text(bullet));
    }
    var buttonpanel = $(`<div class="buttonpanel">`).append($(`<label for="${cardId}" class="cardbutton return" aria-hidden="true">`).append($(`<i class="fas fa-arrow-left">`)));
    if (exp.source !== "") {
        buttonpanel.append($(`<a href="${exp.source}">`).append($('<label class="cardbutton link" aria-hidden="true">').text("Go to site!")));
    }
    $(`.card-wrapper`).append($('<div class="card">').append($(`<input type="checkbox" id="${cardId}" class="more">`)).append($('<div class="content">').append($(`<div class="front" style="background-image: url(${exp.img})">`).append($('<div class="inner">').append($("<h2>").text(exp.title)).append($('<div class="date">').text(dateRange)).append($("<div class='company'>")).append($(`<label for="${cardId}"class="cardbutton" aria-hidden="true">`).text("Details")))).append($(`<div class="back">`).append($(`<div class="inner">`).append(skillspan).append($(`<div class="description">`).append(bullets)).append($(`<div class="upperLeft">`).text(exp.title)).append($(`<div class="upperRight">`).text(dateRange)).append(buttonpanel)))));
}