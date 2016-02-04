ymaps.ready(init);

function init() {

    // Создание экземпляра карты.
    var myMap = new ymaps.Map('map', {
            center: [51.566717, 39.238465],
            zoom: 12
        }, {
            searchControlProvider: 'yandex#search'
        });
		
    myMap.geoObjects
        .add(new ymaps.Placemark([51.566717, 39.238465], {
            balloonContent: 'Мастерская на Левом берегу'
        }, {
            preset: 'islands#redIcon',
            iconColor: '#0095b6'
        }));
	
	// Отключаем зум от колёсика мышки
	myMap.behaviors.disable('scrollZoom'); 
}
