const data=[
    {nombre:"juan", edad:18, sexo:"M", nota:4},
    {nombre:"pedro", edad:10, sexo:"M", nota:5},
    {nombre:"ana", edad:25, sexo:"F", nota:1},
    {nombre:"luis", edad:12, sexo:"M", nota:0},
    {nombre:"maria", edad:22, sexo:"F", nota:4},
    {nombre:"carlos", edad:28, sexo:"M", nota:3},
]

data.forEach(item=>item.nota=item.nota+1);
console.log(data);