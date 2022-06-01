export class tutor{
public nombre: string;
public apellido: string;
public vinculo: string;
public telefono: number;

private constructor (nombre:string, apellido:string, vinculo:string, telefono:number){
this.apellido=apellido;
this.nombre=nombre;
this.vinculo=vinculo;
this.telefono=telefono

}
}

export class Domicilio{
public direccion:string;
public localidad:string;
}

export class Socie{
    public nombre: string;
    public apellido: string;
    public dni: number;
    public tutor: string;

    private constructor(direccion:string, localidad:string, dni:string){
        this.apellido=apellido;
        this.nombre=nombre;
        this.dni=dni;
