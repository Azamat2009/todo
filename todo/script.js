let todos = [{
		id: Math.random(),
		task: "Buy moon ;)",
		time: new Date().getHours() + ":" + new Date().getMinutes(),
		completed: false,
	},
	{
		id: Math.random(),
		task: "Do homework",
		time: new Date().getHours() + ":" + new Date().getMinutes(),
		completed: false,
	},
	{
		id: Math.random(),
		task: "End the project",
		time: new Date().getHours() + ":" + new Date().getMinutes(),
		completed: false,
	},	
	{
		id: Math.random(),
		task: "Sleep 10 hrs",
		time: new Date().getHours() + ":" + new Date().getMinutes(),
		completed: false,
	},
];
let form = document.forms.add_task_form;
let container = document.querySelector(".container");

form.onsubmit = (event) => {
	event.preventDefault();

	let todo = {
		id: Math.random(),
		completed: false,
		time: new Date().getHours() + ":" + new Date().getMinutes(),
	};

	let fm = new FormData(form);

	fm.forEach((value, key) => {
		todo[key] = value;
	});


	todos.push(todo)
	reload(todos)

	console.log(todos);
};

const reload = (arr) => {
	container.innerHTML = ""

	for (let item of arr) {
		let box = document.createElement("div");
		let krest = document.createElement("img");
		let h3 = document.createElement("h3");
		let span = document.createElement("span");

		box.classList.add("box");
		krest.classList.add("img");
		h3.classList.add("h3");
		span.classList.add("span");

		h3.innerHTML = item.task;
		krest.src = "./krest.svg";
		span.innerHTML = item.time;

		container.append(box);
		box.append(krest,h3,span);


		h3.onclick = () => {
			h3.classList.toggle('box-active')
			if (h3.classList.contains('box-active')) {
				item.completed = true
			} else {
				item.completed = false
			}
		}
		krest.onclick = () => {
				item.completed = true
			krest.onclick = () => {
				box.style.display = 'none'
			}
		}
		if (item.completed === true) {
			h3.classList.add('box-active')
		} else {
			h3.classList.remove('box-active')
		}
	};
}
reload(todos);