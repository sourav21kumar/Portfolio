import { ReactNode } from "react"
// Button Componet Props interface
export interface IButtonProps { 
    className?: string,
    children: ReactNode
    disabled?: boolean
}