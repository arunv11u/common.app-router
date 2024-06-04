import express from "express";

class AppRouterSingleton {
	private static _instance: express.Router;
	private static _router = express.Router();

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	private constructor() { }

	static getInstance(): express.Router {
		if (!AppRouterSingleton._instance)
			AppRouterSingleton._instance = this._router;

		return AppRouterSingleton._instance;
	}
}

export const appRouter = AppRouterSingleton.getInstance();
