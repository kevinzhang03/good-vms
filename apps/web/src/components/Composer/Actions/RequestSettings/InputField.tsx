import type { FC } from 'react';

import React, { useEffect } from 'react';

export interface FieldMetadata {
  isLensID?: boolean;
  isNumber?: boolean;
  isRequired?: boolean;
  isURL?: boolean;
  name: string;
}

interface InputFieldProps {
  errorMessage?: string;
  isLensID?: boolean;
  isNumber?: boolean;
  isRequired?: boolean;
  isURL?: boolean;
  label: string;
  name: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  register: (metadata: FieldMetadata) => void;
  type: 'text' | 'textarea';
  value: string;
}

export const InputField: FC<InputFieldProps> = ({
  errorMessage,
  isLensID = false,
  isNumber = false,
  isRequired = false,
  isURL = false,
  label,
  name,
  onChange,
  placeholder,
  register,
  type,
  value
}) => {
  useEffect(() => {
    register({ isLensID, isNumber, isRequired, isURL, name });
  }, [isLensID, name, isRequired, isNumber, isURL, register]);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
        {isRequired && <span className="text-red-500"> *</span>}
      </label>
      {type === 'text' ? (
        <input
          className={`block w-full rounded-xl border ${
            errorMessage
              ? 'border-red-500'
              : 'border-gray-300 dark:border-gray-700'
          } bg-white px-3 py-2 focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-gray-400 sm:text-sm dark:bg-gray-900`}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          type="text"
          value={value}
        />
      ) : (
        <textarea
          className={`block w-full rounded-xl border ${
            errorMessage
              ? 'border-red-500'
              : 'border-gray-300 dark:border-gray-700'
          } bg-white px-3 py-2 focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-gray-400 sm:text-sm dark:bg-gray-900`}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
      )}
      {errorMessage && <p className="text-xs text-red-500">{errorMessage}</p>}
    </div>
  );
};
