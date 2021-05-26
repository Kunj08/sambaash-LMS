// Section A

$("input[name=SAA1]").on("change",function(){
  $("#id_A1").val($(this).val());
});

$("input[name=SAA2]").on("change",function(){
  $("#id_A2").val($(this).val());
});

$("input[name=SAA3]").on("change",function(){
  $("#id_A3").val($(this).val());
});

$("input[name=SAE1]").on("change",function(){
  $("#id_E1").val($(this).val());
});

$("input[name=SAE2]").on("change",function(){
  $("#id_E2").val($(this).val());
});

$("input[name=SAE3]").on("change",function(){
  $("#id_E3").val($(this).val());
});

$("input[name=SAP1]").on("change",function(){
  $("#id_P1").val($(this).val());
});

$("input[name=SAP2]").on("change",function(){
  $("#id_P2").val($(this).val());
});

$("input[name=SAP3]").on("change",function(){
  $("#id_P3").val($(this).val());
});

$("input[name=SAN1]").on("change",function(){
  $("#id_N1").val($(this).val());
});

$("input[name=SAN2]").on("change",function(){
  $("#id_N2").val($(this).val());
});

$("input[name=SAN3]").on("change",function(){
  $("#id_N3").val($(this).val());
});

$("input[name=SAH1]").on("change",function(){
  $("#id_H1").val($(this).val());
});

$("input[name=SAH2]").on("change",function(){
  $("#id_H2").val($(this).val());
});

$("input[name=SAH3]").on("change",function(){
  $("#id_H3").val($(this).val());
});

$("input[name=SAM1]").on("change",function(){
  $("#id_M1").val($(this).val());
});

$("input[name=SAM2]").on("change",function(){
  $("#id_M2").val($(this).val());
});

$("input[name=SAM3]").on("change",function(){
  $("#id_M3").val($(this).val());
});

$("input[name=SAR1]").on("change",function(){
  $("#id_R1").val($(this).val());
});

$("input[name=SAR2]").on("change",function(){
  $("#id_R2").val($(this).val());
});

$("input[name=SAR3]").on("change",function(){
  $("#id_R3").val($(this).val());
});

$("input[name=SALon]").on("change",function(){
  $("#id_Lon").val($(this).val());
});

$("input[name=SAhap]").on("change",function(){
  $("#id_hap").val($(this).val());
});

// SECTION B

$("input[name=SBQ1]").on("change",function(){
  $("#id_Q1").val($(this).val());
});

$("input[name=SBQ2]").on("change",function(){
  $("#id_Q2").val($(this).val());
});

$("input[name=SBQ3]").on("change",function(){
  $("#id_Q3").val($(this).val());
});

$("input[name=SBQ4]").on("change",function(){
  $("#id_Q4").val($(this).val());
});

$("input[name=SBQ5]").on("change",function(){
  $("#id_Q5").val($(this).val());
});

$("input[name=SBQ6]").on("change",function(){
  $("#id_Q6").val($(this).val());
});

$("input[name=SBQ7]").on("change",function(){
  $("#id_Q7").val($(this).val());
});

$("input[name=SBQ8]").on("change",function(){
  $("#id_Q8").val($(this).val());
});

$("input[name=SBQ9]").on("change",function(){
  $("#id_Q9").val($(this).val());
});

$("input[name=SBQ10]").on("change",function(){
  $("#id_Q10").val($(this).val());
});

$("input[name=SBQ11]").on("change",function(){
  $("#id_Q11").val($(this).val());
});

$("input[name=SBQ12]").on("change",function(){
  $("#id_Q12").val($(this).val());
});


// SECTION C
$("#CHQ1").on("change",function(){
  if($(this).is(":checked")){
    $("#id_going_beyond_stress").attr("checked",true);
  }else{
    $("#id_going_beyond_stress").attr("checked",false);
  }
});

