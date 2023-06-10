import React from 'react';

interface Props extends React.PropsWithChildren{
    type: string;
    onDismiss?: React.MouseEventHandler;
}

const Alert:React.FC<Props> = ({type, onDismiss, children}) => {
    const className = `bg-${type} mx-auto my-3 text-secondary p-2 w-50 d-flex justify-content-between rounded`
    if (onDismiss === undefined) {
        return (
            <>
                <div className={className}>
                    {children}
                </div>
            </>
        );
    }

    return (
        <>
         <div className={className}>
             {children}
             <button type='button' className='cross-alert cross' onClick={onDismiss}></button>
         </div>
        </>
    );
};

export default Alert;