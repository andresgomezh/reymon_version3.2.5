var ENTIDAD_PEDIDOS='PEDIDOS';
var ENTIDAD_PEDIDOS_DETALLE='PEDIDOS_DETALLE';
var ENTIDAD_PEDIDOS_COLORES='PEDIDOS_COLORES';
var ENTIDAD_TERCEROS='TERCEROS';
var ENTIDAD_SUCURSALES='SUCURSALES';
var ENTIDAD_PUNTOS_ENVIO='PUNTOS_ENVIO';
var ENTIDAD_ITEMS='ITEMS';
var ENTIDAD_MAESTROS='MAESTROS';
var ENTIDAD_MODULOS_CONFIG='MODULOS_CONFIG';
var ENTIDAD_PARAMETROS='PARAMETROS';
var ENTIDAD_OPCIONES_MENU='OPCIONES_MENU';
var ENTIDAD_METACLASS='METACLASS';
var ENTIDAD_LOCALIZACION='LOCALIZACION';
var ENTIDAD_ITEMS_PRECIOS='ITEMS_PRECIOS';
var ENTIDAD_ACTIVIDADES='ACTIVIDADES';
var ENTIDAD_ESTADOS='ESTADOS';
var ENTIDAD_CONTACTOS='CONTACTOS';
var ENTIDAD_USUARIOS='USUARIOS';
var ENTIDAD_CANALES='CANALES';
var ENTIDAD_GRAFICA_DIARIO='GRAFICA_DIARIA';
var ENTIDAD_GRAFICA_MENSUAL='GRAFICA_MENSUAL';

var ENTIDAD_EXTENSION1='EXTENSION1';
var ENTIDAD_EXTENSION2='EXTENSION2';
var ENTIDAD_EXTENSION1_DETALLE='EXTENSION1_DETALLE';
var ENTIDAD_EXTENSION2_DETALLE='EXTENSION2_DETALLE';
var ENTIDAD_ITEM_EXTENSION='ITEM_EXTENSION';
var TABLA_BALANCE='TABLA_BALANCE';
var CONSTATE_SYNCT=0;
var MODAL_SINCRONIZACION=0;
var OFFSET=15000;
var STEP_SINCRONIZACION=
    [
        ENTIDAD_GRAFICA_DIARIO,
        ENTIDAD_GRAFICA_MENSUAL,
        ENTIDAD_EXTENSION1,
        ENTIDAD_EXTENSION2,
        ENTIDAD_EXTENSION1_DETALLE,
        ENTIDAD_EXTENSION2_DETALLE,
        ENTIDAD_ITEM_EXTENSION,
        //                    ENTIDAD_MODULOS_CONFIG,
        //                    ENTIDAD_OPCIONES_MENU,
        //                    ENTIDAD_PARAMETROS,
        ENTIDAD_USUARIOS,
        ENTIDAD_CANALES,
        ENTIDAD_TERCEROS,
        ENTIDAD_SUCURSALES,
        ENTIDAD_MAESTROS,
        ENTIDAD_PUNTOS_ENVIO,
        ENTIDAD_CONTACTOS,
                            ENTIDAD_METACLASS,
                            ENTIDAD_LOCALIZACION,
        ENTIDAD_ITEMS,
        ENTIDAD_ITEMS_PRECIOS,
        ENTIDAD_ESTADOS,
        ENTIDAD_ACTIVIDADES,
        ENTIDAD_PEDIDOS,
        ENTIDAD_PEDIDOS_DETALLE,
        ENTIDAD_PEDIDOS_COLORES,
        TABLA_BALANCE
];

var STEP_SUBIRDATOS=
    [
    ENTIDAD_PEDIDOS,
    //ENTIDAD_PEDIDOS_DETALLE,
    ENTIDAD_ACTIVIDADES
    
    ];
var DATABASE='Reymon00000477';
var TIPO_SINCRONIZACION='MANUAL'
var DATOS_ENTIDADES_SINCRONIZACION = [];
var CUR_USER=[];
var ALMACENARDATOS=[];
var ROWIDPEDIDO;
var MODULO_PEDIDO_NUEVO='PEDIDO_NUEVO';
var SINCRONIZACION_ESTADO=false;
var ULTIMA_EMPRESA_SINCRONIZADA='';
var GRAFICA_DIA_LABEL=[];
var GRAFICA_DIA_CANTIDAD=[];
var GRAFICA_MES_LABEL=[];
var GRAFICA_MES_CANTIDAD=[];
var TABLA_BALANCE_DATOS=[];
//var SERVIDOR_ENVIO_PEDIDOS='http://localhost:45091/Mobile/sync/'
//var SERVIDOR_ENVIO_PEDIDOS='http://localhost:45091/Mobile/syncV2/'
//var SERVIDOR_ENVIO_PEDIDOS='http://reymonpruebas.pedidosonline.co/Mobile/sync/'
var SERVIDOR_ENVIO_PEDIDOS='http://reymon.pedidosonline.co/Mobile/syncv2/'
var SERVIDOR_ENVIO_ACTIVIDADES='http://reymon.pedidosonline.co/Mobile/SubirDatos?'
var SERVIDOR_LOGIN='http://reymon.pedidosonline.co/Mobile/Loginkey?';
var SERVIDOR_INSTALACION='http://reymon.pedidosonline.co/Mobile/Instalacion?'
//var SERVIDOR_ENVIO_PEDIDOS='http://reymonpruebas.pedidosonline.co/Mobile/sync?'
//var SERVIDOR_ENVIO_ACTIVIDADES='http://reymonpruebas.pedidosonline.co/Mobile/SubirDatos?'
//var SERVIDOR_LOGIN='http://reymonpruebas.pedidosonline.co/Mobile/Loginkey?';
//var SERVIDOR_INSTALACION='http://reymonpruebas.pedidosonline.co/Mobile/Instalacion?'