$("#CHQ2").on("change",function(){
  if($(this).is(":checked")){
    $("#id_finding_sustained_happiness").attr("checked",true);
  }else{
    $("#id_finding_sustained_happiness").attr("checked",false);
  }
});

$("#CHQ3").on("change",function(){
  if($(this).is(":checked")){
    $("#id_mental_emotional_wellness").attr("checked",true);
  }else{
    $("#id_mental_emotional_wellness").attr("checked",false);
  }
});

$("#CHQ4").on("change",function(){
  if($(this).is(":checked")){
    $("#id_positive_parenting").attr("checked",true);
  }else{
    $("#id_positive_parenting").attr("checked",false);
  }
});

$("#CHQ5").on("change",function(){
  if($(this).is(":checked")){
    $("#id_healthy_relationship").attr("checked",true);
  }else{
    $("#id_healthy_relationship").attr("checked",false);
  }
});

$("#CHQ6").on("change",function(){
  if($(this).is(":checked")){
    $("#id_accelerated_professional_growth").attr("checked",true);
  }else{
    $("#id_accelerated_professional_growth").attr("checked",false);
  }
});

$("#CHQ7").on("change",function(){
  if($(this).is(":checked")){
    $("#id_healthy_lifestyle").attr("checked",true);
  }else{
    $("#id_healthy_lifestyle").attr("checked",false);
  }
});
$("#id_user").val($("#loginUserId").text());

// Form validation

function formValidation(){
  var chqBox = $("#form-validate *").filter(":input[type=checkbox]:checked");
  var nextSubmit = false;
  if(chqBox.length <= 0 || chqBox.length > 2){
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
      $('.toast-body').text('Please Follow All Assement questions in Section "A" and "B"');
      setTimeout(function(){$('.toast').toast('hide');},5000);
  }else{
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
  }else{
    $("#collapseThree .card-body p#w-display").addClass("d-none");
    nextSubmit = true;
  }
  if(nextSubmit){
    $("#submittedBtn").click();
  }
}

$(document).ready(function(){
  doMentalWellbeingAssessment();
});

//Start Score interpretation

function scoreInterpretation(score){
   //
   var interpretation = "";
   var line1 = "";
   var line2 = "";
   //
   if ( score <= 1 ){
        interpretation = "Very Low";
        line1 = "Your life experience, productivity & wellbeing are currently severly getting impacted by Stress. It is recommended that you pay attention to your yourself and take immediate & concrete steps towards your wellbeing.";
        line2 = "The eLearning under \"Work Beyond Stress\" along with the Tools for Transformation will be very helpful for you to create an inner balance and enhance your state of wellbeing.";
    } else if ( score <= 2 ){
        interpretation = "Low";
        line1 = "Your life experience, productivity & wellbeing are currently getting impacted by high levels of Stress. It is recommended that you pay attention to your yourself and take immediate steps towards your wellbeing.";
        line2 = "The eLearning under \"Work Beyond Stress\" along with the Tools for Transformation will be very helpful for you to create an inner balance and enhance your state of wellbeing.";
    } else if ( score <= 3 ){
        interpretation = "Slightly below average";
        line1 = "Your life experience, productivity & wellbeing are currently getting impacted by high levels of Stress. It is recommended that you pay attention to your yourself and take immediate steps towards your wellbeing.";
        line2 = "The eLearning under \"Work Beyond Stress\" along with the Tools for Transformation will be very helpful for you to create an inner balance and enhance your state of wellbeing.";
    } else if ( score <= 4 ){
        interpretation = "Moderate";
        line1 = "Your life experience, productivity & wellbeing are currently getting impacted by Stress. You may be used to a certain way of feeling stressed that you assume is normal.";
        line2 = "The eLearning under \"Work Beyond Stress\" along with the Tools for Transformation will help you in creating an inner balance and enhance your current state of wellbeing.";
    } else if ( score <= 4.5 ){
        interpretation = "High";
        line1 = "You seem to be comfortable in handling multiple areas of activity with ease.";
        line2 = "You could make use of the eLearning under \"Work Beyond Stress\" along with the Tools for Transformation to enhance your current state of wellbeing further.";
    } else if ( score > 4.5 ){
        interpretation = "Very High";
        line1 = "You seem to be able to handle work and life situations with ease.";
        line2 = "You could explore the eLearning under \"Work Beyond Stress\" along with the Tools for inner balance & transformation to further enhance your capacity to deal creatively and efficiently with events and circumstances.";
    }
    return [interpretation, line1, line2];
}


