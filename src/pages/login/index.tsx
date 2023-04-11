import React, { useState } from 'react'
import { useRouter } from 'next/router'

import styles from '@/pages/login/Login.module.css'
import Button from '@/components/Button'
import Link from 'next/link'

const login = () => {
  const [user, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const router = useRouter()

  return (
    <main className={styles.main}>
      <div className={styles.containerForm}>
        <div className={styles.headerForm}>
          <h1>Timer</h1>
          <br/>
          <h3>Seja o senhor do seu próprio tempo</h3>

          <form action="#">
            <input className={styles.inputLogin} type="text" value={user} onChange={(e) => setEmail(e.target.value)} />
            <input className={styles.inputLogin} type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
          </form>
        </div>

        <div className={styles.footerForm}>
          <Link className={styles.buttonSubmit} href="/home">Enviar Link</Link>
          <br/>
          <h4>É seu primeiro acesso?</h4>
          <br/>
          <Link className={styles.buttonCreateAccount} href="/createAccount">Criar Conta</Link>
        </div>
      </div>
    </main>
  )
}

export default login