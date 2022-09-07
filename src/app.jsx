import { Component, render, toChildArray, isValidElement } from 'preact';
import { signal, computed, Signal } from '@preact/signals';

import './style.css';


class RenderCount extends Component {
	#count = 0;

	render () {
		return (
			<div className='render-count'>
				rendered {++this.#count} time{this.#count !== 1 && 's'}
			</div>
		);
	}
}

class TodoList extends Component {
	#items = signal([
		{ id: crypto.randomUUID(), text: 'Learn Preact' },
		{ id: crypto.randomUUID(), text: 'Do laundry' },
	]);

	#handleKeyUp = (ev) => {
		if (ev.key === 'Enter') {
			const target = ev.target;
			const value = target.value;

			if (value.trim() === '') {
				return;
			}

			const item = {
				id: crypto.randomUUID(),
				text: value,
			};

			this.#items.value = [item, ...this.#items.value];
			target.value = '';
		}
	}

	#removeItem (id) {
		let items = this.#items.value;
		const index = items.findIndex((item) => item.id === id);

		if (index !== -1) {
			items = items.slice();
			items.splice(index, 1);

			this.#items.value = items;
		}
	}

	render () {
		return (
			<div className='card'>
				<input placeholder='I want to...' onKeyUp={this.#handleKeyUp} />

				<For each={this.#items} fallback={<div>No items</div>}>
					{(item) => (
						<div key={item.id}>
							<button onClick={() => this.#removeItem(item.id)}>
								x
							</button>
							<span>{item.text}</span>
						</div>
					)}
				</For>

				<RenderCount />
			</div>
		);
	}
}

class App extends Component {
	#count = signal(0);
	#doubleCount = computed(() => this.#count * 2);
	#showCount = signal(false);

	render () {
		return (
			<>
				<div className='card'>
					<div>
						<strong>count: </strong>
						<button onClick={() => this.#count.value--}>&#x2013;</button>
						<output>
							<Show when={this.#showCount}>
								<span>{this.#count}</span>
							</Show>
						</output>
						<button onClick={() => this.#count.value++}>+</button>
						<button onClick={() => this.#count.value += 2}>+ &#xD7;2</button>
						<label>
							<input
								type="checkbox"
								onChange={(ev) => (this.#showCount.value = ev.target.checked)}
							/>
							show value
						</label>
					</div>
					<div>
						<strong>double count: </strong>
						<output>
							{this.#doubleCount}
						</output>
					</div>

					<Switch>
						<Match when={() => this.#count.value === 0}>
							<div>Qux!</div>
						</Match>
						<Match when={() => this.#count.value % 3 === 0}>
							<div>Foo!</div>
						</Match>
						<Match when={() => this.#count.value % 5 === 0}>
							<div>Bar!</div>
						</Match>
						<Match when>
							<div>Buzz!</div>
						</Match>
					</Switch>

					<RenderCount />
				</div>

				<TodoList />
			</>
		);
	}
}

render(<App />, document.getElementById('root'));

function unwrapSignal (val) {
	return val instanceof Signal ? val.value : val;
}

function renderShow (child, value, key) {
	return typeof child === 'function' ? child(value, key) : child;
}

function Show ({ when, fallback, children }) {
	const value = unwrapSignal(when);
	const rendered = renderShow(value ? children : fallback, value);

	return rendered;
}

function For ({ each, children, fallback }) {
	const values = unwrapSignal(each);

	const rendered = values.length > 0
		? values.map((value, index) => renderShow(children, value, index))
		: renderShow(fallback);

	return rendered;
}

function Switch ({ children }) {
	const array = toChildArray(children);

	for (const node of array) {
		if (!isValidElement(node) || node.type !== Match) {
			continue;
		}

		const when = node.props.when;
		const children = node.props.children;

		const value = typeof when === 'function' ? when() : unwrapSignal(when);

		if (value) {
			const rendered = renderShow(children, value);
			return rendered;
		}
	}

	return null;
}

function Match ({ when, children }) {
	return children;
}