//Start Gauging Interest & Priorities Assessment

function doGaugingInterestPriorities(){
    var j = 0;
    var line3 = [["","",""],["","",""]];
    for(i = 0; i<7; i++){
        var line3_1 = "", line3_2 = "under", line3_3 = "";
        //alert(item);
        var chqBox = $("#resultForm *").filter(":input[type=checkbox]");
        debugger;
        // var item = "panelGIP_" + i;
        if (chqBox[i].checked == true){
            if (i == 0) {
                line3_1 = '"Insight into Stress"';
                line3_3 = '"Life Beyond Stress"';
            } else if (i == 1) {
                line3_1 = '"Happiness - What they didn\'t teach you in B-School!"';
                line3_3 = '"Mastering Emotional & Mental Wellbeing"';
            } else if (i == 1) {
                line3_1 = '"Happiness - What they didn\'t teach you in B-School!"';
                line3_3 = '"Mastering Emotional & Mental Wellbeing"';
            } else if (i == 2) {
                line3_1 = '"Deconstructing Mental Wellbeing"';
                line3_3 = '"Mastering Emotional & Mental Wellbeing"';
            } else if (i == 3) {
                line3_1 = '"Relationship Stress"';
                line3_3 = '"Life Beyond Stress"';
            } else if (i == 4) {
                line3_1 = '"Relationship Stress"';
                line3_3 = '"Life Beyond Stress"';
            } else if (i == 5) {
                line3_1 = '"Stressed out in the workplace?"';
                line3_3 = '"Life Beyond Stress"';
            } else if (i == 6) {
                line3_1 = '"Conscious Living to Beat Stress"';
                line3_3 = '"Life Beyond Stress"';
            } else if (i == 7) {
                line3_1 = '"Conscious Living to Beat Stress"';
                line3_2 = "";
                line3_3 = "";
            }
            line3[j] = [line3_1, line3_2, line3_3];
            j = j + 1;
        }
    }

    return [line3[0], line3[1]];
}

function doStressAssessment() {
    var constantlyCount = 0;
    var oftenRegularlyCount = 0;
    var onceInAWayCount = 0;
    var neverCount = 0;
    //
    var interpretation = "";
    var stressScore = -1;
    //
    var undefinedCount = 0;
    for (i = 1; i <= 12; i++)
    {
        var item = '#id_Q' + i;
        //console.log(item);
        var stressQA = $(item).val();
        if ( stressQA  === undefined) {
           undefinedCount = undefinedCount +1;
        } else {
            if (stressQA.toLowerCase() === "constantly".toLowerCase()){
                constantlyCount = constantlyCount + 1;
            } else if (stressQA.toLowerCase() === "oftenRegularly".toLowerCase()){
                oftenRegularlyCount = oftenRegularlyCount + 1;
            } else if (stressQA.toLowerCase() === "onceInAWay".toLowerCase()){
                onceInAWayCount = onceInAWayCount + 1;
            } else if (stressQA.toLowerCase() === "never".toLowerCase()){
                neverCount = neverCount + 1;
            }
        }
        //alert("value: " + data.panelStressQuestions[item]);
    }
    if ( undefinedCount > 0 ) {
       return -1;
    }
    //
    if ( constantlyCount >= 4 ){
        interpretation = "Very High";
        stressScore = 0;
    } else if ( constantlyCount > 0 ){
        interpretation = "High";
        stressScore = 1;
    } else if ( oftenRegularlyCount >= 4 ){
        interpretation = "High";
        stressScore = 2;
    } else if ( oftenRegularlyCount > 0 ){
        interpretation = "Moderate";
        stressScore = 3;
    } else if ( onceInAWayCount >= 4 ){
        interpretation = "Moderate";
        stressScore = 3;
    } else if ( onceInAWayCount > 0 ){
        interpretation = "Low";
        stressScore = 4;
    } else {
        interpretation = "Very Low";
        stressScore = 5;
    }
    //alert("stress score: " + stressScore);
    return [stressScore,interpretation];
}

