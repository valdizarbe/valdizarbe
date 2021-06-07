ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:25830").setExtent([596662.834978, 4724737.235298, 597842.841122, 4725320.730983]);
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
var format_colectores_2 = new ol.format.GeoJSON();
var features_colectores_2 = format_colectores_2.readFeatures(json_colectores_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_colectores_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_colectores_2.addFeatures(features_colectores_2);
var lyr_colectores_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_colectores_2, 
                style: style_colectores_2,
                interactive: true,
                title: '<img src="styles/legend/colectores_2.png" /> colectores'
            });
var format_pozo_registro_3 = new ol.format.GeoJSON();
var features_pozo_registro_3 = format_pozo_registro_3.readFeatures(json_pozo_registro_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_pozo_registro_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pozo_registro_3.addFeatures(features_pozo_registro_3);
var lyr_pozo_registro_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pozo_registro_3, 
                style: style_pozo_registro_3,
                interactive: true,
                title: '<img src="styles/legend/pozo_registro_3.png" /> pozo_registro'
            });
var format_tuberias_4 = new ol.format.GeoJSON();
var features_tuberias_4 = format_tuberias_4.readFeatures(json_tuberias_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_tuberias_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuberias_4.addFeatures(features_tuberias_4);
var lyr_tuberias_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tuberias_4, 
                style: style_tuberias_4,
                interactive: true,
                title: '<img src="styles/legend/tuberias_4.png" /> tuberias'
            });
var format_bocas_riego_5 = new ol.format.GeoJSON();
var features_bocas_riego_5 = format_bocas_riego_5.readFeatures(json_bocas_riego_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_bocas_riego_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bocas_riego_5.addFeatures(features_bocas_riego_5);
var lyr_bocas_riego_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bocas_riego_5, 
                style: style_bocas_riego_5,
                interactive: true,
                title: '<img src="styles/legend/bocas_riego_5.png" /> bocas_riego'
            });
var format_hidrantes_6 = new ol.format.GeoJSON();
var features_hidrantes_6 = format_hidrantes_6.readFeatures(json_hidrantes_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_hidrantes_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hidrantes_6.addFeatures(features_hidrantes_6);
var lyr_hidrantes_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hidrantes_6, 
                style: style_hidrantes_6,
                interactive: true,
                title: '<img src="styles/legend/hidrantes_6.png" /> hidrantes'
            });
var format_valvulas_7 = new ol.format.GeoJSON();
var features_valvulas_7 = format_valvulas_7.readFeatures(json_valvulas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_valvulas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_valvulas_7.addFeatures(features_valvulas_7);
var lyr_valvulas_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_valvulas_7, 
                style: style_valvulas_7,
                interactive: true,
                title: '<img src="styles/legend/valvulas_7.png" /> valvulas'
            });
var format_depositos_pol_8 = new ol.format.GeoJSON();
var features_depositos_pol_8 = format_depositos_pol_8.readFeatures(json_depositos_pol_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_depositos_pol_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_depositos_pol_8.addFeatures(features_depositos_pol_8);
var lyr_depositos_pol_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_depositos_pol_8, 
                style: style_depositos_pol_8,
                interactive: true,
                title: '<img src="styles/legend/depositos_pol_8.png" /> depositos_pol'
            });

