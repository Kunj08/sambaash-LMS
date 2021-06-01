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

$("#CHQ8").on("change",function(){
  if($(this).is(":checked")){
    $("#id_coping_with_the_covid_situation").attr("checked",true);
  }else{
    $("#id_coping_with_the_covid_situation").attr("checked",false);
  }
});
$("#id_user").val($("#loginUserId").text());

// Form validation



// $(document).ready(function(){
//   doMentalWellbeingAssessment();
// });

//Start Score interpretation

function scoreInterpretation(score){
   //
   var interpretation = "";
   var line1 = "";
   var line2 = "";
   //
   if ( score <= 1 ){
        interpretation = "Very Low";
        line1 = "Thank you for your participation! It seems that currently your life experience, productivity & wellbeing are significantly impacted. It is recommended that you pay attention and take immediate steps towards your wellbeing.";
        line2 = "The Modules under \"Work Beyond Stress\" along with the Tools for Transformation will be very helpful for you to find an inner balance and enhance your state of wellbeing.";
    } else if ( score <= 2 ){
        interpretation = "Low";
        line1 = "Thank you for your participation! It seems that currently your life experience, productivity & wellbeing are significantly impacted.  It is recommended that you pay attention to yourself and take immediate steps towards your wellbeing.";
        line2 = "The Modules under \"Work Beyond Stress\" along with the Tools for Transformation will be very helpful for you to create an inner balance and enhance your state of wellbeing.";
    } else if ( score <= 3 ){
        interpretation = "Slightly below average";
        line1 = "Thank you for your participation! It seems that currently your life experience, productivity & wellbeing are getting adversely impacted by Stress. It is recommended that you pay attention to yourself and take tangible steps towards your wellbeing";
        line2 = "The Modules under \"Work Beyond Stress\" along with the Tools for Transformation will be very helpful for you to create an inner balance and enhance your current state of wellbeing";
    } else if ( score <= 4 ){
        interpretation = "Moderate";
        line1 = "Congratulations! For the most part, currently you seem to be able to handle  work and life situations with ease, though your life experience, productivity & wellbeing are getting somewhat impacted by stress. You may have got used to a certain way of feeling stressed that you assume is normal.";
        line2 = "The Modules under \"Work Beyond Stress\" along with the Tools for Transformation will help you to further enhance your current capacity to deal creatively and efficiently with events and circumstances.";
    } else if ( score <= 4.5 ){
        interpretation = "High";
        line1 = "Congratulations! It seems that you are comfortably able to handle multiple areas of activity with ease.";
        line2 = "The Modules under \"Work Beyond Stress\" along with the Tools for Transformation will help you to further enhance your current capacity to deal creatively and efficiently with events and circumstances.";
    } else if ( score > 4.5 ){
        interpretation = "Very High";
        line1 = "Congratulations! It seems that you are comfortably able to handle multiple work and life situations with ease.";
        line2 = "You could explore the Modules under \"Work Beyond Stress\" along with the Tools for inner balance & transformation to further enhance your current capacity to deal creatively and efficiently with events and circumstances";
    }
    return [score, line1, line2];
}


//Start Gauging Interest & Priorities Assessment

function doGaugingInterestPriorities(){
    var j = 0;
    var line3 = [["","",""],["","",""]];
    var chqBox = $("#resultForm *").filter(":input[type=checkbox]");

    for(i = 0; i<chqBox.length; i++){
        var line3_1 = "", line3_2 = "under", line3_3 = "";
        //alert(item);
        
        // var item = "panelGIP_" + i;
        if (chqBox[i].checked == true){
            if (i == 0) {
                line3_1 = '"Insight into Stress"';
                line3_3 = '"Life Beyond Stress"';
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
                line3_1 = '"Handling these Challenging Times"';
                line3_2 = '"Equipping yourself for The Corona Era"';
                line3_3 = "";
            }
            line3[j] = [line3_1, line3_2, line3_3];
            j = j + 1;
        }
    }

    return [line3[0], line3[1]];
}

function doStressAssessment() {

    var stressCount = 0;
    var finalStressScore = 0;
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
            stressCount += Number(stressQA)
        }
        //alert("value: " + data.panelStressQuestions[item]);
    }
    if ( undefinedCount > 0 ) {
       return -1;
    }
    finalStressScore = stressCount/12;
    return finalStressScore;
}

