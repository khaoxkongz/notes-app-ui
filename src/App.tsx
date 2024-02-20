import { useState } from "react";
import "./App.css";

type Note = {
	id: number;
	title: string;
	content: string;
};

const App = () => {
	const [notes, setNotes] = useState<Note[]>([
		{
			id: 1,
			title: "note title 1",
			content: "content 1",
		},
		{
			id: 2,
			title: "note title 2",
			content: "content 2",
		},
		{
			id: 3,
			title: "note title 3",
			content: "content 3",
		},
		{
			id: 4,
			title: "note title 4",
			content: "content 4",
		},
	]);

	return (
		<div className="app-container">
			<form action="" className="note-form">
				<input placeholder="title" required />
				<textarea placeholder="Content" rows={10} required />
				<button type="submit">Add Note</button>
			</form>
			<div className="notes-grid">
				{notes.map((note) => (
					<div className="note-item">
						<div className="notes-header">
							<button>x</button>
						</div>
						<h2>{note.title}</h2>
						<p>{note.content}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default App;