lyr_Mapabase_0.setVisible(true);lyr_Ortofoto2017resolucin25cm_1.setVisible(true);lyr_colectores_2.setVisible(true);lyr_pozo_registro_3.setVisible(true);lyr_tuberias_4.setVisible(true);lyr_bocas_riego_5.setVisible(true);lyr_hidrantes_6.setVisible(true);lyr_valvulas_7.setVisible(true);lyr_depositos_pol_8.setVisible(true);
var layersList = [lyr_Mapabase_0,lyr_Ortofoto2017resolucin25cm_1,lyr_colectores_2,lyr_pozo_registro_3,lyr_tuberias_4,lyr_bocas_riego_5,lyr_hidrantes_6,lyr_valvulas_7,lyr_depositos_pol_8];
lyr_colectores_2.set('fieldAliases', {'id': 'id', 'Titular': 'Titular', 'Material': 'Material', 'Diametro': 'Diametro', 'Longitud': 'Longitud', 'Tipo': 'Tipo', 'Fecha inst': 'Fecha inst', 'E.servicio': 'E.servicio', 'Poblacion': 'Poblacion', });
lyr_pozo_registro_3.set('fieldAliases', {'id': 'id', 'Titular': 'Titular', 'Profundida': 'Profundida', 'Material': 'Material', 'Dim. pozo': 'Dim. pozo', 'Dim. tapa': 'Dim. tapa', 'Mat. tapa': 'Mat. tapa', 'Tapa_clase': 'Tapa_clase', 'Resalto': 'Resalto', 'Fecha.inst': 'Fecha.inst', 'Poblacion': 'Poblacion', 'Cota': 'Cota', });
lyr_tuberias_4.set('fieldAliases', {'id': 'id', 'Titular': 'Titular', 'Diametro': 'Diametro', 'Material': 'Material', 'Longitud': 'Longitud', 'Tipo red': 'Tipo red', 'Fecha inst': 'Fecha inst', 'E.servicio': 'E.servicio', 'Zona': 'Zona', });
lyr_bocas_riego_5.set('fieldAliases', {'id': 'id', 'Codigo': 'Codigo', 'Titular': 'Titular', 'Fabricante': 'Fabricante', 'Modelo': 'Modelo', 'Diametro': 'Diametro', 'Presion': 'Presion', 'Situacion': 'Situacion', 'Fecha inst': 'Fecha inst', 'E.servicio': 'E.servicio', 'Poblacion': 'Poblacion', 'Cota': 'Cota', });
lyr_hidrantes_6.set('fieldAliases', {'id': 'id', 'Codigo': 'Codigo', 'Titular': 'Titular', 'Fabricante': 'Fabricante', 'Modelo': 'Modelo', 'Racor': 'Racor', 'Diametro': 'Diametro', 'Presion': 'Presion', 'Tipo': 'Tipo', 'Situacion': 'Situacion', 'Fecha inst': 'Fecha inst', 'E.servicio': 'E.servicio', 'Poblacion': 'Poblacion', 'Cota': 'Cota', });
lyr_valvulas_7.set('fieldAliases', {'id': 'id', 'Codigo': 'Codigo', 'Titular': 'Titular', 'Tipo': 'Tipo', 'Diametro': 'Diametro', 'Material': 'Material', 'Clase': 'Clase', 'Estado': 'Estado', 'Fecha inst': 'Fecha inst', 'E.servicio': 'E.servicio', 'Zona': 'Zona', 'Cota': 'Cota', 'Poblacion': 'Poblacion', });
lyr_depositos_pol_8.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Titular': 'Titular', 'Material': 'Material', 'lam_agua': 'lam_agua', 'Nº vasos': 'Nº vasos', 'Volumen': 'Volumen', 'Tipo': 'Tipo', 'Acceso': 'Acceso', 'Telemando': 'Telemando', 'Fecha cons': 'Fecha cons', 'E.servicio': 'E.servicio', 'Poblacion': 'Poblacion', 'Cota': 'Cota', });
lyr_colectores_2.set('fieldImages', {'id': 'TextEdit', 'Titular': 'TextEdit', 'Material': 'TextEdit', 'Diametro': 'Range', 'Longitud': 'TextEdit', 'Tipo': 'TextEdit', 'Fecha inst': 'TextEdit', 'E.servicio': 'TextEdit', 'Poblacion': 'TextEdit', });
lyr_pozo_registro_3.set('fieldImages', {'id': 'TextEdit', 'Titular': 'TextEdit', 'Profundida': 'TextEdit', 'Material': 'TextEdit', 'Dim. pozo': 'TextEdit', 'Dim. tapa': 'TextEdit', 'Mat. tapa': 'TextEdit', 'Tapa_clase': 'TextEdit', 'Resalto': 'TextEdit', 'Fecha.inst': 'TextEdit', 'Poblacion': 'TextEdit', 'Cota': 'TextEdit', });
lyr_tuberias_4.set('fieldImages', {'id': 'TextEdit', 'Titular': 'TextEdit', 'Diametro': 'TextEdit', 'Material': 'TextEdit', 'Longitud': 'TextEdit', 'Tipo red': 'TextEdit', 'Fecha inst': 'TextEdit', 'E.servicio': 'TextEdit', 'Zona': 'TextEdit', });
lyr_bocas_riego_5.set('fieldImages', {'id': 'TextEdit', 'Codigo': 'TextEdit', 'Titular': 'TextEdit', 'Fabricante': 'TextEdit', 'Modelo': 'TextEdit', 'Diametro': 'TextEdit', 'Presion': 'TextEdit', 'Situacion': 'TextEdit', 'Fecha inst': 'TextEdit', 'E.servicio': 'TextEdit', 'Poblacion': 'TextEdit', 'Cota': 'TextEdit', });
lyr_hidrantes_6.set('fieldImages', {'id': 'TextEdit', 'Codigo': 'TextEdit', 'Titular': 'TextEdit', 'Fabricante': 'TextEdit', 'Modelo': 'TextEdit', 'Racor': 'TextEdit', 'Diametro': 'TextEdit', 'Presion': 'TextEdit', 'Tipo': 'TextEdit', 'Situacion': 'TextEdit', 'Fecha inst': 'TextEdit', 'E.servicio': 'TextEdit', 'Poblacion': 'TextEdit', 'Cota': 'TextEdit', });
lyr_valvulas_7.set('fieldImages', {'id': 'TextEdit', 'Codigo': 'TextEdit', 'Titular': 'TextEdit', 'Tipo': 'TextEdit', 'Diametro': 'TextEdit', 'Material': 'TextEdit', 'Clase': 'TextEdit', 'Estado': 'TextEdit', 'Fecha inst': 'TextEdit', 'E.servicio': 'TextEdit', 'Zona': 'TextEdit', 'Cota': 'TextEdit', 'Poblacion': 'TextEdit', });
lyr_depositos_pol_8.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Titular': 'TextEdit', 'Material': 'TextEdit', 'lam_agua': 'TextEdit', 'Nº vasos': 'Range', 'Volumen': 'Range', 'Tipo': 'TextEdit', 'Acceso': 'TextEdit', 'Telemando': 'TextEdit', 'Fecha cons': 'TextEdit', 'E.servicio': 'TextEdit', 'Poblacion': 'TextEdit', 'Cota': 'TextEdit', });
lyr_colectores_2.set('fieldLabels', {'id': 'inline label', 'Titular': 'inline label', 'Material': 'inline label', 'Diametro': 'inline label', 'Longitud': 'inline label', 'Tipo': 'inline label', 'Fecha inst': 'inline label', 'E.servicio': 'inline label', 'Poblacion': 'inline label', });
lyr_pozo_registro_3.set('fieldLabels', {'id': 'inline label', 'Titular': 'inline label', 'Profundida': 'inline label', 'Material': 'inline label', 'Dim. pozo': 'inline label', 'Dim. tapa': 'inline label', 'Mat. tapa': 'inline label', 'Tapa_clase': 'inline label', 'Resalto': 'inline label', 'Fecha.inst': 'inline label', 'Poblacion': 'inline label', 'Cota': 'inline label', });
lyr_tuberias_4.set('fieldLabels', {'id': 'inline label', 'Titular': 'inline label', 'Diametro': 'inline label', 'Material': 'inline label', 'Longitud': 'inline label', 'Tipo red': 'inline label', 'Fecha inst': 'inline label', 'E.servicio': 'inline label', 'Zona': 'inline label', });
lyr_bocas_riego_5.set('fieldLabels', {'id': 'inline label', 'Codigo': 'inline label', 'Titular': 'inline label', 'Fabricante': 'inline label', 'Modelo': 'inline label', 'Diametro': 'inline label', 'Presion': 'inline label', 'Situacion': 'inline label', 'Fecha inst': 'inline label', 'E.servicio': 'inline label', 'Poblacion': 'inline label', 'Cota': 'inline label', });
lyr_hidrantes_6.set('fieldLabels', {'id': 'inline label', 'Codigo': 'inline label', 'Titular': 'inline label', 'Fabricante': 'inline label', 'Modelo': 'inline label', 'Racor': 'inline label', 'Diametro': 'inline label', 'Presion': 'inline label', 'Tipo': 'inline label', 'Situacion': 'inline label', 'Fecha inst': 'inline label', 'E.servicio': 'inline label', 'Poblacion': 'inline label', 'Cota': 'inline label', });
lyr_valvulas_7.set('fieldLabels', {'id': 'inline label', 'Codigo': 'inline label', 'Titular': 'inline label', 'Tipo': 'inline label', 'Diametro': 'inline label', 'Material': 'inline label', 'Clase': 'inline label', 'Estado': 'inline label', 'Fecha inst': 'inline label', 'E.servicio': 'inline label', 'Zona': 'inline label', 'Cota': 'inline label', 'Poblacion': 'inline label', });
lyr_depositos_pol_8.set('fieldLabels', {'id': 'inline label', 'Nombre': 'inline label', 'Titular': 'inline label', 'Material': 'inline label', 'lam_agua': 'inline label', 'Nº vasos': 'inline label', 'Volumen': 'inline label', 'Tipo': 'inline label', 'Acceso': 'inline label', 'Telemando': 'inline label', 'Fecha cons': 'inline label', 'E.servicio': 'inline label', 'Poblacion': 'inline label', 'Cota': 'inline label', });
lyr_depositos_pol_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});