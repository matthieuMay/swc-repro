import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ClassB } from "./classB";


@Entity()
export class ClassA {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => ClassB)
    @JoinColumn([{ name: 'other_id', referencedColumnName: 'id' }])  
    other: ClassB;

    constructor(id: number) {
        this.id = id;
    }
}