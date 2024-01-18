import PropTypes from "prop-types";
import { useAppDispatch } from "../../app/hooks";
import { TASK_STATUS } from "../../constants/TaskStatuses";
import { Badge } from "../Badge/Badge";
import { ApproveIcon } from "../IconButton/ApproveIcon";
import { RejectIcon } from "../IconButton/RejectIcon";

TaskCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  status: PropTypes.string.isRequired,
  renderCTA: PropTypes.bool,
};

export function TaskCard(props: any) {
  const { id, title, description, status, renderCTA } = props;
  const dispatch = useAppDispatch();
  const onApprove = () => {};
  const onReject = () => {}
    
  return (
    <div>
      <div className="m-4 w-5/6 p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="font-light text-gray-700 dark:text-gray-400">
              {description}
            </p>
            {renderCTA && <Badge status={status} />}
          </div>
          {status === TASK_STATUS.AWAITING_APPROVAL && (
            <div>
              <ApproveIcon onApprove={onApprove} />
              <RejectIcon onReject={onReject} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
