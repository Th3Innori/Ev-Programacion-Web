$(function(){
    $('.btnEnviar').click(function(){
        if($.trim($('.txtEmail').val())=="")
        {
            alert("Falta especificar el correo");
            $('.txtEmail').focus();
        }
        // validar que el correo tenga el formato correcto
        else if(! (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test($.trim($('.txtEmail').val()))))
        {
            alert("El formato del correo no es correcto");
            $('.txtEmail').focus();
        }
        else
        {
            alert('Los datos enviados son: \n' + $('.txtEmail').val()
            )
        }
    })
})