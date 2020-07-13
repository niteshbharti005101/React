fetch("data.json").then(response=>{
	return response.json()
}).then(data=>{
	profileinfo(data.profiles);
})
var parent=document.getElementById('root');
var profileinfo=info=>{
	info.map((i,index)=>{
		var child=document.createElement("article");
		child.classList.add("child");
		//console.log(info[i].profileinfo.name);
		var name.document.createElement("h2");
		name.textContent=i.profileinfo.name;
		child.append(name);
		var mail=document.createElement("a");
		mail.textContent=i.profileinfo.email;
		mail.href="mailto:"+i.profileinfo.email;
		mail.classList.add("profile");
	})
}