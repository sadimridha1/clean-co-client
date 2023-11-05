import { checkPropTypes } from "prop-types";

const Container = ({children}) => {
    return (
        <div className=" max-w-[1200px] mx-auto px-5 lg:px-1 mt-10 py-14">{children}</div>
    );
};

Container.propTypes = {
    children: checkPropTypes.node,
}

export default Container;