'use client';

import { Modal } from '@/components/ui/modal';
import { UserButton } from '@clerk/nextjs';

const SetupPage = () => {
  return (
    <div className="p-4">
      <UserButton afterSignOutUrl="/" />
      <Modal title="test" descripton="test desc" isOpen onClose={() => {}}>
        children
      </Modal>
    </div>
  );
};

export default SetupPage;
