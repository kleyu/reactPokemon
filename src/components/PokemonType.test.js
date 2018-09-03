import React from "react";
import PokemonType from "./PokemonType";
import { render, cleanup } from "react-testing-library";

afterEach(cleanup);

test("PokemonType renders provided types", () => {
	const mockPokemon = {
		type: ["red", "green", "blue"]
	};
	const { getByText, container } = render(
		<PokemonType pokemon={mockPokemon} />
	);
	const typeSpan = getByText("red");
	const allTypes = container.querySelectorAll("span");
	expect(allTypes.length).toBe(3);
	expect(typeSpan.textContent).toMatch("red");
});