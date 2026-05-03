import {type StateCreator } from "zustand"



type Notification = {
    text: string
    error: boolean
    show: boolean
}

export type NotificationSliceType={
    notification: Notification
    showNotification:(payload: Pick<Notification, 'text' | 'error'>) => void
}

export const CreateNotificationSlice : StateCreator<NotificationSliceType>= (set, get)=>({
    notification:{
    text: '',
    error: false,
    show: true       
    },
    showNotification:(payload) => {
       set ({
        notification: {
            text: payload.text,   
            error: payload.error,
            show: true
        }
       }) 
    },

})