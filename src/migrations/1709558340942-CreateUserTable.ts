import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1709558340942 implements MigrationInterface {
    name = 'CreateUserTable1709558340942'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post\` DROP COLUMN \`content\``);
        await queryRunner.query(`ALTER TABLE \`post\` DROP COLUMN \`text\``);
        await queryRunner.query(`ALTER TABLE \`post\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`post\` DROP COLUMN \`age\``);
        await queryRunner.query(`ALTER TABLE \`post\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`post\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`post\` ADD \`blob\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`post\` ADD \`age\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`post\` ADD \`title\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`post\` ADD \`text\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post\` DROP COLUMN \`text\``);
        await queryRunner.query(`ALTER TABLE \`post\` DROP COLUMN \`title\``);
        await queryRunner.query(`ALTER TABLE \`post\` DROP COLUMN \`age\``);
        await queryRunner.query(`ALTER TABLE \`post\` DROP COLUMN \`blob\``);
        await queryRunner.query(`ALTER TABLE \`post\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`post\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`post\` ADD \`age\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`post\` ADD \`title\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`post\` ADD \`text\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`post\` ADD \`content\` varchar(255) NOT NULL`);
    }

}
