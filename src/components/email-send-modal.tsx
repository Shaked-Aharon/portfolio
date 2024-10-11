import React from 'react';
import { useTranslation } from 'react-i18next';

interface EmailSentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const EmailSentModal: React.FC<EmailSentModalProps> = ({ isOpen, onClose }) => {
    const { t } = useTranslation();
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 w-11/12 max-w-md text-white">
                <h2 className="text-2xl font-semibold mb-4">{t('EmailSentModal.Title')}</h2>
                <p className="text-gray-300 mb-6">
                    {t('EmailSentModal.Description')}
                </p>
                <button
                    onClick={onClose}
                    className="w-full py-2 bg-green-600 rounded-md hover:bg-green-700 transition duration-200"
                >
                    {t('EmailSentModal.Close')}
                </button>
            </div>
        </div>
    );
};

export default EmailSentModal;
