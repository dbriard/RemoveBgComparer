export function setLocalStorage(name, todosJson) {
	window.localStorage.setItem(name, todosJson);
}

export function getLocalStorage(name) {
	return window.localStorage.getItem(name) || '';
};
