import { StateCreator } from "zustand"


type Notification = {
    text: string
    error: boolean
    show: boolean
}



export type NotificationSliceType={
    notification: Notification
}

export const CreateNotificationSlice : StateCreator<NotificationSliceType>= (set, get)=>({
    notification:{
    text: 'Texto Notificacion',
    error: false,
    show: true       
    }
})