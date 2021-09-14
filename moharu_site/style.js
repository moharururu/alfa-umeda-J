document.getElementById("value-6").onclick = function(){
    document.getElementById("value-6").style.display = "none";
    document.getElementById("value-5").style.display = "block";
}
document.getElementById("value-5").onclick = function(){
    document.getElementById("value-5").style.display = "none";
    document.getElementById("value-4").style.display = "block";
}
document.getElementById("value-4").onclick = function(){
    document.getElementById("normal").style.display = "none";
    document.getElementById("black").style.display = "block"
    document.getElementById("value-4").style.display = "none";
    document.getElementById("value-3").style.display = "block";
}
document.getElementById("value-3").onclick = function(){
    document.getElementById("value-3").style.display = "none";
    document.getElementById("value-2").style.display = "block";
}
document.getElementById("value-2").onclick = function(){
    document.getElementById("value-2").style.display = "none";
    document.getElementById("value-1").style.display = "block";
}
document.getElementById("value-1").onclick = function(){
    document.getElementById("value-1").style.display = "none";
    document.getElementById("value").style.display = "block";
}
document.getElementById("value").onclick = function(){
    document.getElementById("value").style.display = "none";
    document.getElementById("value1").style.display = "block";
}
document.getElementById("value1").onclick = function(){
    document.getElementById("value1").style.display = "none";
    document.getElementById("value2").style.display = "block";
}
document.getElementById("value2").onclick = function(){
    document.getElementById("value2").style.display = "none";
    document.getElementById("value3").style.display = "block";
}
document.getElementById("value3").onclick = function(){
    document.getElementById("bg_1").style.display ="none"
    document.getElementById("black").style.display = "none"
    document.getElementById("value3").style.display = "none";
    document.getElementById("value4").style.display = "block";
}
document.getElementById("value4").onclick = function(){
    document.getElementById("value4").style.display = "none";
    document.getElementById("value5").style.display = "block";
     document.getElementById("bg_2").style.display = "block"
}
document.getElementById("value5").onclick = function(){
    document.getElementById("value5").style.display = "none";
    document.getElementById("value6").style.display = "block";
}
document.getElementById("value6").onclick = function(){
    document.getElementById("value6").style.display = "none";
    document.getElementById("value7").style.display = "block";
}
document.getElementById("value7").onclick = function(){
    document.getElementById("value7").style.display = "none";
    document.getElementById("value8").style.display = "block";
}
document.getElementById("value8").onclick = function(){
    document.getElementById("value8").style.display = "none";
    document.getElementById("value9").style.display = "block";
}
document.getElementById("value9").onclick = function(){
    document.getElementById("value9").style.display = "none";
    document.getElementById("value10").style.display = "block";
}
document.getElementById("value10").onclick = function(){
    document.getElementById("value10").style.display = "none";
    document.getElementById("value11").style.display = "block";
    document.getElementById("happy").style.display = "block";
}
document.getElementById("value11").onclick = function(){
    document.getElementById("value11").style.display = "none";
    document.getElementById("value12").style.display = "block";
    document.getElementById("happy").style.display = "none";
}
document.getElementById("value12").onclick = function(){
    document.getElementById("value12").style.display = "none";
    document.getElementById("value13").style.display = "block";
}
document.getElementById("value13").onclick = function(){
    document.getElementById("value13").style.display = "none";
    document.getElementById("value14").style.display = "block";
}
document.getElementById("value14").onclick = function(){
    document.getElementById("value14").style.display = "none";
    document.getElementById("value15").style.display = "block";
}
document.getElementById("value15").onclick = function(){
    document.getElementById("value15").style.display = "none";
    document.getElementById("bg_5").style.display = "block";
    document.getElementById("key_get").style.display = "block";
}
document.getElementById("key_get").onclick = function(){
    document.getElementById("value16").style.display = "block";
    document.getElementById("bg_5").style.display = "none";
    document.getElementById("key_get").style.display = "none";
}
document.getElementById("value16").onclick = function(){
    document.getElementById("value16").style.display = "none";
    document.getElementById("value17").style.display = "block";
}
document.getElementById("value17").onclick = function(){
    document.getElementById("value17").style.display = "none";
    document.getElementById("value18").style.display = "block";
    document.getElementById("bg_2").style.display = "none";
    document.getElementById("bg_3").style.display = "block";
}
document.getElementById("value18").onclick = function(){
    document.getElementById("value18").style.display = "none";
    document.getElementById("value19").style.display = "block";
}
document.getElementById("value19").onclick = function(){
    document.getElementById("value19").style.display = "none";
    document.getElementById("value20").style.display = "block";
}
document.getElementById("value20").onclick = function(){
    document.getElementById("s_t").style.display = "block";
    document.getElementById("s_l").style.display = "flex";
}
document.getElementById("living").onclick = function(){
    document.getElementById("value20").style.display = "none";
    document.getElementById("value21").style.display = "block";
    document.getElementById("monooki_v").style.display = "none";
    document.getElementById("rougoku_v").style.display = "none";
}
document.getElementById("monooki").onclick = function(){
    document.getElementById("value20").style.display = "none";
    document.getElementById("value21").style.display = "none";
    document.getElementById("monooki_v").style.display = "block";
    document.getElementById("rougoku_v").style.display = "none";
}
document.getElementById("rougoku").onclick = function(){
    document.getElementById("value21").style.display = "none";
    document.getElementById("value20").style.display = "none";
    document.getElementById("rougoku_v").style.display = "block";
    document.getElementById("monooki_v").style.display = "none";
}
document.getElementById("value21").onclick = function(){
    document.getElementById("value21").style.display = "none";
    document.getElementById("value22").style.display = "block";
    document.getElementById("s_t").style.display = "none";
    document.getElementById("s_l").style.display = "none";

}
document.getElementById("value22").onclick = function(){
    document.getElementById("value22").style.display = "none";
    document.getElementById("value23").style.display = "block";
}
document.getElementById("value23").onclick = function(){
    document.getElementById("value23").style.display = "none";
    document.getElementById("value24").style.display = "block";
}
document.getElementById("value24").onclick = function(){
    document.getElementById("value24").style.display = "none";
    document.getElementById("q_t_1").style.display = "block";
    document.getElementById("s_p").style.display = "flex";

}
function check_1(){
    const input_1 = document.getElementById("input-message");
    const input_value = input_1.value;
    let v_1 = "410";
    if (input_value == v_1){
        document.getElementById("value25").style.display = "block";
        document.getElementById("s_p").style.display = "none";
    }else{
        document.getElementById("value_q_a").innerHTML = "不正解...もう一度考えてみよう";
    }
}
document.getElementById("value25").onclick = function(){
    document.getElementById("value25").style.display = "none";
    document.getElementById("value26").style.display = "block";
}
document.getElementById("value26").onclick = function(){
    document.getElementById("value26").style.display = "none";
    document.getElementById("value27").style.display = "block";
}

