function formValidation(){
  var chqBox = $("#form-validate *").filter(":input[type=checkbox]:checked");
  var nextSubmit = false;
  if(chqBox.length <= 0 || chqBox.length < 2 || chqBox.length > 2){
    // alert("Please take top two areas of interest or priority for you in section C!");
    var modal = $('#errorModel');
    modal.find('.modal-body').text('Please take top two areas of interest or priority for you in section C!');
    $("#errorModel").modal();
    return false;
  }
  if($("input[name=SAA1]:checked").length <= 0 ||
    $("input[name=SAA2]:checked").length <= 0 ||
    $("input[name=SAA3]:checked").length <= 0 ||
    $("input[name=SAP1]:checked").length <= 0 ||
    $("input[name=SAP2]:checked").length <= 0 ||
    $("input[name=SAP3]:checked").length <= 0 ||
    $("input[name=SAE1]:checked").length <= 0 ||
    $("input[name=SAE2]:checked").length <= 0 ||
    $("input[name=SAE3]:checked").length <= 0 ||
    $("input[name=SAN1]:checked").length <= 0 ||
    $("input[name=SAN2]:checked").length <= 0 ||
    $("input[name=SAN3]:checked").length <= 0 ||
    $("input[name=SALon]:checked").length <= 0 ||
    $("input[name=SAH1]:checked").length <= 0 ||
    $("input[name=SAH2]:checked").length <= 0 ||
    $("input[name=SAH3]:checked").length <= 0 ||
    $("input[name=SAM1]:checked").length <= 0 ||
    $("input[name=SAM2]:checked").length <= 0 ||
    $("input[name=SAM3]:checked").length <= 0 ||
    $("input[name=SAR1]:checked").length <= 0 ||
    $("input[name=SAR2]:checked").length <= 0 ||
    $("input[name=SAR3]:checked").length <= 0 ||
    $("input[name=SAhap]:checked").length <= 0){
      $("#collapseTwo .card-body p small").css("color","red");
      $("#collapseTwo .card-body p#w-display").removeClass("d-none");
      nextSubmit = false;
      $('.toast').toast('show');
      $('.toast').css('visibility','visible');
      $('.toast-body').text('Please Follow All Assement questions in Section "A" or "B"');
      setTimeout(function(){$('.toast').toast('hide');},5000);
      if($("input[name=SAA1]:checked").length <= 0){
        $("#SATD1 input[type=radio]").closest(".b1").addClass("border1");
        $("#SATD1 input[type=radio]").closest(".b2").addClass("border2");
        $("#SATD1 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SATD1 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SATD1 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SATD1 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SAA2]:checked").length <= 0){
        $("#SATD5 input[type=radio]").closest(".b1").addClass("border1");
        $("#SATD5 input[type=radio]").closest(".b2").addClass("border2");
        $("#SATD5 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SATD5 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SATD5 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SATD5 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SAA3]:checked").length <= 0){
        $("#SATD15 input[type=radio]").closest(".b1").addClass("border1");
        $("#SATD15 input[type=radio]").closest(".b2").addClass("border2");
        $("#SATD15 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SATD15 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SATD15 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SATD15 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SAP1]:checked").length <= 0){
        $("#SATD3 input[type=radio]").closest(".b1").addClass("border1");
        $("#SATD3 input[type=radio]").closest(".b2").addClass("border2");
        $("#SATD3 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SATD3 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SATD3 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SATD3 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SAP2]:checked").length <= 0){
        $("#SATD13 input[type=radio]").closest(".b1").addClass("border1");
        $("#SATD13 input[type=radio]").closest(".b2").addClass("border2");
        $("#SATD13 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SATD13 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SATD13 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SATD13 input[type=radio]").closest(".b3").removeClass("border3");
      }

      if($("input[name=SAP3]:checked").length <= 0){
        $("#SATD22 input[type=radio]").closest(".b1").addClass("border1");
        $("#SATD22 input[type=radio]").closest(".b2").addClass("border2");
        $("#SATD22 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SATD22 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SATD22 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SATD22 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SAE1]:checked").length <= 0){
        $("#SATD2 input[type=radio]").closest(".b1").addClass("border1");
        $("#SATD2 input[type=radio]").closest(".b2").addClass("border2");
        $("#SATD2 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SATD2 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SATD2 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SATD2 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SAE2]:checked").length <= 0){
        $("#SATD10 input[type=radio]").closest(".b1").addClass("border1");
        $("#SATD10 input[type=radio]").closest(".b2").addClass("border2");
        $("#SATD10 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SATD10 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SATD10 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SATD10 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SAE3]:checked").length <= 0){
        $("#SATD17 input[type=radio]").closest(".b1").addClass("border1");
        $("#SATD17 input[type=radio]").closest(".b2").addClass("border2");
        $("#SATD17 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SATD17 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SATD17 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SATD17 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SAN1]:checked").length <= 0){
        $("#SATD4 input[type=radio]").closest(".b1").addClass("border1");
        $("#SATD4 input[type=radio]").closest(".b2").addClass("border2");
        $("#SATD4 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SATD4 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SATD4 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SATD4 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SAN2]:checked").length <= 0){
        $("#SATD14 input[type=radio]").closest(".b1").addClass("border1");
        $("#SATD14 input[type=radio]").closest(".b2").addClass("border2");
        $("#SATD14 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SATD14 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SATD14 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SATD14 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SAN3]:checked").length <= 0){
        $("#SATD16 input[type=radio]").closest(".b1").addClass("border1");
        $("#SATD16 input[type=radio]").closest(".b2").addClass("border2");
        $("#SATD16 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SATD16 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SATD16 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SATD16 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SALon]:checked").length <= 0){
        $("#SATD11 input[type=radio]").closest(".b1").addClass("border1");
        $("#SATD11 input[type=radio]").closest(".b2").addClass("border2");
        $("#SATD11 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SATD11 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SATD11 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SATD11 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SAH1]:checked").length <= 0){
        $("#SATD6 input[type=radio]").closest(".b1").addClass("border1");
        $("#SATD6 input[type=radio]").closest(".b2").addClass("border2");
        $("#SATD6 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SATD6 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SATD6 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SATD6 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SAH2]:checked").length <= 0){
        $("#SATD12 input[type=radio]").closest(".b1").addClass("border1");
        $("#SATD12 input[type=radio]").closest(".b2").addClass("border2");
        $("#SATD12 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SATD12 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SATD12 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SATD12 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SAH3]:checked").length <= 0){
        $("#SATD18 input[type=radio]").closest(".b1").addClass("border1");
        $("#SATD18 input[type=radio]").closest(".b2").addClass("border2");
        $("#SATD18 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SATD18 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SATD18 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SATD18 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SAM1]:checked").length <= 0){
        $("#SATD7 input[type=radio]").closest(".b1").addClass("border1");
        $("#SATD7 input[type=radio]").closest(".b2").addClass("border2");
        $("#SATD7 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SATD7 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SATD7 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SATD7 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SAM2]:checked").length <= 0){
        $("#SATD9 input[type=radio]").closest(".b1").addClass("border1");
        $("#SATD9 input[type=radio]").closest(".b2").addClass("border2");
        $("#SATD9 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SATD9 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SATD9 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SATD9 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SAM3]:checked").length <= 0){
        $("#SATD20 input[type=radio]").closest(".b1").addClass("border1");
        $("#SATD20 input[type=radio]").closest(".b2").addClass("border2");
        $("#SATD20 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SATD20 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SATD20 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SATD20 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SAR1]:checked").length <= 0){
        $("#SATD8 input[type=radio]").closest(".b1").addClass("border1");
        $("#SATD8 input[type=radio]").closest(".b2").addClass("border2");
        $("#SATD8 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SATD8 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SATD8 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SATD8 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SAR2]:checked").length <= 0){
        $("#SATD19 input[type=radio]").closest(".b1").addClass("border1");
        $("#SATD19 input[type=radio]").closest(".b2").addClass("border2");
        $("#SATD19 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SATD19 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SATD19 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SATD19 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SAR3]:checked").length <= 0){
        $("#SATD21 input[type=radio]").closest(".b1").addClass("border1");
        $("#SATD21 input[type=radio]").closest(".b2").addClass("border2");
        $("#SATD21 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SATD21 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SATD21 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SATD21 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SAhap]:checked").length <= 0){
        $("#SATD23 input[type=radio]").closest(".b1").addClass("border1");
        $("#SATD23 input[type=radio]").closest(".b2").addClass("border2");
        $("#SATD23 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SATD23 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SATD23 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SATD23 input[type=radio]").closest(".b3").removeClass("border3");
      }
  }else{
    $("#SATD1 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SATD1 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SATD1 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SATD2 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SATD2 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SATD2 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SATD3 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SATD3 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SATD3 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SATD4 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SATD4 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SATD4 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SATD5 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SATD5 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SATD5 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SATD6 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SATD6 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SATD6 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SATD7 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SATD7 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SATD7 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SATD8 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SATD8 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SATD8 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SATD9 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SATD9 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SATD9 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SATD10 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SATD10 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SATD10 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SATD11 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SATD11 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SATD11 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SATD12 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SATD12 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SATD12 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SATD13 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SATD13 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SATD13 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SATD14 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SATD14 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SATD14 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SATD15 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SATD15 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SATD15 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SATD16 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SATD16 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SATD16 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SATD17 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SATD17 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SATD17 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SATD18 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SATD18 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SATD18 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SATD19 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SATD19 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SATD19 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SATD20 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SATD20 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SATD20 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SATD21 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SATD21 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SATD21 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SATD22 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SATD22 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SATD22 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SATD23 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SATD23 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SATD23 input[type=radio]").closest(".b3").removeClass("border3");
    $("#collapseTwo .card-body p#w-display").addClass("d-none");
    nextSubmit = true;
  }

  if($("input[name=SBQ1]:checked").length <= 0 ||
    $("input[name=SBQ2]:checked").length <= 0 ||
    $("input[name=SBQ3]:checked").length <= 0 ||
    $("input[name=SBQ4]:checked").length <= 0 ||
    $("input[name=SBQ5]:checked").length <= 0 ||
    $("input[name=SBQ6]:checked").length <= 0 ||
    $("input[name=SBQ7]:checked").length <= 0 ||
    $("input[name=SBQ8]:checked").length <= 0 ||
    $("input[name=SBQ9]:checked").length <= 0 ||
    $("input[name=SBQ10]:checked").length <= 0 ||
    $("input[name=SBQ11]:checked").length <= 0 ||
    $("input[name=SBQ12]:checked").length <= 0){
      $("#collapseThree .card-body p small").css("color","red");
      $("#collapseThree .card-body p#w-display").removeClass("d-none");
      nextSubmit = false;
      $('.toast').toast('show');
      $('.toast').css('visibility','visible');
      $('.toast-body').text('Please Follow All Assement questions in Section "A" or "B"');
      setTimeout(function(){$('.toast').toast('hide');},5000);
      if($("input[name=SBQ1]:checked").length <= 0){
        $("#SBTD1 input[type=radio]").closest(".b1").addClass("border1");
        $("#SBTD1 input[type=radio]").closest(".b2").addClass("border2");
        $("#SBTD1 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SBTD1 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SBTD1 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SBTD1 input[type=radio]").closest(".b3").removeClass("border3");
      }

      if($("input[name=SBQ2]:checked").length <= 0){
        $("#SBTD2 input[type=radio]").closest(".b1").addClass("border1");
        $("#SBTD2 input[type=radio]").closest(".b2").addClass("border2");
        $("#SBTD2 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SBTD2 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SBTD2 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SBTD2 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SBQ3]:checked").length <= 0){
        $("#SBTD3 input[type=radio]").closest(".b1").addClass("border1");
        $("#SBTD3 input[type=radio]").closest(".b2").addClass("border2");
        $("#SBTD3 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SBTD3 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SBTD3 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SBTD3 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SBQ4]:checked").length <= 0){
        $("#SBTD4 input[type=radio]").closest(".b1").addClass("border1");
        $("#SBTD4 input[type=radio]").closest(".b2").addClass("border2");
        $("#SBTD4 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SBTD4 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SBTD4 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SBTD4 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SBQ5]:checked").length <= 0){
        $("#SBTD5 input[type=radio]").closest(".b1").addClass("border1");
        $("#SBTD5 input[type=radio]").closest(".b2").addClass("border2");
        $("#SBTD5 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SBTD5 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SBTD5 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SBTD5 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SBQ6]:checked").length <= 0){
        $("#SBTD6 input[type=radio]").closest(".b1").addClass("border1");
        $("#SBTD6 input[type=radio]").closest(".b2").addClass("border2");
        $("#SBTD6 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SBTD6 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SBTD6 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SBTD6 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SBQ7]:checked").length <= 0){
        $("#SBTD7 input[type=radio]").closest(".b1").addClass("border1");
        $("#SBTD7 input[type=radio]").closest(".b2").addClass("border2");
        $("#SBTD7 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SBTD7 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SBTD7 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SBTD7 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SBQ8]:checked").length <= 0){
        $("#SBTD8 input[type=radio]").closest(".b1").addClass("border1");
        $("#SBTD8 input[type=radio]").closest(".b2").addClass("border2");
        $("#SBTD8 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SBTD8 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SBTD8 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SBTD8 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SBQ9]:checked").length <= 0){
        $("#SBTD9 input[type=radio]").closest(".b1").addClass("border1");
        $("#SBTD9 input[type=radio]").closest(".b2").addClass("border2");
        $("#SBTD9 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SBTD9 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SBTD9 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SBTD9 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SBQ10]:checked").length <= 0){
        $("#SBTD10 input[type=radio]").closest(".b1").addClass("border1");
        $("#SBTD10 input[type=radio]").closest(".b2").addClass("border2");
        $("#SBTD10 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SBTD10 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SBTD10 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SBTD10 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SBQ11]:checked").length <= 0){
        $("#SBTD11 input[type=radio]").closest(".b1").addClass("border1");
        $("#SBTD11 input[type=radio]").closest(".b2").addClass("border2");
        $("#SBTD11 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SBTD11 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SBTD11 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SBTD11 input[type=radio]").closest(".b3").removeClass("border3");
      }
      if($("input[name=SBQ12]:checked").length <= 0){
        $("#SBTD12 input[type=radio]").closest(".b1").addClass("border1");
        $("#SBTD12 input[type=radio]").closest(".b2").addClass("border2");
        $("#SBTD12 input[type=radio]").closest(".b3").addClass("border3");
      }else{
        $("#SBTD12 input[type=radio]").closest(".b1").removeClass("border1");
        $("#SBTD12 input[type=radio]").closest(".b2").removeClass("border2");
        $("#SBTD12 input[type=radio]").closest(".b3").removeClass("border3");
      }
  }else{
    $("#SBTD1 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SBTD1 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SBTD1 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SBTD2 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SBTD2 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SBTD2 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SBTD3 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SBTD3 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SBTD3 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SBTD4 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SBTD4 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SBTD4 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SBTD5 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SBTD5 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SBTD5 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SBTD6 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SBTD6 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SBTD6 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SBTD7 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SBTD7 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SBTD7 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SBTD8 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SBTD8 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SBTD8 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SBTD9 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SBTD9 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SBTD9 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SBTD10 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SBTD10 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SBTD10 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SBTD11 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SBTD11 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SBTD11 input[type=radio]").closest(".b3").removeClass("border3");

    $("#SBTD12 input[type=radio]").closest(".b1").removeClass("border1");
    $("#SBTD12 input[type=radio]").closest(".b2").removeClass("border2");
    $("#SBTD12 input[type=radio]").closest(".b3").removeClass("border3");
    $("#collapseThree .card-body p#w-display").addClass("d-none");
    nextSubmit = true;
  }
  if(nextSubmit){
    $("#submittedBtn").click();
  }
}
