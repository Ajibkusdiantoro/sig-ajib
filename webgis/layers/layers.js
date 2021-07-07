var wms_layers = [];
var format_tokomdrn_0 = new ol.format.GeoJSON();
var features_tokomdrn_0 = format_tokomdrn_0.readFeatures(json_tokomdrn_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tokomdrn_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_tokomdrn_0.addFeatures(features_tokomdrn_0);var lyr_tokomdrn_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tokomdrn_0, 
                style: style_tokomdrn_0,
    title: 'toko mdrn<br />\
    <img src="styles/legend/tokomdrn_0_0.png" /> Ambarawa<br />\
    <img src="styles/legend/tokomdrn_0_1.png" /> Bancak<br />\
    <img src="styles/legend/tokomdrn_0_2.png" /> Banyubiru<br />\
    <img src="styles/legend/tokomdrn_0_3.png" /> Bawen<br />\
    <img src="styles/legend/tokomdrn_0_4.png" /> Bergas<br />\
    <img src="styles/legend/tokomdrn_0_5.png" /> Bringin<br />\
    <img src="styles/legend/tokomdrn_0_6.png" /> Getasan<br />\
    <img src="styles/legend/tokomdrn_0_7.png" /> Jambu<br />\
    <img src="styles/legend/tokomdrn_0_8.png" /> Kaliwungu<br />\
    <img src="styles/legend/tokomdrn_0_9.png" /> Pabelan<br />\
    <img src="styles/legend/tokomdrn_0_10.png" /> Pringapus<br />\
    <img src="styles/legend/tokomdrn_0_11.png" /> Rawa Pening<br />\
    <img src="styles/legend/tokomdrn_0_12.png" /> Sumowono<br />\
    <img src="styles/legend/tokomdrn_0_13.png" /> Suruh<br />\
    <img src="styles/legend/tokomdrn_0_14.png" /> Susukan<br />\
    <img src="styles/legend/tokomdrn_0_15.png" /> Tengaran<br />\
    <img src="styles/legend/tokomdrn_0_16.png" /> Tuntang<br />\
    <img src="styles/legend/tokomdrn_0_17.png" /> Ungaran<br />\
    <img src="styles/legend/tokomdrn_0_18.png" /> <br />'
        });var format_jml_psrtrd_1 = new ol.format.GeoJSON();
var features_jml_psrtrd_1 = format_jml_psrtrd_1.readFeatures(json_jml_psrtrd_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jml_psrtrd_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_jml_psrtrd_1.addFeatures(features_jml_psrtrd_1);var lyr_jml_psrtrd_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jml_psrtrd_1, 
                style: style_jml_psrtrd_1,
    title: 'jml_psrtrd<br />\
    <img src="styles/legend/jml_psrtrd_1_0.png" /> Ambarawa<br />\
    <img src="styles/legend/jml_psrtrd_1_1.png" /> Bancak<br />\
    <img src="styles/legend/jml_psrtrd_1_2.png" /> Banyubiru<br />\
    <img src="styles/legend/jml_psrtrd_1_3.png" /> Bawen<br />\
    <img src="styles/legend/jml_psrtrd_1_4.png" /> Bergas<br />\
    <img src="styles/legend/jml_psrtrd_1_5.png" /> Bringin<br />\
    <img src="styles/legend/jml_psrtrd_1_6.png" /> Getasan<br />\
    <img src="styles/legend/jml_psrtrd_1_7.png" /> Jambu<br />\
    <img src="styles/legend/jml_psrtrd_1_8.png" /> Kaliwungu<br />\
    <img src="styles/legend/jml_psrtrd_1_9.png" /> Pabelan<br />\
    <img src="styles/legend/jml_psrtrd_1_10.png" /> Pringapus<br />\
    <img src="styles/legend/jml_psrtrd_1_11.png" /> Rawa Pening<br />\
    <img src="styles/legend/jml_psrtrd_1_12.png" /> Sumowono<br />\
    <img src="styles/legend/jml_psrtrd_1_13.png" /> Suruh<br />\
    <img src="styles/legend/jml_psrtrd_1_14.png" /> Susukan<br />\
    <img src="styles/legend/jml_psrtrd_1_15.png" /> Tengaran<br />\
    <img src="styles/legend/jml_psrtrd_1_16.png" /> Tuntang<br />\
    <img src="styles/legend/jml_psrtrd_1_17.png" /> Ungaran<br />\
    <img src="styles/legend/jml_psrtrd_1_18.png" /> <br />'
        });var format_petakabsemarang_2 = new ol.format.GeoJSON();
var features_petakabsemarang_2 = format_petakabsemarang_2.readFeatures(json_petakabsemarang_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_petakabsemarang_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_petakabsemarang_2.addFeatures(features_petakabsemarang_2);var lyr_petakabsemarang_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_petakabsemarang_2, 
                style: style_petakabsemarang_2,
    title: 'peta kab semarang<br />\
    <img src="styles/legend/petakabsemarang_2_0.png" /> Rendah<br />\
    <img src="styles/legend/petakabsemarang_2_1.png" /> Sedang<br />\
    <img src="styles/legend/petakabsemarang_2_2.png" /> Tinggi<br />\
    <img src="styles/legend/petakabsemarang_2_3.png" /> <br />'
        });