document.getElementById("value27").onclick = function(){
    document.getElementById("value27").style.display = "none";
    document.getElementById("tel").style.display = "block";
}
document.getElementById("tel").onclick = function(){
    document.getElementById("value28").style.display = "block";
}
document.getElementById("value28").onclick = function(){
    document.getElementById("value28").style.display = "none";
    document.getElementById("value29").style.display = "block";
    document.getElementById("miki").style.display = "block";
}
document.getElementById("value29").onclick = function(){
    document.getElementById("value29").style.display = "none";
    document.getElementById("value30").style.display = "block";
}
document.getElementById("value30").onclick = function(){
    document.getElementById("value30").style.display = "none";
    document.getElementById("value31").style.display = "block";
}
document.getElementById("value31").onclick = function(){
    document.getElementById("value31").style.display = "none";
    document.getElementById("value32").style.display = "block";
}
document.getElementById("value32").onclick = function(){
    document.getElementById("value32").style.display = "none";
    document.getElementById("value33").style.display = "block";
}
document.getElementById("value33").onclick = function(){
    document.getElementById("value33").style.display = "none";
    document.getElementById("value34").style.display = "block";
}
document.getElementById("value34").onclick = function(){
    document.getElementById("value34").style.display = "none";
    document.getElementById("value35").style.display = "block";
}
document.getElementById("value35").onclick = function(){
    document.getElementById("value35").style.display = "none";
    document.getElementById("value36").style.display = "block";
}
document.getElementById("value36").onclick = function(){
    document.getElementById("value36").style.display = "none";
    document.getElementById("value37").style.display = "block";
}
document.getElementById("value37").onclick = function(){
    document.getElementById("value37").style.display = "none";
    document.getElementById("value38").style.display = "block";
}
document.getElementById("value38").onclick = function(){
    document.getElementById("value38").style.display = "none";
    document.getElementById("value39").style.display = "block";
}
document.getElementById("value39").onclick = function(){
    document.getElementById("value39").style.display = "none";
    document.getElementById("tel").style.display = "none";
    document.getElementById("s_l_1").style.display = "block";
    document.getElementById("s_t").style.display = "block";
    document.getElementById("miki").style.display = "none";
}
document.getElementById("living_1").onclick = function(){
    document.getElementById("value41").style.display = "none";
    document.getElementById("value43").style.display = "none";
    document.getElementById("value40").style.display = "block";
}
document.getElementById("monooki_1").onclick = function(){
    document.getElementById("value40").style.display = "none";
    document.getElementById("value41").style.display = "block"
    document.getElementById("value43").style.display = "none";
}
document.getElementById("rougoku_1").onclick = function(){
    document.getElementById("value40").style.display = "none";
    document.getElementById("value41").style.display = "none";
    document.getElementById("value43").style.display = "block"
}
document.getElementById("value41").onclick = function(){
    document.getElementById("value42").style.display = "block";
    document.getElementById("value43").style.display = "none";
    document.getElementById("value41").style.display = "none";
    document.getElementById("q_t_2").style.display = "block";
    document.getElementById("s_p_1").style.display = "block";
    document.getElementById("living_1").style.display = "none"
    document.getElementById("rougoku_1").style.display = "none"
    document.getElementById("s_t").style.display = "none"
    document.getElementById("monooki_1").style.display = "none"
    document.getElementById("s_l_1").style.display = "none"
}
document.getElementById("value42").onclick = function(){
    document.getElementById("value42").style.display = "none";
    document.getElementById("q_t_2").style.display = "block";
    document.getElementById("s_p_1").style.display = "block";
}
function check_2(){
    const input_1 = document.getElementById("input-message1");
    const input_value = input_1.value;
    let v_1 = "めんへら";
    if (input_value == v_1){
        document.getElementById("s_p_1").style.display = "none";
        document.getElementById("value44").style.display = "block";
    }else{
        document.getElementById("value_q_a").innerHTML = "不正解...もう一度考えてみよう";
    }
}
document.getElementById("value44").onclick = function(){
    document.getElementById("value44").style.display = "none";
    document.getElementById("value45").style.display = "block";
    document.getElementById("miki").style.display = "block";
}
document.getElementById("value45").onclick = function(){
    document.getElementById("miki").style.display = "none";
    document.getElementById("value45").style.display = "none";
    document.getElementById("s_l_2").style.display = "block";
}
document.getElementById("living_r").onclick = function(){
    document.getElementById("monooki_2").style.display = "none";
    document.getElementById("rougoku_2").style.display = "none";
    document.getElementById("living_2").style.display = "block";
}
document.getElementById("monooki_r").onclick = function(){
    document.getElementById("rougoku_2").style.display = "none";
    document.getElementById("monooki_2").style.display = "block"
    document.getElementById("living_2").style.display = "none";
}
document.getElementById("rougoku_r").onclick = function(){
    document.getElementById("living_2").style.display = "none";
    document.getElementById("monooki_2").style.display = "none";
    document.getElementById("rougoku_2").style.display = "block"
}
document.getElementById("monooki_2").onclick = function(){
    document.getElementById("rougoku_2").style.display = "none";
    document.getElementById("living_2").style.display = "none";
    document.getElementById("monooki_2").style.display = "none";
    document.getElementById("s_l_2").style.display = "none";
    document.getElementById("ittann").style.display = "block";
    document.getElementById("s_p_2").style.display = "block";
}
function check_3(){
    const input_1 = document.getElementById("input-message2");
    const input_value = input_1.value;
    let v_1 = "ろーぷ";
    if (input_value == v_1){
        document.getElementById("s_p_2").style.display = "none";
        document.getElementById("ittann").style.display = "none";
        document.getElementById("clear").style.display = "block";
    }else{
        document.getElementById("value_q_a").innerHTML = "不正解...もう一度考えてみよう";
    }
}
document.getElementById("clear").onclick = function(){
    document.getElementById("clear").style.display = "none";
    document.getElementById("value46").style.display = "block";
}

