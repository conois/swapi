$(document).ready( () =>{
$(".personaje").click( (e)=> {
	let that = e.target;
	let id= $(that).attr('id')
	const numberPeople= id.substr(1); 
	console.log(numberPeople)

	fetch(`https://swapi.co/api/people/${numberPeople}`)
	.then((response) => {
		return response.json();
		console.log("aqui")
	})
	.then( (data) =>{
		console.log(data)
		$(".modal-title").html(`${data.name}`);
		$("#gender").html(`${data.gender}`); 
		$("#height").html(`${data.height}`);
		$("#eye").html(`${data.eye_color}`);

		$(".panel-body").empty(); 
		let arrayMovie= data.films
		for( let i in arrayMovie){
			let movieUrl = arrayMovie[i]; 
			console.log(movieUrl)
			fetch (`${movieUrl}`)
			.then( (response) => {
				return response.json(); 
			})
			.then( (dataDos) => {
				$(".panel-body").append(`
					<label class="label-panel"> Name: ${dataDos.title} </label>
				    <p id="movie-name"></p>
				    <label class="label-panel"> Episode: ${dataDos.episode_id} </label>
				    <p id="episode"></p>`)
			})
		}
	})
	.catch( (err) =>{
		console.log(err)
	})
}) /*event*/
}) /*document*/