lyr_tokomdrn_0.setVisible(true);lyr_jml_psrtrd_1.setVisible(true);lyr_petakabsemarang_2.setVisible(true);
var layersList = [lyr_tokomdrn_0,lyr_jml_psrtrd_1,lyr_petakabsemarang_2];
lyr_tokomdrn_0.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'KECAMATAN': 'KECAMATAN', 'KODE_KEC': 'KODE_KEC', 'KODE_KAB': 'KODE_KAB', 'SHAPE_LENG': 'SHAPE_LENG', 'KODE_PROP': 'KODE_PROP', 'KABUPATEN': 'KABUPATEN', 'SHAPE_LE_1': 'SHAPE_LE_1', 'SHAPE_AREA': 'SHAPE_AREA', 'jml_psrtrd': 'jml_psrtrd', 'toko mdrn': 'toko mdrn', 'total skor': 'total skor', 'kelas': 'kelas', });
lyr_jml_psrtrd_1.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'KECAMATAN': 'KECAMATAN', 'KODE_KEC': 'KODE_KEC', 'KODE_KAB': 'KODE_KAB', 'SHAPE_LENG': 'SHAPE_LENG', 'KODE_PROP': 'KODE_PROP', 'KABUPATEN': 'KABUPATEN', 'SHAPE_LE_1': 'SHAPE_LE_1', 'SHAPE_AREA': 'SHAPE_AREA', 'jml_psrtrd': 'jml_psrtrd', 'toko mdrn': 'toko mdrn', 'total skor': 'total skor', 'kelas': 'kelas', });
lyr_petakabsemarang_2.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'KECAMATAN': 'KECAMATAN', 'KODE_KEC': 'KODE_KEC', 'KODE_KAB': 'KODE_KAB', 'SHAPE_LENG': 'SHAPE_LENG', 'KODE_PROP': 'KODE_PROP', 'KABUPATEN': 'KABUPATEN', 'SHAPE_LE_1': 'SHAPE_LE_1', 'SHAPE_AREA': 'SHAPE_AREA', 'jml_psrtrd': 'jml_psrtrd', 'toko mdrn': 'toko mdrn', 'total skor': 'total skor', 'kelas': 'kelas', });
lyr_tokomdrn_0.set('fieldImages', {'PROVINSI': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KODE_KEC': 'TextEdit', 'KODE_KAB': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'KODE_PROP': 'TextEdit', 'KABUPATEN': 'TextEdit', 'SHAPE_LE_1': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'jml_psrtrd': 'TextEdit', 'toko mdrn': 'TextEdit', 'total skor': 'TextEdit', 'kelas': 'TextEdit', });
lyr_jml_psrtrd_1.set('fieldImages', {'PROVINSI': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KODE_KEC': 'TextEdit', 'KODE_KAB': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'KODE_PROP': 'TextEdit', 'KABUPATEN': 'TextEdit', 'SHAPE_LE_1': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'jml_psrtrd': 'TextEdit', 'toko mdrn': 'TextEdit', 'total skor': 'TextEdit', 'kelas': 'TextEdit', });
lyr_petakabsemarang_2.set('fieldImages', {'PROVINSI': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KODE_KEC': 'TextEdit', 'KODE_KAB': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'KODE_PROP': 'TextEdit', 'KABUPATEN': 'TextEdit', 'SHAPE_LE_1': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'jml_psrtrd': 'TextEdit', 'toko mdrn': 'TextEdit', 'total skor': 'TextEdit', 'kelas': 'TextEdit', });
lyr_tokomdrn_0.set('fieldLabels', {'PROVINSI': 'inline label', 'KECAMATAN': 'inline label', 'KODE_KEC': 'inline label', 'KODE_KAB': 'inline label', 'SHAPE_LENG': 'inline label', 'KODE_PROP': 'inline label', 'KABUPATEN': 'inline label', 'SHAPE_LE_1': 'inline label', 'SHAPE_AREA': 'inline label', 'jml_psrtrd': 'inline label', 'toko mdrn': 'inline label', 'total skor': 'inline label', 'kelas': 'inline label', });
lyr_jml_psrtrd_1.set('fieldLabels', {'PROVINSI': 'inline label', 'KECAMATAN': 'inline label', 'KODE_KEC': 'inline label', 'KODE_KAB': 'inline label', 'SHAPE_LENG': 'inline label', 'KODE_PROP': 'inline label', 'KABUPATEN': 'inline label', 'SHAPE_LE_1': 'inline label', 'SHAPE_AREA': 'inline label', 'jml_psrtrd': 'inline label', 'toko mdrn': 'inline label', 'total skor': 'inline label', 'kelas': 'inline label', });
lyr_petakabsemarang_2.set('fieldLabels', {'PROVINSI': 'inline label', 'KECAMATAN': 'inline label', 'KODE_KEC': 'inline label', 'KODE_KAB': 'inline label', 'SHAPE_LENG': 'inline label', 'KODE_PROP': 'inline label', 'KABUPATEN': 'inline label', 'SHAPE_LE_1': 'inline label', 'SHAPE_AREA': 'inline label', 'jml_psrtrd': 'inline label', 'toko mdrn': 'inline label', 'total skor': 'inline label', 'kelas': 'inline label', });
lyr_petakabsemarang_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});