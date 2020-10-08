const proceso =(tarea,duracion,callback)=>{
    setTimeout(()=>{
        callback(tarea);
    } , duracion)
    
    }
    proceso("1 Comprar bicicleta", 5000,(tarea)=>{
        console.log("tarea:"+ tarea);
        proceso("2 Comprar casco", 1000,(tarea)=>{
            console.log("tarea:"+ tarea);
            proceso("3 Comprar guantes", 2000,(tarea)=>{
                console.log("tarea:"+ tarea);
                proceso("4 Ir de paseo en bici ", 8000,(tarea)=>{
                    console.log("tarea:"+ tarea);
                })
            })
        })
    })