class hero
{
	constructor(nome, idade, tipo)
	{
		this.nome = nome;
		this.idade = idade;
		this.tipo = tipo;
	}


	atack()
	{
		let atack;
		switch (this.tipo.toLowerCase())
		{
			case 'mago':
				atack = 'magia';
				break;
			case 'guerreiro':
				atack = 'espada';
				break;
			case 'monge':
				atack = 'artes marciais';
				break;
			case 'ninja':
				atack = 'shuriken';
				break;
			default:
				atack = 'um ataque indefinido';
		}
	console.log(`O ${this.tipo} atacou usando ${atack}!`)
	}
}

const heroi1 = new hero("Gandalf", 2000, "Mago");
heroi1.atack();

const heroi2 = new hero("Conan", 30, "Guerreiro");
heroi2.atack();

const heroi3 = new hero("Shaolin", 25, "Monge");
heroi3.atack();

const heroi4 = new hero("Naruto", 16, "Ninja");
heroi4.atack();
