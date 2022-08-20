const fecha =document.getElementById('fechanacimiento');
const edad =document.getElementById('edad');

const calcularedad=(fecha)=>{
	const fechaactual= new Date();
	const anoactual=parseInt(fechaactual.getFullYear());
	const mesactual=parseInt(fechaactual.getMonth())+1;
	const diaactual=parseInt(fechaactual.getDate());

	//2016-01-01
	const anonacimeniento=parseInt(String(fecha).substring(0,4));
	const mesnacimeniento=parseInt(String(fecha).substring(5,7));
	const dianacimeniento=parseInt(String(fecha).substring(8,10));

	let edad=anoactual-anonacimeniento;
	if(mesactual<mesnacimeniento){
		edad--;
	}else if(mesactual===mesnacimeniento){
		if (diaactual<dianacimeniento) {
			edad--;
		}
	}
	return edad;
};

window.addEventListener('load',function() {
	
	fecha.addEventListener('change',function(){
		if (this.value) {
			edad.innerText=`tu edad es: ${calcularedad(this.value)} años`;
		}
	});
});