import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
    
    //ID
    @PrimaryGeneratedColumn()
    id: number;

    //NOMBRE
    @Column()
    name: string

    //EDAD
    @Column()
    edad: number;

    //COMPLETADO
    @Column({default:false})
    completed:boolean;

}