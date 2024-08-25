
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			users: [],
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
			token: localStorage.getItem("jwt-token") || null, // Inicializa el token desde localStorage
		},

		actions: {


			login: async (email, password) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/login", {
						method: "POST",
						body: JSON.stringify({ email, password }),
						headers: {
							"Content-Type": "application/json"
						}
					});
					const data = await response.json();
					console.log(data)

					if (response.ok) {
						localStorage.setItem("jwt-token", data.access_token);
						setStore({ token: data.access_token });
						return true

					} else {
						console.log("Login failed:", data.message);
						return false;
					}
				} catch (e) {
					console.log("Error during login:", e);
					return false;
				}
			},

			createUser: async (email, password, name, lastname) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/registration", {
						method: "POST",
						body: JSON.stringify({
							email: email,
							password: password,
							name: name,
							lastname: lastname,
						}),
						headers: {
							"Content-Type": "application/json"
						}
					});
					const data = await response.json();
					console.log(data)

					if (response.ok) {

						console.log('Respuesta recibida:', data);
						localStorage.setItem("jwt-token", data.access_token);
						setStore({ token: data.access_token });
						return true;
					}

					else {
						console.log("Login failed:", data.message);
						return false;
					}
				} catch (e) {
					console.log("Error durante el registro:", e);
					return false;
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




