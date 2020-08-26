console.log(data.contact);
const emailRaw = data.contact[2].link.slice(7);
const phoneRaw = (data.contact[3].link).slice(4);
console.log(emailRaw, phoneRaw);
$("#email").text(emailRaw);
$("#phone").text(phoneRaw);