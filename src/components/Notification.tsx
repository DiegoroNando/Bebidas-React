import { Fragment, useEffect } from 'react'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { Transition } from '@headlessui/react'
import { useAppStore } from '../stores/useAppStore'

export default function Notification() {

  const notification = useAppStore((state) => state.notification)
  const closeNotification = useAppStore((state) => state.closeNotification)

  useEffect(() => {
    if (!notification.show) {
      return
    }

    const timer = window.setTimeout(() => {
      closeNotification()
    }, 2500)

    return () => window.clearTimeout(timer)
  }, [closeNotification, notification.show, notification.text, notification.error])

  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed right-0 top-0 z-50 flex w-full justify-end px-4 py-4 sm:px-6 sm:py-6"
    >
      <div className="flex w-full max-w-sm flex-col items-end space-y-4">
        <Transition
          show={notification.show}
          as={Fragment}
          enter="transform transition ease-out duration-300"
          enterFrom="translate-y-2 opacity-0"
          enterTo="translate-y-0 opacity-100"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0 translate-y-1"
        >
          <div className="pointer-events-auto w-full overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5">
            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  {notification.error ? (
                    <XCircleIcon className='h-6 w-6 text-red-500' aria-hidden="true" />
                  ) : (
                    <CheckCircleIcon className='h-6 w-6 text-emerald-500' aria-hidden="true" />
                  )}
                </div>
                <div className="min-w-0 flex-1 pt-0.5">
                  <p className="text-sm font-semibold text-slate-900">Acción realizada</p>
                  <p className="mt-1 text-sm text-slate-500">
                    {notification.text}
                  </p>
                </div>
                <div className="flex flex-shrink-0">
                  <button
                    type="button"
                    className="inline-flex rounded-md bg-white text-slate-400 transition hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    onClick={closeNotification}
                  >
                    <span className="sr-only">Cerrar</span>
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  )
}