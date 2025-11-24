document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app-container');

    // --- NAVIGATION ---
    const bottomNavBar = (activeScreen) => {
        const items = [
            { name: 'dashboard', icon: 'home', label: 'Inicio' },
            { name: 'sitter-list', icon: 'search', label: 'Buscar' },
            { name: 'gps', icon: 'location_on', label: 'GPS' },
            { name: 'log', icon: 'book', label: 'Registro' },
            { name: 'pet-profile', icon: 'pets', label: 'Mascotas' }
        ];

        return `
            <div class="bottom-nav">
                ${items.map(item => `
                    <a href="#" class="nav-item ${activeScreen === item.name ? 'active' : ''}" onclick="event.preventDefault(); navigateTo('${item.name}')">
                        <span class="material-icons">${item.icon}</span>
                        <span>${item.label}</span>
                    </a>
                `).join('')}
            </div>
        `;
    };

    const dashboardScreen = `
        <div id="dashboard-screen" class="screen">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="mb-0">Hola, Oscar</h2>
                <span class="material-icons">notifications</span>
            </div>
             <div class="card text-center bg-light">
                <div class="card-body">
                    <h5 class="card-title">Bienvenido a PetSociety</h5>
                    <p class="card-text">Tu central para el cuidado seguro y transparente de tus mascotas. Usa la barra de navegación inferior para empezar.</p>
                </div>
            </div>
            <h4 class="mt-4">Servicio Activo</h4>
            <div class="card" onclick="navigateTo('log')">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h5 class="card-title">Paseo con Ana Sofía</h5>
                        <span class="badge bg-success">En progreso</span>
                    </div>
                    <p class="card-text text-muted">Max (Golden Retriever)</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
        ${bottomNavBar('dashboard')}
    `;

    const sitterListScreen = `
        <div id="sitter-list-screen" class="screen">
            <div class="d-flex align-items-center mb-4">
                <h3 class="mb-0">Cuidadores Disponibles</h3>
            </div>
            <div class="list-group">
                <div class="list-group-item list-group-item-action" onclick="navigateTo('profile')">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Ana Sofía</h5>
                        <small class="text-verified">
                            <span class="material-icons" style="font-size: 1em;">verified</span> Verificada
                        </small>
                    </div>
                    <p class="mb-1">Amante de los perros, con más de 5 años de experiencia.</p>
                    <small>⭐ 4.9/5 (82 reseñas)</small>
                </div>
                <div class="list-group-item list-group-item-action" onclick="navigateTo('profile')">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Carlos López</h5>
                        <small class="text-verified">
                            <span class="material-icons" style="font-size: 1em;">verified</span> Verificada
                        </small>
                    </div>
                    <p class="mb-1">Cuidador de gatos y perros pequeños. Ofrezco paseos y cuidado a domicilio.</p>
                    <small>⭐ 4.8/5 (45 reseñas)</small>
                </div>
                 <div class="list-group-item list-group-item-action" onclick="navigateTo('profile')">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">Mariana Gil</h5>
                        <small class="text-muted">No Verificada</small>
                    </div>
                    <p class="mb-1">Estudiante de veterinaria, disponible fines de semana.</p>
                    <small>⭐ 4.5/5 (12 reseñas)</small>
                </div>
            </div>

            <!-- Botón Flotante -->
            <button class="fab" data-bs-toggle="modal" data-bs-target="#verificationModal">
                <span class="material-icons">help_outline</span>
            </button>

            <!-- Modal de Verificación -->
            <div class="modal fade" id="verificationModal" tabindex="-1" aria-labelledby="verificationModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="verificationModalLabel">
                                <span class="material-icons text-verified" style="vertical-align: middle;">verified</span>
                                Verificación de Cuidadores
                            </h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Para garantizar la seguridad y confianza en nuestra plataforma, todos los cuidadores con la insignia "Verificado" han completado exitosamente los siguientes pasos:</p>
                            <ul>
                                <li><strong>Verificación de Identidad:</strong> Presentación de un documento de identidad oficial.</li>
                                <li><strong>Entrevista Personal:</strong> Una entrevista con nuestro equipo para evaluar su experiencia, aptitud, y una evaluación psicológica para determinar su idoneidad emocional.</li>
                                <li><strong>Certificado de Antecedentes:</strong> Comprobación de antecedentes penales.</li>
                                <li><strong>Referencias Personales:</strong> Verificación de referencias de clientes anteriores o empleadores.</li>
                            </ul>
                            <p class="text-muted small">Busca siempre la insignia de verificación para una mayor tranquilidad.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        ${bottomNavBar('sitter-list')}
    `;

    const sitterProfileScreen = `
        <div id="sitter-profile-screen" class="screen">
            <div class="d-flex align-items-center mb-3">
                <span class="material-icons" onclick="navigateTo('sitter-list')">arrow_back</span>
                <h3 class="mb-0 ms-3">Perfil del Cuidador</h3>
            </div>
            <div class="text-center">
                <img src="https://i.pravatar.cc/150?u=ana" class="rounded-circle mb-3" alt="Ana Sofia">
                <h4 class="mb-1">Ana Sofía</h4>
                <p class="text-verified fs-5">
                    <span class="material-icons">verified</span> Cuidadora Verificada
                </p>
            </div>
            <hr>
            <h5>Sobre mí</h5>
            <p class="text-muted">
                Soy una apasionada de los animales con más de 5 años de experiencia en el cuidado de perros de todas las razas y tamaños. Mi objetivo es que tu mascota se sienta feliz, segura y como en casa mientras no estás. Cuento con certificaciones en primeros auxilios para mascotas.
            </p>
            <h5>Reseñas (82)</h5>
            <div class="card mb-2">
                <div class="card-body">
                    <strong>Oscar Vega:</strong> "Excelente cuidadora. Ana fue muy atenta con Max, mi golden retriever. Me mantuvo informado con fotos y videos durante todo el fin de semana. ¡Totalmente recomendada!"
                </div>
            </div>
            <div class="d-grid mt-4">
                <button class="btn btn-primary btn-lg" onclick="navigateTo('chat')">Abrir Chat</button>
            </div>
        </div>
    `;

    const gpsScreen = `
        <div id="gps-screen" class="screen">
            <div class="d-flex align-items-center mb-3">
                <h3 class="mb-0">Paseo de Max</h3>
            </div>
            <p class="text-muted">Sigue en tiempo real la ubicación de tu mascota.</p>
            <div class="map-container text-center">
                <img src="assets/GPS.PNG" class="img-fluid rounded" alt="Mapa de seguimiento GPS">
                 <div class="alert alert-info mt-3">
                    <span class="material-icons" style="vertical-align: middle;">info</span>
                    El cuidador ha iniciado el paseo a las 4:30 PM.
                </div>
            </div>
        </div>
        ${bottomNavBar('gps')}
    `;

    const logScreen = `
        <div id="log-screen" class="screen">
            <div class="d-flex align-items-center mb-4">
                <h3 class="mb-0">Registro del servicio</h3>
            </div>
            <ul class="list-group">
                <li class="list-group-item">
                    <p class="mb-1"><strong>4:35 PM:</strong> ¡Empezamos el paseo! Max está muy contento.</p>
                    <img src="https://placedog.net/500/300?id=1" class="img-fluid rounded mt-2" alt="Perro paseando">
                </li>
                <li class="list-group-item">
                    <p class="mb-1"><strong>4:55 PM:</strong> Jugando en el parque. ¡Hizo un nuevo amigo!</p>
                </li>
                <li class="list-group-item">
                    <p class="mb-1"><strong>5:15 PM:</strong> Pausa para tomar agua.</p>
                </li>
                 <li class="list-group-item">
                    <p class="mb-1"><strong>5:30 PM:</strong> De regreso a casa. Todo en orden.</p>
                </li>
            </ul>
        </div>
        ${bottomNavBar('log')}
    `;

    const chatScreen = `
        <div id="chat-screen" class="screen d-flex flex-column">
            <div class="d-flex align-items-center mb-3">
                <span class="material-icons" onclick="navigateTo('profile')">arrow_back</span>
                <h3 class="mb-0 ms-3">Chat con Ana Sofía</h3>
            </div>
            <div class="chat-messages flex-grow-1">
                <div class="message received">
                    Hola Oscar, ¿a qué hora te viene bien que pase por Max?
                </div>
                <div class="message sent">
                    ¡Hola Ana! A las 4 PM estaría genial, gracias.
                </div>
                 <div class="message received">
                    Perfecto, ¡nos vemos entonces!
                </div>
            </div>
            <div class="chat-input input-group mt-3">
                <input type="text" class="form-control" placeholder="Escribe un mensaje...">
                <button class="btn btn-primary" type="button">
                    <span class="material-icons">send</span>
                </button>
            </div>
        </div>
    `;

    const petProfileScreen = `
        <div id="pet-profile-screen" class="screen">
            <div class="d-flex align-items-center mb-4">
                <h3 class="mb-0">Perfil de mis Mascotas</h3>
            </div>
            <div class="card">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <img src="https://placedog.net/100/100?id=2" class="rounded-circle me-3" alt="Max">
                        <div>
                            <h5 class="card-title mb-0">Max</h5>
                            <p class="card-text text-muted">Golden Retriever, 3 años</p>
                        </div>
                    </div>
                    <hr>
                    <h6 class="card-subtitle mb-2 text-muted">Cuidados Especiales</h6>
                    <form>
                        <div class="mb-3">
                            <textarea class="form-control" rows="4" placeholder="Ej: Alergia al pollo, no le gusta que le toquen las orejas, etc.">Max es muy amigable, pero a veces se asusta con ruidos fuertes como los de los camiones. Por favor, ten cuidado durante el paseo.</textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                    </form>
                </div>
            </div>
        </div>
        ${bottomNavBar('pet-profile')}
    `;


    // --- ROUTER / NAVIGATION ---

    const routes = {
        'dashboard': dashboardScreen,
        'sitter-list': sitterListScreen,
        'profile': sitterProfileScreen,
        'gps': gpsScreen,
        'log': logScreen,
        'chat': chatScreen,
        'pet-profile': petProfileScreen,
    };

    function renderScreen(screenName) {
        const baseScreenName = screenName.split('/')[0];
        if (routes[baseScreenName]) {
            appContainer.innerHTML = routes[baseScreenName];
        } else {
            appContainer.innerHTML = `<div class="screen"><p>Error: Pantalla no encontrada.</p></div>`;
        }
    }

    // --- GLOBAL NAVIGATION FUNCTION ---
    window.navigateTo = (screenName) => {
        console.log(`Navigating to ${screenName}`);
        renderScreen(screenName);
    };

    // --- INITIAL RENDER ---
    renderScreen('dashboard');
});
