const Title = ({ text1, text2 }) => {
    return (
        <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                {text1} <span className="text-amber-800">{text2}</span>
            </h1>
        </div>
    );
};

export default Title;