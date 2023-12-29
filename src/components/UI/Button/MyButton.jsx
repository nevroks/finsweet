import classes from "./MyButton.module.css";
const MyButton = ({children,width,height,style}) => {
    let styles={
        minWidth:width,
        ...style,
        height:height +'px',
    }

    return (
        <button style={styles} className={classes.Mybutton}>
            {children}
        </button>
    );
};

export default MyButton;