interface props {
  srcImg: string
}

const Image = ({ srcImg }: props) => {
  return (
    <img src={srcImg} className="card-img" />
  )
}

export default Image