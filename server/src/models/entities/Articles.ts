import { Column, Entity } from "typeorm";
import { Base } from "../Base";

@Entity()
export class Article extends Base {
  @Column({ length: 250, name: "ar_title", nullable: false })
  articleTitle!: string;

  @Column({ length: 55, name: "ar_category", nullable: false })
  articleCategory!: string;
}
