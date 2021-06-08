ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25830").setExtent([595339.530754, 4724083.209030, 600059.555329, 4726417.191770]);
var wms_layers = [];

var lyr_Mapabase_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://idena.navarra.es/ogc/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "mapaBase",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Mapa base",
                            opacity: 0.647000,
                            
                            
                          });
              wms_layers.push([lyr_Mapabase_0, 0]);
var lyr_Ortofoto2017resolucin25cm_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://idena.navarra.es/ogc/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "IDENA:ortofoto_5000_2017",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortofoto 2017 (resolución 25 cm)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortofoto2017resolucin25cm_1, 0]);
var format_contenedores_2 = new ol.format.GeoJSON();
var features_contenedores_2 = format_contenedores_2.readFeatures(json_contenedores_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_contenedores_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_contenedores_2.addFeatures(features_contenedores_2);
var lyr_contenedores_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_contenedores_2, 
                style: style_contenedores_2,
                interactive: true,
                title: 'contenedores'
            });
var format_islas_3 = new ol.format.GeoJSON();
var features_islas_3 = format_islas_3.readFeatures(json_islas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_islas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_islas_3.addFeatures(features_islas_3);
var lyr_islas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_islas_3, 
                style: style_islas_3,
                interactive: true,
                title: '<img src="styles/legend/islas_3.png" /> islas'
            });
var format_colectores_4 = new ol.format.GeoJSON();
var features_colectores_4 = format_colectores_4.readFeatures(json_colectores_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_colectores_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_colectores_4.addFeatures(features_colectores_4);
var lyr_colectores_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_colectores_4, 
                style: style_colectores_4,
                interactive: true,
                title: '<img src="styles/legend/colectores_4.png" /> colectores'
            });
var format_pozo_registro_5 = new ol.format.GeoJSON();
var features_pozo_registro_5 = format_pozo_registro_5.readFeatures(json_pozo_registro_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_pozo_registro_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pozo_registro_5.addFeatures(features_pozo_registro_5);
var lyr_pozo_registro_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pozo_registro_5, 
                style: style_pozo_registro_5,
                interactive: true,
                title: '<img src="styles/legend/pozo_registro_5.png" /> pozo_registro'
            });
var format_tuberias_6 = new ol.format.GeoJSON();
var features_tuberias_6 = format_tuberias_6.readFeatures(json_tuberias_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_tuberias_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuberias_6.addFeatures(features_tuberias_6);
var lyr_tuberias_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tuberias_6, 
                style: style_tuberias_6,
                interactive: true,
                title: '<img src="styles/legend/tuberias_6.png" /> tuberias'
            });
var format_bocas_riego_7 = new ol.format.GeoJSON();
var features_bocas_riego_7 = format_bocas_riego_7.readFeatures(json_bocas_riego_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_bocas_riego_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bocas_riego_7.addFeatures(features_bocas_riego_7);
var lyr_bocas_riego_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bocas_riego_7, 
                style: style_bocas_riego_7,
                interactive: true,
                title: '<img src="styles/legend/bocas_riego_7.png" /> bocas_riego'
            });
var format_hidrantes_8 = new ol.format.GeoJSON();
var features_hidrantes_8 = format_hidrantes_8.readFeatures(json_hidrantes_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_hidrantes_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hidrantes_8.addFeatures(features_hidrantes_8);
var lyr_hidrantes_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hidrantes_8, 
                style: style_hidrantes_8,
                interactive: true,
                title: '<img src="styles/legend/hidrantes_8.png" /> hidrantes'
            });
var format_valvulas_9 = new ol.format.GeoJSON();
var features_valvulas_9 = format_valvulas_9.readFeatures(json_valvulas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_valvulas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_valvulas_9.addFeatures(features_valvulas_9);
var lyr_valvulas_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_valvulas_9, 
                style: style_valvulas_9,
                interactive: true,
                title: '<img src="styles/legend/valvulas_9.png" /> valvulas'
            });
