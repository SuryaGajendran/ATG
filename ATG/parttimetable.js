// let period = document.getElementById("period")

let teach = document.getElementById("teach")

let day11 = document.getElementById("day11")
let day12 = document.getElementById("day12")
let day13 = document.getElementById("day13")
let day14 = document.getElementById("day14")
let day15 = document.getElementById("day15")
let day16 = document.getElementById("day16")

let day21 = document.getElementById("day21")
let day22 = document.getElementById("day22")
let day23 = document.getElementById("day23")
let day24 = document.getElementById("day24")
let day25 = document.getElementById("day25")
let day26 = document.getElementById("day26")

let day31 = document.getElementById("day31")
let day32 = document.getElementById("day32")
let day33 = document.getElementById("day33")
let day34 = document.getElementById("day34")
let day35 = document.getElementById("day35")
let day36 = document.getElementById("day36")

let day41 = document.getElementById("day41")
let day42 = document.getElementById("day42")
let day43 = document.getElementById("day43")
let day44 = document.getElementById("day44")
let day45 = document.getElementById("day45")
let day46 = document.getElementById("day46")



let day1 = [day11,day12,day13,day14,day15,day16]
let day2 = [day21,day22,day23,day24,day25,day26]
let day3 = [day31,day32,day33,day34,day35,day36]
let day4 = [day41,day42,day43,day44,day45,day46]

let dname = ["mon","tue","wed","thur","fri","sat"]


let next = document.getElementById("next")
next.addEventListener("click",()=>{

    let count=document.getElementById("count")
    count.style.display="none"

    let val = document.getElementById("value")
    val.style.display="block";
   

    for(i=0;i<teach.value;i++){
        let val = document.getElementById("value")

        let br = document.createElement("br")
        val.appendChild(br)
        
        let lab = document.createElement("label")
        val.appendChild(lab)
        lab.textContent=`teacher ${i+1}   `

        let inp = document.createElement("input")
        val.appendChild(inp)
        inp.setAttribute("id",`inp${i+1}`)
        inp.className="inpu"

        

        let br1 = document.createElement("br")
        val.appendChild(br1)

        if(i===teach.value-1){
            let b = document.createElement("button")
            val.appendChild(b)
            b.setAttribute("id","sub")
            b.textContent="submit"
        }

    }
    let b = document.getElementById("sub")
    b.addEventListener("click",()=>{
        let clas1 = document.getElementsByClassName("inpu")
        let x = Array.from(clas1)
        
        let y=x.map((val)=>{
            return val.value
        })

        console.log(y)

        let val=document.getElementById("value")
        val.style.display="none"
        

        let table1 = document.getElementById("outable1")
        table1.style.display="inline-block"
        let table2 = document.getElementById("outable2")
        table2.style.display="inline-block"
        let table3 = document.getElementById("outable3")
        table3.style.display="inline-block"
        let table4 = document.getElementById("outable4")
        table4.style.display="inline-block"

        
        for(i=0;i<=6;i++){
            let d1 = document.createElement("td")
            day1[i].appendChild(d1)
            d1.textContent=dname[i]
            let d2 = document.createElement("td")
            day2[i].appendChild(d2)
            d2.textContent=dname[i]
            let d3 = document.createElement("td")
            day3[i].appendChild(d3)
            d3.textContent=dname[i]
            let d4 = document.createElement("td")
            day4[i].appendChild(d4)
            d4.textContent=dname[i]
            
            for(j=0;j<=2;j++){
    
                let p1 = document.createElement("td")
                
                let z1=y[Math.floor(Math.random()*y.length)]
                let p2 = document.createElement("td")
                
                let z2=y[Math.floor(Math.random()*y.length)]
                let p3 = document.createElement("td")
                
                let z3=y[Math.floor(Math.random()*y.length)]
                let p4 = document.createElement("td")
                
                let z4=y[Math.floor(Math.random()*y.length)]

                if(z1===z2){
                    j--;
                }
                else if(z1===z3){
                    j--;
                }
                else if(z1===z4){
                    j--;
                }
                else if(z2===z3){
                    j--;
                }
                else if(z2===z4){
                    j--;
                }
                else if(z3===z4){
                    j--;
                }
                else{
                    day1[i].appendChild(p1)
                    p1.textContent=z1;
                    day2[i].appendChild(p2)
                    p2.textContent=z2;
                    day3[i].appendChild(p3)
                    p3.textContent=z3;
                    day4[i].appendChild(p4)
                    p4.textContent=z4;
                }
                
                
    
            }
            
    
              
        }
        

        
    })
})


    let filter = document.getElementById("nav3")
    filter.addEventListener("click",()=>{
    let fildiv = document.getElementById("filter")
    fildiv.style.display="block"

    let output=document.getElementById("output")
    output.style.display="none";
    
    })

