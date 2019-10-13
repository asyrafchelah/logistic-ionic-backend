import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Logistic {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    type: string;

    @Column()
    width: number;

    @Column()
    height: number;

    @Column()
    length: number;

    @Column()
    description: string;

    @Column()
    disclaimer: string;
    
    @Column()
    day: string;

    @Column()
    time: string;

    @Column()
    address: string;

    @Column()
    state: string;

    @Column()
    country: string;

    @Column()
    postalcode: number;

    @Column()
    contactnum: number;

    @Column()
    contactname: string;

    
}
