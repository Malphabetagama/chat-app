import React from 'react';
import { Modal } from 'rsuite';
import { useModalState } from '../../misc/custom.hooks';

const fileInputTypes = ".png, .jpeg, .jpg";

const AvatarUploadBtn = () => {
    const { isOpen, open, close } = useModalState()
    return (
        <div className="mt-3 text-center">
            <div>
                <label htmlFor="avatar-upload"
                className="d-block cursor-pointer padded">
                    Select new avatar
                    <input id="avatar-upload" type="file" className="d-none" accept={fileInputTypes} onChange={onFileInputChange} />
                </label>

            <Modal show={isOpen} onHide={close}>

                <Modal.Header>
                    <Modal.Title>Adjust and upload new avatar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        {img && (
                        <AvatarEditor
                        ref={avatarEditorRef}
                        image={img}
                        width={200}
                        height={200}
                        border={10}
                        borderRadius={100}
                        rotate={0}/>
              )}
            </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
              block
              appearance="ghost"
              onClick={onUploadClick}
              disabled={isLoading}>
              Upload new avatar
            </Button>
                </Modal.Footer>


            </Modal>


            </div>
        </div>
    );
};

export default AvatarUploadBtn;
