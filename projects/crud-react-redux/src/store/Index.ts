import { configureStore, Middleware } from "@reduxjs/toolkit";
import usersReducer, { rollbackUser } from "./users/slice";
import { toast } from "sonner";

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem("__redux__state__", JSON.stringify(store.getState()))
};

const syncWithDatabaseMiddleware: Middleware = store => next => action => {
	const { type, payload } = action
	const previousState = store.getState()

	next(action)

	if (type === 'users/deleteUserById') { // <- elimando un usuario
		const userIdToRemove = payload
		const userToRemove = previousState.users.find(user => user.id === payload)

		fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
			method: 'DELETE'
		})
			.then(res => {
				if (res.ok) {
					toast.success(`Usuario ${payload} eliminado correctamente`)
				}
				throw new Error('Error al eleiminar el usuario')
			})
			.catch(() => {
				toast.error(`Error deleting user ${userIdToRemove}`)
				if (userToRemove) store.dispatch(rollbackUser(userToRemove))
				console.log('error')
			})
	}

}

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(persistanceLocalStorageMiddleware, syncWithDatabaseMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