function doMentalWellbeingAssessment() {
  if($("#resultForm").length !== 0){
    var P = roundScore((Number($("#id_P1").val()) + Number($("#id_P2").val()) + Number($("#id_P3").val())) / 3);
    var E = roundScore((Number($("#id_E1").val()) + Number($("#id_E2").val()) + Number($("#id_E3").val())) / 3);
    var A = roundScore((Number($("#id_A1").val()) + Number($("#id_A2").val()) + Number($("#id_A3").val())) / 3);
    var R = roundScore((Number($("#id_R1").val()) + Number($("#id_R2").val()) + Number($("#id_R3").val())) / 3);
    var M = roundScore((Number($("#id_M1").val()) + Number($("#id_M2").val()) + Number($("#id_M3").val())) / 3);
    var N = roundScore((Number($("#id_N1").val()) + Number($("#id_N2").val()) + Number($("#id_N3").val()) + Number($("#id_Lon").val())) / 4);
    var H = roundScore((Number($("#id_H1").val()) + Number($("#id_H2").val()) + Number($("#id_H3").val())) / 3);
    var hap = roundScore((Number($("#id_hap").val())));
    var wellbeingScoreTotal = roundScore(P + E + R + M + A + hap + H + (5 - N));
    var stressAssessmentResult = doStressAssessment();

    //var stressScore = stressAssessmentResult[0];
    var overallScore = roundScore(((5-stressAssessmentResult)+wellbeingScoreTotal)/9);//( stressScore + wellbeingScoreTotal ) / 9;
    var interpretation = scoreInterpretation(overallScore);
    var line3 = doGaugingInterestPriorities();

    var resultRes1 = "";
    var textBet = "";
    var resultRes2 = "";
    resultRes1 += "<tr><td>Feeling of emotions like joy, positivity & contentment</td><td>"+scoreInterpretation(P)[0]+"</td></tr>";
    resultRes1 += "<tr><td>Engagement</td><td>"+scoreInterpretation(E)[0]+"</td></tr>";
    resultRes1 += "<tr><td>Feeling of accomplishment</td><td>"+scoreInterpretation(A)[0]+"</td></tr>";
    resultRes1 += "<tr><td>Feeling of being loved in relationships</td><td>"+scoreInterpretation(R)[0]+"</td></tr>";
    resultRes1 += "<tr><td>Sense of purpose & meaning in life</td><td>"+scoreInterpretation(M)[0]+"</td></tr>";
    resultRes1 += "<tr><td>Feeling of emotions like sadness, anger, anxiety or loneliness</td><td>"+scoreInterpretation(N)[0]+"</td></tr>";
    resultRes1 += "<tr><td>Impression of own state of health</td><td>"+scoreInterpretation(H)[0]+"</td></tr>";
    resultRes1 += "<tr><td>Overall level of stress</td><td>"+roundScore(stressAssessmentResult)+"</td></tr>";
    textBet += "<p><b>The above parameters represent the pillars of Wellbeing. Higher the score on a parameter, more is its presence in your life and its impact on your overall state of wellbeing.</b></p>";
    textBet += "<p><b>Accordingly, your score on overall state of wellbeing, based on the above parameters is:</b></p>";
    resultRes2 += "<tr><td>Overall level of wellbeing</td><td>"+interpretation[0]+"</td></tr>";
    $("#result-table1 tbody").html(resultRes1);
    $("#betText").html(textBet);
    $("#result-table2 tbody").html(resultRes2);

    var line3Str = "<p> 1 ) " + line3[0][0] + " chapter " + line3[0][1] + " " + line3[0][2] + " module</p>";
    line3Str += "<p> 2 ) " + line3[1][0] + " chapter " + line3[1][1] + " " + line3[1][2] + " module</p>";
    $(".insprio").html(line3Str);
    $("#levelOfStressSentance1").html(interpretation[1]);
    $("#levelOfStressSentance2").html(interpretation[2]);
  }
}


function roundScore(num) {
    return +(Math.round(num * 10)  /  10);
}
