export class CreateTodoDto {
    readonly label: string;
    readonly completed: boolean;
    readonly userId: number;
}