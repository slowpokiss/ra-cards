interface props {
  srcImg: string;
  width: number | string;
  height: number | string;
}

const Image = ({ srcImg, width, height }: props) => {
  return (
    <img
      src={srcImg}
      alt="image"
      className="card-img"
      style={{
        width: `${typeof width === "string" ? width : `${width}px`}`,
        height: `${typeof height === "string" ? height : `${height}px`}`,
      }}
    />
  );
};

export default Image;
