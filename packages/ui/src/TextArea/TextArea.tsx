import { cx } from "class-variance-authority";
import React from "react";

const baseClasses =
  "w-full border border-gray-200 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600";
const errorClasses = "!border-red-400 !text-red-400";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  errorMessage?: string;
  renderLeftIcon?: React.ReactNode;
  renderRightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

const ErrorField = ({ errorMessage }: { errorMessage?: string }) => {
  return <p className="pt-2 text-md text-red-400">{errorMessage}</p>;
};

export const TextArea = ({
  label,
  errorMessage,
  renderLeftIcon,
  renderRightIcon,
  children,
  ...props
}: TextAreaProps) => {
  return (
    <div>
      <p className="block mb-2 text-sm font-medium text-white">{label}</p>
      <div
        className={errorMessage ? cx(baseClasses, errorClasses) : baseClasses}
      >
        <div className="px-4 py-2 bg-white rounded-t dark:bg-gray-800">
          <textarea
            className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 outline-none"
            {...props}
          ></textarea>
        </div>
        {children}
      </div>
      {errorMessage && <ErrorField errorMessage={errorMessage} />}
    </div>
  );
};

const TextAreaActions = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
      {children}
    </div>
  );
};

TextArea.Actions = TextAreaActions;
