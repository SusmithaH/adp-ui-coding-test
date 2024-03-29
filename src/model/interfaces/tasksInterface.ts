export interface ITask {
    id: string;
    title: string;
    description: string;
    status: 'NOTSTARTED' | 'INPROGRESS' | 'COMPLETED' | 'REJECTED'| 'AWAITING_APPROVAL';
    renderCTA?: boolean;
}