document.getElementById("value46").onclick = function(){
    document.getElementById("value46").style.display = "none";
    document.getElementById("value47").style.display = "block";
    document.getElementById("miki").style.display = "block";
}
document.getElementById("value47").onclick = function(){
    document.getElementById("value47").style.display = "none";
    document.getElementById("value48").style.display = "block";
    document.getElementById("miki").style.display = "none";
}
document.getElementById("value48").onclick = function(){
    document.getElementById("value48").style.display = "none";
    document.getElementById("value49").style.display = "block";
    document.getElementById("bg_4").style.display = "block";
    document.getElementById("bg_3").style.display = "none";
}
document.getElementById("value49").onclick = function(){
    document.getElementById("value49").style.display = "none";
    document.getElementById("value50").style.display = "block";
}
document.getElementById("value50").onclick = function(){
    document.getElementById("value50").style.display = "none";
    document.getElementById("value51").style.display = "block";
}
document.getElementById("value51").onclick = function(){
    document.getElementById("value51").style.display = "none";
    document.getElementById("value52").style.display = "block";
}
document.getElementById("value52").onclick = function(){
    document.getElementById("value52").style.display = "none";
    document.getElementById("value53").style.display = "block";
}
document.getElementById("value53").onclick = function(){
    document.getElementById("value53").style.display = "none";
    document.getElementById("value54").style.display = "block";
}
