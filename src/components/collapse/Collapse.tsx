import * as React from 'react'

import './Collapse.less'

interface IProps {
  isOpen: boolean
}

const Collapse: React.FC<IProps> = ({ isOpen, children }) => {
  const classname = isOpen ? 'collapse open' : 'collapse closed'

  return <div className={classname}>{children}</div>
}

export default Collapse
