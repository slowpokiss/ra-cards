interface props {
  children?: React.ReactNode
  href: string
}

const Button = ({ children, href }: props) => {
  return (
    <a className='card-btn' href={href}>{children}</a>
  )
}

export default Button
