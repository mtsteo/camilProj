
export function Map() {
    var map = L.map('map').setView([-5.53, -52.29], 8); // Coordenadas centrais do estado

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Adicione um evento de clique para obter o nome da cidade
    map.on('click', function (e) {
        var lat = e.latlng.lat;
        var lon = e.latlng.lng;

        // Chama a função para obter o nome da cidade
        getCityName(lat, lon)
            .then(function (cityName) {
                if (cityName) {
                    alert('Cidade: ' + cityName);
                } else {
                    alert('Cidade não encontrada');
                }
            })
            .catch(function (error) {
                console.error('Erro ao obter o nome da cidade:', error);
            });
    });

    // Função para obter o nome da cidade usando a API do Nominatim
    function getCityName(lat, lon) {
        var url = 'https://nominatim.openstreetmap.org/reverse?format=json&lat=' + lat + '&lon=' + lon;

        return fetch(url)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Erro ao obter os dados da API do Nominatim');
                }
                return response.json();
            })
            .then(function (data) {
                if (data && data.address && data.address.city) {
                    return data.address.city;
                } else {
                    return null;
                }
            });
    }



}