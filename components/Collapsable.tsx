import React from 'react'
import styles from '../styles/components/Collapsable.module.css'

const Collapsable = ({collapsed, titleOpen, titleClosed, btnclassname, children}:any) => {
  const [isCollapsed, setIsCollapsed] = React.useState(collapsed);

  return (
    <>
      <button
        className={btnclassname}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? titleClosed : titleOpen} 
      </button>
      <div
        className={isCollapsed ? styles.collapsed : styles.expanded}
        aria-expanded={isCollapsed}
      >
        {children}
      </div>
    </>
  )
}

export default Collapsable