const data=[
    {nombre:"juan", edad:18, sexo:"M", acceso:null},
    {nombre:"pedro", edad:10, sexo:"M", acceso:null},
    {nombre:"ana", edad:25, sexo:"F", acceso:null},
    {nombre:"luis", edad:12, sexo:"M", acceso:null},
    {nombre:"maria", edad:22, sexo:"F", acceso:null},
    {nombre:"carlos", edad:28, sexo:"M", acceso:null},
]

data.sort((a,b)=>a.edad-b.edad)
console.log(data[0])