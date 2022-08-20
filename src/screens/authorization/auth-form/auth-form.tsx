import { FC, useState } from "react";
import styles from './auth-form.module.scss'

interface AuthFormProp {
    title: string,
    subTitle: string,
    changeForm: () => void,
    handleAuth: (email: string, password: string, name?: string) => void,
    isLogin: boolean
}

export const AuthForm : FC<AuthFormProp> = ({title, subTitle, changeForm, handleAuth, isLogin}) => {

    const [userInput, setUserInput] = useState({
        password: '',
        email: '',
        name: ''
    })

    return (
        <div className={styles.form}>
            <div className={styles.title}>{title}</div>
            {
                (!isLogin) ? 
                <div className={styles.input_form}>
                    <label>Введите Имя</label>
                    <input onChange={(e) => setUserInput({...userInput, name: e.currentTarget.value})} 
                    type="text" />
                </div> : ''
            }
            <div className={styles.input_form}>
                <label>Введите почту</label>
                <input onChange={(e) => setUserInput({...userInput, email: e.currentTarget.value})} 
                type="email" />
            </div>
            <div className={styles.input_form}>
                <label>Введите пароль</label>
                <input onChange={(e) => setUserInput({...userInput, password: e.currentTarget.value})}
                type="password" />
            </div>
            <button onClick={() => {
                handleAuth(userInput.email, userInput.password, userInput.name)
            }} className={styles.btn_auth}>{title}</button>
            <div className={styles.change_form}>
                <button onClick={() => changeForm()}>Или {subTitle}</button>
            </div>
        </div>
    )
}