let proceed = document.getElementById("proceed")
proceed.addEventListener("click",()=>{
    let filinp = document.getElementById("filinp").value

    
    
    let element = document.querySelectorAll("table tr td")

    let arr=Array.from(element);

    let x = arr.map((element)=>{
        return element.textContent
    })

    // console.log(x)

    let y = new Array;
        for(i=0;i<=x.length;i++){
            if(x[i]=="mon"){
               y[i]="mon"
            }
            else if(x[i]=="tue"){
                y[i]="tue"
            }
            else if(x[i]=="wed"){
                y[i]="wed"
            }
            else if(x[i]=="thur"){
                y[i]="thur"
            }
            else if(x[i]=="fri"){
                y[i]="fri"
            }
            else if(x[i]=="sat"){
                y[i]="sat"
            }
            else if(x[i]===filinp){
                y[i]=filinp
            }
            else{
                y[i]=" "
            }
        }
        console.log(y)
        console.log(filinp)



        let td1 = document.getElementById("td1")
        let td2 = document.getElementById("td2")
        let td3 = document.getElementById("td3")
        let td4 = document.getElementById("td4")
        
        let td7 = document.getElementById("td7")
        let td8 = document.getElementById("td8")
        let td9 = document.getElementById("td9")
        let td10 = document.getElementById("td10")
        
        let td13 = document.getElementById("td13")
        let td14 = document.getElementById("td14")
        let td15 = document.getElementById("td15")
        let td16 = document.getElementById("td16")
        
        let td19 = document.getElementById("td19")
        let td20 = document.getElementById("td20")
        let td21 = document.getElementById("td21")
        let td22 = document.getElementById("td22")
        
        let td25 = document.getElementById("td25")
        let td26 = document.getElementById("td26")
        let td27 = document.getElementById("td27")
        let td28 = document.getElementById("td28")
        
        let td31 = document.getElementById("td31")
        let td32 = document.getElementById("td32")
        let td33 = document.getElementById("td33")
        let td34 = document.getElementById("td34")
        
        let td37 = document.getElementById("td37")
        let td38 = document.getElementById("td38")
        let td39 = document.getElementById("td39")
        let td40 = document.getElementById("td40")
        
        let td43 = document.getElementById("td43")
        let td44 = document.getElementById("td44")
        let td45 = document.getElementById("td45")
        let td46 = document.getElementById("td46")
        
        let td49 = document.getElementById("td49")
        let td50 = document.getElementById("td50")
        let td51 = document.getElementById("td51")
        let td52 = document.getElementById("td52")
        
        let td55 = document.getElementById("td55")
        let td56 = document.getElementById("td56")
        let td57 = document.getElementById("td57")
        let td58 = document.getElementById("td58")
        
        let td61 = document.getElementById("td61")
        let td62 = document.getElementById("td62")
        let td63 = document.getElementById("td63")
        let td64 = document.getElementById("td64")
        
        let td67 = document.getElementById("td67")
        let td68 = document.getElementById("td68")
        let td69 = document.getElementById("td69")
        let td70 = document.getElementById("td70")
        
        let td73 = document.getElementById("td73")
        let td74 = document.getElementById("td74")
        let td75 = document.getElementById("td75")
        let td76 = document.getElementById("td76")
        
        let td79 = document.getElementById("td79")
        let td80 = document.getElementById("td80")
        let td81 = document.getElementById("td81")
        let td82 = document.getElementById("td82")
        
        let td85 = document.getElementById("td85")
        let td86 = document.getElementById("td86")
        let td87 = document.getElementById("td87")
        let td88 = document.getElementById("td88")
        
        let td91 = document.getElementById("td91")
        let td92 = document.getElementById("td92")
        let td93 = document.getElementById("td93")
        let td94 = document.getElementById("td94")
        
        let td97 = document.getElementById("td97")
        let td98 = document.getElementById("td98")
        let td99 = document.getElementById("td99")
        let td100 = document.getElementById("td100")
       
        let td103 = document.getElementById("td103")
        let td104 = document.getElementById("td104")
        let td105 = document.getElementById("td105")
        let td106 = document.getElementById("td106")
        
        let td109 = document.getElementById("td109")
        let td110 = document.getElementById("td110")
        let td111 = document.getElementById("td111")
        let td112 = document.getElementById("td112")
        
        let td115 = document.getElementById("td115")
        let td116 = document.getElementById("td116")
        let td117 = document.getElementById("td117")
        let td118 = document.getElementById("td118")
        
        let td121 = document.getElementById("td121")
        let td122 = document.getElementById("td122")
        let td123 = document.getElementById("td123")
        let td124 = document.getElementById("td124")
        
        let td127 = document.getElementById("td127")
        let td128 = document.getElementById("td128")
        let td129 = document.getElementById("td129")
        let td130 = document.getElementById("td130")
        
        let td133 = document.getElementById("td133")
        let td134 = document.getElementById("td134")
        let td135 = document.getElementById("td135")
        let td136 = document.getElementById("td136")
        
        let td139 = document.getElementById("td139")
        let td140 = document.getElementById("td140")
        let td141 = document.getElementById("td141")
        let td142 = document.getElementById("td142")
        
        

        td1.textContent=y[0]
        td2.textContent=y[1]
        td3.textContent=y[2]
        td4.textContent=y[3]
        
        td7.textContent=y[4]
        td8.textContent=y[5]
        td9.textContent=y[6]
        td10.textContent=y[7]
        
        td13.textContent=y[8]
        td14.textContent=y[9]
        td15.textContent=y[10]
        td16.textContent=y[11]
        
        td19.textContent=y[12]
        td20.textContent=y[13]
        td21.textContent=y[14]
        td22.textContent=y[15]
        
        td25.textContent=y[16]
        td26.textContent=y[17]
        td27.textContent=y[18]
        td28.textContent=y[19]
        
        td31.textContent=y[20]
        td32.textContent=y[21]
        td33.textContent=y[22]
        td34.textContent=y[23]
        
        td37.textContent=y[24]
        td38.textContent=y[25]
        td39.textContent=y[26]
        td40.textContent=y[27]

        td43.textContent=y[28]
        td44.textContent=y[29]
        td45.textContent=y[30]
        td46.textContent=y[31]
        
        td49.textContent=y[32]
        td50.textContent=y[33]
        td51.textContent=y[34]
        td52.textContent=y[35]
       
        td55.textContent=y[36]
        td56.textContent=y[37]
        td57.textContent=y[38]
        td58.textContent=y[39]
        
        td61.textContent=y[40]
        td62.textContent=y[41]
        td63.textContent=y[42]
        td64.textContent=y[43]
        
        td67.textContent=y[44]
        td68.textContent=y[45]
        td69.textContent=y[46]
        td70.textContent=y[47]
        
        td73.textContent=y[48]
        td74.textContent=y[49]
        td75.textContent=y[50]
        td76.textContent=y[51]
        
        td79.textContent=y[52]
        td80.textContent=y[53]
        td81.textContent=y[54]
        td82.textContent=y[55]
        
        td85.textContent=y[56]
        td86.textContent=y[57]
        td87.textContent=y[58]
        td88.textContent=y[59]
        
        td91.textContent=y[60]
        td92.textContent=y[61]
        td93.textContent=y[62]
        td94.textContent=y[63]
        
        td97.textContent=y[64]
        td98.textContent=y[65]
        td99.textContent=y[66]
        td100.textContent=y[67]
        
        td103.textContent=y[68]
        td104.textContent=y[69]
        td105.textContent=y[70]
        td106.textContent=y[71]
        
        td109.textContent=y[72]
        td110.textContent=y[73]
        td111.textContent=y[74]
        td112.textContent=y[75]
        
        td115.textContent=y[76]
        td116.textContent=y[77]
        td117.textContent=y[78]
        td118.textContent=y[79]
        
        td121.textContent=y[80]
        td122.textContent=y[81]
        td123.textContent=y[82]
        td124.textContent=y[83]

        td127.textContent=y[84]
        td128.textContent=y[85]
        td129.textContent=y[86]
        td130.textContent=y[87]
        
        td133.textContent=y[88]
        td134.textContent=y[89]
        td135.textContent=y[90]
        td136.textContent=y[91]
           
        td139.textContent=y[92]
        td140.textContent=y[93]
        td141.textContent=y[94]
        td142.textContent=y[95]
        

        let filter_table=document.getElementById("filter_table")
        filter_table.style.display="block";

        let fil=document.getElementById("fil")
        fil.style.display="block";

        
})

        
let fil = document.getElementById("fil")
fil.addEventListener("click",()=>{
    filter_table.style.display="none";

    let fil=document.getElementById("fil")
    fil.style.display="none";

})



    
    

    

    



