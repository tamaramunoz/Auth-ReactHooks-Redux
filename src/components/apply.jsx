
function corporateSale() {
    var datos = {};
    datos.vc_name = $('#vc_name').val();
    datos.vc_email = $('#vc_email').val();
    datos.vc_phone = $('#vc_phone').val();
    datos.vc_mobile = $('#vc_mobile').val();
    datos.vc_msg = $('#vc_msg').val();
    $.ajax({
      accept: 'application/vnd.vtex.ds.v10+json',
      contentType: 'application/json; charset=utf-8',
      crossDomain: true,
      data: JSON.stringify(datos),
      type: 'POST',
      url: '/api/dataentities/VC/documents',
    },

    const enableNewsletterCheck =()=>{
        const opt1 = document.getElementById('opt_in_1');
        const opt2 = document.getElementById('opt_in_2');
        const opt3 = document.getElementById('opt-in-newsletter');
           ((opt1.checked && opt2.checked) == false )
           ? (opt3.disabled = true) && (opt3.checked = false)
           : opt3.disabled = false;
        }
