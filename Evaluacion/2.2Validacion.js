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
        else if($.trim($('.txtPassword').val())=="")
        {
            alert("Falta especificar la Contraseña");
            $('.txtPassword').focus();
        }
        // permitir que la clave contenga letras y numeros
        else if(!(/^[a-zA-Z0-9]+$/.test($.trim($('.txtPassword').val()))))
        {
            alert("El formato de la Contraseña no es válido su contraseña debe tener almenos una mayuscula y numeros");
            $('.txtPassword').focus();
        }
        else
        {
            alert('Los datos enviados son: \n' + $('.txtEmail').val() + ' '
                                                + $('.txtPassword').val()
            )
        }
    })
})