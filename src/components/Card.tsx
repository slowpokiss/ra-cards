interface props {
  children?: React.ReactNode
}

function Card ({ children }: props) {
  return (
    <>
      {children}
    </>
  )
}

export default Card
