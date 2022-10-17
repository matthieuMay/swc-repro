import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ClassA } from './classA';


export class ClassB {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => ClassA)
    @JoinColumn([{ name: 'other_id', referencedColumnName: 'id' }])  
    other: ClassA;
}