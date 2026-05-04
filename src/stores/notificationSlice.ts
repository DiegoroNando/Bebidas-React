import {type StateCreator } from "zustand"



type Notification = {
    text: string
    error: boolean
    show: boolean
}

export type NotificationSliceType={
    notification: Notification
    showNotification:(payload: Pick<Notification, 'text' | 'error'>) => void
    closeNotification: () => void
}

export const CreateNotificationSlice : StateCreator<NotificationSliceType>= (set)=>({
    notification:{
    text: '',
    error: false,
    show: false       
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
    closeNotification: () => {
        set((state) => ({
            notification: {
                ...state.notification,
                show: false
            }
        }))
    },

})