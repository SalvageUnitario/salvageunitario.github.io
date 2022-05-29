function validate() {
      
    if( document.myForm.Name.value == "" ) {
       alert( "Por favor ingrese su nombre" );
       document.myForm.Name.focus() ;
       return false;
    }
    if( document.myForm.EMail.value == "" ) {
       alert( "Por favor ingrese su eMail" );
       document.myForm.EMail.focus() ;
       return false;
    }
    if( document.myForm.Provincia.value == "") {
       alert( "Por favor ingrese su provincia" );
       document.myForm.Provicina.focus() ;
       return false;
    }
    if( document.myForm.Country.value == "-1" ) {
       alert( "Por favor ingrese su país" );
       return false;
    }
    return( true );
}