var format_depositos_pol_10 = new ol.format.GeoJSON();
var features_depositos_pol_10 = format_depositos_pol_10.readFeatures(json_depositos_pol_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_depositos_pol_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_depositos_pol_10.addFeatures(features_depositos_pol_10);
var lyr_depositos_pol_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_depositos_pol_10, 
                style: style_depositos_pol_10,
                interactive: true,
                title: '<img src="styles/legend/depositos_pol_10.png" /> depositos_pol'
            });

lyr_Mapabase_0.setVisible(true);lyr_Ortofoto2017resolucin25cm_1.setVisible(true);lyr_contenedores_2.setVisible(true);lyr_islas_3.setVisible(true);lyr_colectores_4.setVisible(true);lyr_pozo_registro_5.setVisible(true);lyr_tuberias_6.setVisible(true);lyr_bocas_riego_7.setVisible(true);lyr_hidrantes_8.setVisible(true);lyr_valvulas_9.setVisible(true);lyr_depositos_pol_10.setVisible(true);
var layersList = [lyr_Mapabase_0,lyr_Ortofoto2017resolucin25cm_1,lyr_contenedores_2,lyr_islas_3,lyr_colectores_4,lyr_pozo_registro_5,lyr_tuberias_6,lyr_bocas_riego_7,lyr_hidrantes_8,lyr_valvulas_9,lyr_depositos_pol_10];
lyr_contenedores_2.set('fieldAliases', {'id': 'id', 'id Isla': 'id Isla', 'Fraccion': 'Fraccion', 'Capacidad': 'Capacidad', 'Recogida': 'Recogida', 'Uso': 'Uso', 'Contrato': 'Contrato', 'Gestion': 'Gestion', });
lyr_islas_3.set('fieldAliases', {'id': 'id', 'contenedor': 'contenedor', });
lyr_colectores_4.set('fieldAliases', {'id': 'id', 'Titular': 'Titular', 'Material': 'Material', 'Diametro': 'Diametro', 'Longitud': 'Longitud', 'Tipo flujo': 'Tipo flujo', 'Clase agua': 'Clase agua', 'Fecha inst': 'Fecha inst', 'E.servicio': 'E.servicio', 'Poblacion': 'Poblacion', });
lyr_pozo_registro_5.set('fieldAliases', {'id': 'id', 'Titular': 'Titular', 'Profundida': 'Profundida', 'Material': 'Material', 'Dim. pozo': 'Dim. pozo', 'Dim. tapa': 'Dim. tapa', 'Mat. tapa': 'Mat. tapa', 'Tapa_clase': 'Tapa_clase', 'Resalto': 'Resalto', 'Fecha.inst': 'Fecha.inst', 'Poblacion': 'Poblacion', 'Cota': 'Cota', });
lyr_tuberias_6.set('fieldAliases', {'id': 'id', 'Titular': 'Titular', 'Diametro': 'Diametro', 'Material': 'Material', 'Longitud': 'Longitud', 'Tipo red': 'Tipo red', 'Fecha inst': 'Fecha inst', 'E.servicio': 'E.servicio', 'Zona': 'Zona', });
lyr_bocas_riego_7.set('fieldAliases', {'id': 'id', 'Codigo': 'Codigo', 'Titular': 'Titular', 'Fabricante': 'Fabricante', 'Modelo': 'Modelo', 'Diametro': 'Diametro', 'Presion': 'Presion', 'Situacion': 'Situacion', 'Fecha inst': 'Fecha inst', 'E.servicio': 'E.servicio', 'Poblacion': 'Poblacion', 'Cota': 'Cota', });
lyr_hidrantes_8.set('fieldAliases', {'id': 'id', 'Codigo': 'Codigo', 'Titular': 'Titular', 'Fabricante': 'Fabricante', 'Modelo': 'Modelo', 'Racor': 'Racor', 'Diametro': 'Diametro', 'Presion': 'Presion', 'Tipo': 'Tipo', 'Situacion': 'Situacion', 'Fecha inst': 'Fecha inst', 'E.servicio': 'E.servicio', 'Poblacion': 'Poblacion', 'Cota': 'Cota', });
lyr_valvulas_9.set('fieldAliases', {'id': 'id', 'Codigo': 'Codigo', 'Titular': 'Titular', 'Tipo': 'Tipo', 'Diametro': 'Diametro', 'Material': 'Material', 'Clase': 'Clase', 'Estado': 'Estado', 'Fecha inst': 'Fecha inst', 'E.servicio': 'E.servicio', 'Zona': 'Zona', 'Cota': 'Cota', 'Poblacion': 'Poblacion', });
lyr_depositos_pol_10.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Titular': 'Titular', 'Material': 'Material', 'lam_agua': 'lam_agua', 'Nº vasos': 'Nº vasos', 'Volumen': 'Volumen', 'Tipo': 'Tipo', 'Acceso': 'Acceso', 'Telemando': 'Telemando', 'Fecha cons': 'Fecha cons', 'E.servicio': 'E.servicio', 'Poblacion': 'Poblacion', 'Cota': 'Cota', });
lyr_contenedores_2.set('fieldImages', {'id': 'TextEdit', 'id Isla': 'TextEdit', 'Fraccion': 'TextEdit', 'Capacidad': 'TextEdit', 'Recogida': 'TextEdit', 'Uso': 'TextEdit', 'Contrato': 'TextEdit', 'Gestion': 'TextEdit', });
lyr_islas_3.set('fieldImages', {'id': 'TextEdit', 'contenedor': 'TextEdit', });
lyr_colectores_4.set('fieldImages', {'id': 'TextEdit', 'Titular': 'TextEdit', 'Material': 'TextEdit', 'Diametro': 'Range', 'Longitud': 'TextEdit', 'Tipo flujo': '', 'Clase agua': '', 'Fecha inst': 'TextEdit', 'E.servicio': 'TextEdit', 'Poblacion': 'TextEdit', });
lyr_pozo_registro_5.set('fieldImages', {'id': 'TextEdit', 'Titular': 'TextEdit', 'Profundida': 'TextEdit', 'Material': 'TextEdit', 'Dim. pozo': 'TextEdit', 'Dim. tapa': 'TextEdit', 'Mat. tapa': 'TextEdit', 'Tapa_clase': 'TextEdit', 'Resalto': 'TextEdit', 'Fecha.inst': 'TextEdit', 'Poblacion': 'TextEdit', 'Cota': 'TextEdit', });
lyr_tuberias_6.set('fieldImages', {'id': 'TextEdit', 'Titular': 'TextEdit', 'Diametro': 'TextEdit', 'Material': 'TextEdit', 'Longitud': 'TextEdit', 'Tipo red': 'TextEdit', 'Fecha inst': 'TextEdit', 'E.servicio': 'TextEdit', 'Zona': 'TextEdit', });
lyr_bocas_riego_7.set('fieldImages', {'id': 'TextEdit', 'Codigo': 'TextEdit', 'Titular': 'TextEdit', 'Fabricante': 'TextEdit', 'Modelo': 'TextEdit', 'Diametro': 'TextEdit', 'Presion': 'TextEdit', 'Situacion': 'TextEdit', 'Fecha inst': 'TextEdit', 'E.servicio': 'TextEdit', 'Poblacion': 'TextEdit', 'Cota': 'TextEdit', });
lyr_hidrantes_8.set('fieldImages', {'id': 'TextEdit', 'Codigo': 'TextEdit', 'Titular': 'TextEdit', 'Fabricante': 'TextEdit', 'Modelo': 'TextEdit', 'Racor': 'TextEdit', 'Diametro': 'TextEdit', 'Presion': 'TextEdit', 'Tipo': 'TextEdit', 'Situacion': 'TextEdit', 'Fecha inst': 'TextEdit', 'E.servicio': 'TextEdit', 'Poblacion': 'TextEdit', 'Cota': 'TextEdit', });
lyr_valvulas_9.set('fieldImages', {'id': 'TextEdit', 'Codigo': 'TextEdit', 'Titular': 'TextEdit', 'Tipo': 'TextEdit', 'Diametro': 'TextEdit', 'Material': 'TextEdit', 'Clase': 'TextEdit', 'Estado': 'TextEdit', 'Fecha inst': 'TextEdit', 'E.servicio': 'TextEdit', 'Zona': 'TextEdit', 'Cota': 'TextEdit', 'Poblacion': 'TextEdit', });
lyr_depositos_pol_10.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Titular': 'TextEdit', 'Material': 'TextEdit', 'lam_agua': 'TextEdit', 'Nº vasos': 'Range', 'Volumen': 'Range', 'Tipo': 'TextEdit', 'Acceso': 'TextEdit', 'Telemando': 'TextEdit', 'Fecha cons': 'TextEdit', 'E.servicio': 'TextEdit', 'Poblacion': 'TextEdit', 'Cota': 'TextEdit', });
lyr_contenedores_2.set('fieldLabels', {'id': 'header label', 'id Isla': 'header label', 'Fraccion': 'header label', 'Capacidad': 'header label', 'Recogida': 'header label', 'Uso': 'header label', 'Contrato': 'header label', 'Gestion': 'header label', });
lyr_islas_3.set('fieldLabels', {'id': 'header label', 'contenedor': 'header label', });
lyr_colectores_4.set('fieldLabels', {'id': 'header label', 'Titular': 'header label', 'Material': 'header label', 'Diametro': 'header label', 'Longitud': 'header label', 'Tipo flujo': 'header label', 'Clase agua': 'header label', 'Fecha inst': 'header label', 'E.servicio': 'header label', 'Poblacion': 'header label', });
lyr_pozo_registro_5.set('fieldLabels', {'id': 'header label', 'Titular': 'header label', 'Profundida': 'header label', 'Material': 'header label', 'Dim. pozo': 'header label', 'Dim. tapa': 'header label', 'Mat. tapa': 'header label', 'Tapa_clase': 'header label', 'Resalto': 'header label', 'Fecha.inst': 'header label', 'Poblacion': 'header label', 'Cota': 'header label', });
lyr_tuberias_6.set('fieldLabels', {'id': 'header label', 'Titular': 'header label', 'Diametro': 'header label', 'Material': 'header label', 'Longitud': 'header label', 'Tipo red': 'header label', 'Fecha inst': 'header label', 'E.servicio': 'header label', 'Zona': 'header label', });
lyr_bocas_riego_7.set('fieldLabels', {'id': 'header label', 'Codigo': 'header label', 'Titular': 'header label', 'Fabricante': 'header label', 'Modelo': 'header label', 'Diametro': 'header label', 'Presion': 'header label', 'Situacion': 'header label', 'Fecha inst': 'header label', 'E.servicio': 'header label', 'Poblacion': 'header label', 'Cota': 'header label', });
lyr_hidrantes_8.set('fieldLabels', {'id': 'header label', 'Codigo': 'header label', 'Titular': 'header label', 'Fabricante': 'header label', 'Modelo': 'header label', 'Racor': 'header label', 'Diametro': 'header label', 'Presion': 'header label', 'Tipo': 'header label', 'Situacion': 'header label', 'Fecha inst': 'header label', 'E.servicio': 'header label', 'Poblacion': 'header label', 'Cota': 'header label', });
lyr_valvulas_9.set('fieldLabels', {'id': 'header label', 'Codigo': 'header label', 'Titular': 'header label', 'Tipo': 'header label', 'Diametro': 'header label', 'Material': 'header label', 'Clase': 'header label', 'Estado': 'header label', 'Fecha inst': 'header label', 'E.servicio': 'header label', 'Zona': 'header label', 'Cota': 'header label', 'Poblacion': 'header label', });
lyr_depositos_pol_10.set('fieldLabels', {'id': 'header label', 'Nombre': 'header label', 'Titular': 'header label', 'Material': 'header label', 'lam_agua': 'header label', 'Nº vasos': 'header label', 'Volumen': 'header label', 'Tipo': 'header label', 'Acceso': 'header label', 'Telemando': 'header label', 'Fecha cons': 'header label', 'E.servicio': 'header label', 'Poblacion': 'header label', 'Cota': 'header label', });
lyr_depositos_pol_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});