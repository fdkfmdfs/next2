import React from 'react'
import styles from './page.module.css'
import  Join  from '@/commonents/Join'
const Register = () => {
  return (
    <div>
         <h2 className={styles.signForm}>회원가입</h2>
         <Join/>
 
    </div>
  )
}

export default Register