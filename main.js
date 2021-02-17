/*global document*/
let print1 = document.getElementById('pyramid1');
let print2 = document.getElementById('pyramid2');
let print3 = document.getElementById('pyramid3');
let print4 = document.getElementById('pyramid4');
let print5 = document.getElementById('pyramid5');
let print6 = document.getElementById('pyramid6');
let size = 10;
let output1 = '';
let output2 = '';
let output3 = '';
let output4 = '';
let output5 = '';
let output6 = '';

for(let row = 0; row < size; row++) {
    
    for(let col1 = 0; col1 < row; col1++){
        
        output1 += '<span style="opacity: 0">*</span>';
        output2 += '<span style="opacity: 0">*</span>';
        output3 += '<span style="opacity: 0">*</span>';
        output4 += '<span style="opacity: 0">*</span>';
        output5 += '<span style="opacity: 0">*</span>';
        output6 += '<span style="opacity: 0">*</span>';
    }   
    for(let col2 = row; col2 < size; col2++) {
    
        output1 += (col2 % 2 === 0) ? "<span style='color:red'>*</span>" : "<span style='color:green'>*</span>";
        output2 += (col2 % 2 !== 0) ? "<span style='color:red'>*</span>" : "<span style='color:green'>*</span>";
        output3 += (((col2 + row) % 2) === 0) ? "<span style='color:red'>*</span>" : "<span style='color:green'>*</span>";
        output4 += (((col2 + row) % 2) !== 0) ? "<span style='color:red'>*</span>" : "<span style='color:green'>*</span>";
        output5 += (row % 2 === 0) ? "<span style='color:red'>*</span>" : "<span style='color:green'>*</span>";
        output6 += (row % 2 !== 0) ? "<span style='color:red'>*</span>" : "<span style='color:green'>*</span>";
    }  
    output1 += '<br />';
    output2 += '<br />';
    output3 += '<br />';
    output4 += '<br />';
    output5 += '<br />';
    output6 += '<br />';  
}
print1.innerHTML = output1 + '1';
print2.innerHTML = output2 + '2';
print3.innerHTML = output3 + '3';
print4.innerHTML = output4 + '4';
print5.innerHTML = output5 + '5';
print6.innerHTML = output6 + '6';