import { useLocation, useRoute } from "wouter";

import { Layout } from "~/src/components/Layout";
import { Router } from "~/src/components/Router";
import { Provider, createId } from "~/src/lib/data";

type Params = {
	boardId: string;
};

export function App() {
	const [, setLocation] = useLocation();
	const [match, params] = useRoute<Params>("/:boardId");

	if (!match) {
		setLocation(`/${createId()}`, { replace: true });
	}

	if (!params) {
		return null;
	}

	return (
		<Provider roomId={params.boardId}>
			<Layout>
				<Router />
			</Layout>
		</Provider>
	);
}
