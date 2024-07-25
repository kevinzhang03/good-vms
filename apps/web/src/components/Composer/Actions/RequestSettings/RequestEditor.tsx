import type { FC } from 'react';

import { Card, Tooltip } from '@good/ui';
import { XCircleIcon } from '@heroicons/react/24/solid';
import { usePublicationRequestStore } from 'src/store/non-persisted/publication/usePublicationRequestStore';

import GiveGiftIcon from './GiveGiftIcon';
import RequestForm from './RequestForm';

// Created based on PollSetting's index.tsx, adjust as required
const RequestEditor: FC = () => {
  const {
    requestParams,
    resetRequestParams,
    setRequestParams,
    setShowRequestEditor
  } = usePublicationRequestStore();
  // const [showPollLengthModal, setShowPollLengthModal] = useState(false);

  return (
    <Card className="m-5 px-5 py-3" forceRounded>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-sm">
          {/* <ClockIcon className="size-4" /> */}
          <GiveGiftIcon />
          <b>Request GOOD</b>
        </div>
        <div className="flex items-center space-x-3">
          <Tooltip content="Delete" placement="top">
            <button
              className="flex"
              onClick={() => {
                resetRequestParams();
                setShowRequestEditor(false);
              }}
              type="button"
            >
              <XCircleIcon className="size-5 text-red-400" />
            </button>
          </Tooltip>
        </div>
      </div>
      <RequestForm />
    </Card>
  );
};

export default RequestEditor;
