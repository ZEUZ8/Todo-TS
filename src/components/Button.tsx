type Button = {
    children : JSX.Element | string
    className?: string,
    onClick?:()=>void
}

const Button = ({className,children,onClick}:Button) => {
  return (
    <button type="submit" className={className} onClick={onClick}>
        {children}
    </button>
  );
};

export default Button;
