import { useState } from "react";
import "./App.css";

function App() {
	let [글제목, b] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);
	let [따봉, 따봉변경] = useState(Array(글제목.length).fill(0));
	let [modal, setModal] = useState(false);
	let [title, setTitle] = useState(0);
	let [입력값, 입력값변경] = useState("");

	const handleThumbsUp = (index) => {
		const test = [...따봉];
		test[index]++;
		따봉변경(test);
	};

	return (
		<div className="App">
			<div className="black-nav">
				<h4>블로그임</h4>
			</div>
			{/* <div className="list">
				<h4>x
					{글제목[0]}
					<span
						onClick={() => {
							따봉변경(++따봉);
						}}>
						👍
					</span>
					{따봉}
					<br />
				</h4>
				<p>2월 17일 발행</p>
				<button
					type="button"
					onClick={() => {
						let test = [...글제목];
						test[0] = "여자코트 추천";

						b(test);
					}}>
					↻
				</button>
				<button
					type="button"
					onClick={() => {
						let arr = [...글제목];

						arr.sort((a, b) => {
							if (a < b) {
								return -1;
							} else return 1;
						});

						b(arr);
					}}>
					정렬
				</button>
			</div>
			<div className="list">
				<h4>{글제목[1]}</h4>
				<p>2월 17일 발행</p>
			</div>
			<div className="list">
				<h4
					onClick={() => {
						setModal(modal == false ? true : false);
					}}>
					{글제목[2]}
				</h4>
				<p>2월 17일 발행</p>
			</div> */}
			{글제목.map(function (name, i) {
				return (
					<div className="list">
						<h4
							onClick={(e) => {
								setModal(modal == false ? true : false);
								setTitle(i);
								e.stopPropagation();
							}}>
							{글제목[i]}

							<span
								onClick={(e) => {
									e.stopPropagation();
									handleThumbsUp(i);
								}}>
								👍
							</span>
							{따봉[i]}
						</h4>

						<p>2월 17일 발행</p>
						<button
							type="button"
							onClick={() => {
								let item = [...글제목];
								item.splice(i, 1);

								b(item);
							}}>
							삭제
						</button>
					</div>
				);
			})}

			<input
				onChange={(e) => {
					입력값변경(e.target.value);
				}}
			/>
			<button
				type="button"
				onClick={() => {
					if (입력값 !== "") {
						let copy = [...글제목];
						copy.unshift(입력값);

						b(copy);
					}
				}}>
				글발행
			</button>

			{modal == true ? <Modal title={title} 글제목={글제목} b={b} /> : null}
		</div>
	);
}

function Modal(props) {
	return (
		<div className="modal">
			<h4>{props.글제목[props.title]}</h4>
			<p>날짜</p>
			<p>상세내용</p>
			<button>글수정</button>
		</div>
	);
}

export default App;
