
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			vehicles: [],
			planets: [],
			charactersfavorist: [],
			vehiclesfavorist: [],
			planetsfavorist: [],
			infocharacters: {},
			phothocharacters: {},
			infovehicles: {},
			infoplanets: {},
		},

		actions: {

			login: async (email, password) => {
				try {
					const response = await fetch("https://bookish-memory-x5r9p7vxrw7xh9pp9-3001.app.github.dev/login", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							"email": email,
							"password": password
						})
					});

					const data = await response.json();
					console.log(data);
				} catch (error) {
					// Aquí está el bloque catch, actualmente vacío
				}
			},



			getCharacters: async () => {
				const res = await fetch("https://www.swapi.tech/api/people/")
				const data = await res.json()
				setStore({ characters: data.results })
			},

			getVehicles: async () => {
				const res = await fetch("https://www.swapi.tech/api/vehicles/")
				const data = await res.json()
				setStore({ vehicles: data.results })
			},

			getPlanets: async () => {
				const res = await fetch("https://www.swapi.tech/api/planets/")
				const data = await res.json()
				setStore({ planets: data.results })
			},

			getCharactersInfo: async (uid) => {
				const res = await fetch(`https://www.swapi.tech/api/people/${uid}`)
				const data = await res.json()
				console.log(data)
				setStore({
					infocharacters: data.result.properties
				})
			},


			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},


			phothoCharacters: async (uid) => {
				const res = await fetch(`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`)
				const data = await res.json()
				console.log(data)
				setStore({
					phothocharacters: data
				})


			},

			getVehiclesInfo: async (uid) => {
				const res = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
				const data = await res.json()
				console.log(data)
				setStore({
					infovehicles: data.result.properties
				})
				console.log(data.result.properties)
			},

			getPlanetsInfo: async (uid) => {
				const res = await fetch(`https://www.swapi.tech/api/planets/${uid}`)
				const data = await res.json()
				console.log(data)
				setStore({
					infoplanets: data.result.properties
				})
			},

			addFavoritsCharacters: async (id, name) => {
				const { charactersfavorist } = getStore()
				setStore({ charactersfavorist: [...charactersfavorist, { id, name }] })
			},


			addFavoritsPlanets: async (id, name) => {
				const { planetsfavorist } = getStore()
				setStore({ planetsfavorist: [...planetsfavorist, { id, name }] })
			},




			addFavoritsVehicles: async (id, name) => {
				const { vehiclesfavorist } = getStore()
				setStore({ vehiclesfavorist: [...vehiclesfavorist, { id, name }] })
			},


			deleteCharacters: (name) => {
				let store = getStore()
				const result = store.charactersfavorist.filter((favorito) => (favorito != name));
				setStore({ charactersfavorist: result })
			},



			deleteVehicles: (name) => {
				let store = getStore()
				const result = store.vehiclesfavorist.filter((favorito) => (favorito != name));
				setStore({ vehiclesfavorist: result })
			},





			deletePlanets: (name) => {
				let store = getStore()
				const result = store.planetsfavorist.filter((favorito) => (favorito != name));
				setStore({ planetsfavorist: result })
			},










		}
	};
};

export default getState;




