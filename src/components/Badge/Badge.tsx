import { TASK_STATUS } from "../../constants/TaskStatuses";

export function Badge(props: any) {
  const { status } = props;

  switch (status) {
    case TASK_STATUS.COMPLETED:
      return (
        <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
          Completed
        </span>
      );
    case TASK_STATUS.IN_PROGRESS:
      return (
        <span className="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
          In Progress
        </span>
      );
    case TASK_STATUS.NOT_STARTED:
      return (
        <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          Not Started
        </span>
      );
    case TASK_STATUS.REJECTED:
      return (
        <span className="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
          Rejected
        </span>
      );
    case TASK_STATUS.AWAITING_APPROVAL:
      return (
        <span className="bg-pink-100 text-pink-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
          Awaiting Approval
        </span>
      );
    default:
      return (
        <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          Status Unknown
        </span>
      );
  }
}