function doMentalWellbeingAssessment() {
  if($("#resultForm").length !== 0){
    var P = (Number($("#id_P1").val()) + Number($("#id_P2").val()) + Number($("#id_P3").val())) / 3;
    var E = (Number($("#id_E1").val()) + Number($("#id_E2").val()) + Number($("#id_E3").val())) / 3;
    var A = (Number($("#id_A1").val()) + Number($("#id_A2").val()) + Number($("#id_A3").val())) / 3;
    var R = (Number($("#id_R1").val()) + Number($("#id_R2").val()) + Number($("#id_R3").val())) / 3;
    var M = (Number($("#id_M1").val()) + Number($("#id_M2").val()) + Number($("#id_M3").val())) / 3;
    var N = (Number($("#id_N1").val()) + Number($("#id_N2").val()) + Number($("#id_N3").val()) + Number($("#id_Lon").val())) / 4;
    var H = (Number($("#id_H1").val()) + Number($("#id_H2").val()) + Number($("#id_H3").val())) / 3;
    var hap = (Number($("#id_hap").val()));
    var wellbeingScoreTotal = P + E + R + M + A + hap + H + (5 - N);
    var stressAssessmentResult = doStressAssessment();

    var stressScore = stressAssessmentResult[0];
    var overallScore = ( stressScore + wellbeingScoreTotal ) / 9;
    var interpretation = scoreInterpretation(overallScore);
    var line3 = doGaugingInterestPriorities();

    var resultRes = "";
    resultRes += "<tr><td>Positive Emotions like feeling Joyful, positive & contented</td><td>"+scoreInterpretation(P)[0]+"</td></tr>";
    resultRes += "<tr><td>Engagement</td><td>"+scoreInterpretation(E)[0]+"</td></tr>";
    resultRes += "<tr><td>Feeling of Accomplishment</td><td>"+scoreInterpretation(A)[0]+"</td></tr>";
    resultRes += "<tr><td>Feeling of being loved in relationships</td><td>"+scoreInterpretation(R)[0]+"</td></tr>";
    resultRes += "<tr><td>Sense of purpose & Meaning in life</td><td>"+scoreInterpretation(M)[0]+"</td></tr>";
    resultRes += "<tr><td>Negative emotions like sadness, anger, anxiety & loneliness</td><td>"+scoreInterpretation(N)[0]+"</td></tr>";
    resultRes += "<tr><td>Impression of own state of Health</td><td>"+scoreInterpretation(H)[0]+"</td></tr>";

    resultRes += "<tr><td>Overall Level of Stress</td><td>"+stressAssessmentResult[1]+"</td></tr>";
    resultRes += "<tr><td>Overall Level of Wellbeing</td><td>"+interpretation[0]+"</td></tr>";
    $("#result-table tbody").html(resultRes);
    var line3Str = "<p> 1 ) " + line3[0][0] + " " + line3[0][1] + " " + line3[0][2] + "</p>";
    line3Str += "<p> 2 ) " + line3[1][0] + " " + line3[1][1] + " " + line3[1][2] + "</p>";
    $(".insprio").html(line3Str);
    $("#levelOfStressSentance1").html(interpretation[1]);
    $("#levelOfStressSentance2").html(interpretation[2]);
  }
}
