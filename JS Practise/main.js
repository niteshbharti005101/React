fetch('data.json').then(response=>{
	return response.json();
}).then(data=>{
	//console.log(data.profile.details);
	profile(data.profile.basics);
	details(data.profile.details);
})
var child1=document.querySelector(".child1");
var child2=document.querySelector(".child2");
var profile=(basic_info)=>{
	//console.log(basic_info.name);
	var name=document.createElement("h2");
	name.textContent=basic_info.name;
	child1.append(name);
	var role=document.createElement("h4");
	role.textContent=basic_info.role;
	role.classList.add("role");
	child1.append(role);

	var hr=document.createElement("hr");
	child1.append(hr);

	var email=document.createElement("a");
	email.href="mailto:"+basic_info.email;
	email.textContent=basic_info.email;
	child1.append(email);

	var br=document.createElement("br");
	child1.append(br);

	var mobile=document.createElement("a");
	mobile.href="tel:"+basic_info.mobile;
	mobile.textContent=basic_info.mobile;
	child1.append(mobile);

	var address=document.createElement("p");
	address.textContent=basic_info.address;
	child1.append(address);
}
var details=(detail_info)=>{
	//console.log(detail_info);	
}