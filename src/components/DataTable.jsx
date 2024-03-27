import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dummyData from "../utils/dummyData";

function createData(name, dataArray) {
	return {
		name,
		q2_22: dataArray?.[0],
		q3_22: dataArray?.[1],
		q4_22: dataArray?.[2],
		q1_23: dataArray?.[3],
		q2_23: dataArray?.[4],
		q3_23: dataArray?.[5],
		q4_23: dataArray?.[6],
		q1_24: dataArray?.[7],
		q2_24: dataArray?.[8],
		q3_24: dataArray?.[9],
		q4_24: dataArray?.[10],
		q1_25: dataArray?.[11],
	};
}

function DataTable({ id, selectedCard }) {
	const [selectedData, setSelectedData] = useState([]);

	useEffect(() => {
		setSelectedData(dummyData.find((obj) => obj.id === selectedCard));
	}, [selectedCard]);

	const rows = [
		createData("Series 1", selectedData.series1),
		createData("Series 2", selectedData.series2),
		createData("Series 3", selectedData.series3),
	];

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Batch Name</TableCell>
						<TableCell align="right">Q2 - 2022</TableCell>
						<TableCell align="right">Q3 - 2022</TableCell>
						<TableCell align="right">Q4 - 2022</TableCell>
						<TableCell align="right">Q1 - 2023</TableCell>
						<TableCell align="right">Q2 - 2023</TableCell>
						<TableCell align="right">Q3 - 2023</TableCell>
						<TableCell align="right">Q4 - 2023</TableCell>
						<TableCell align="right">Q1 - 2024</TableCell>
						<TableCell align="right">Q2 - 2024</TableCell>
						<TableCell align="right">Q3 - 2024</TableCell>
						<TableCell align="right">Q4 - 2024</TableCell>
						<TableCell align="right">Q1 - 2025</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.name}
							sx={{
								"&:last-child td, &:last-child th": {
									border: 0,
								},
							}}
						>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="right">{row.q2_22}</TableCell>
							<TableCell align="right">{row.q3_22}</TableCell>
							<TableCell align="right">{row.q4_22}</TableCell>
							<TableCell align="right">{row.q1_23}</TableCell>
							<TableCell align="right">{row.q2_23}</TableCell>
							<TableCell align="right">{row.q3_23}</TableCell>
							<TableCell align="right">{row.q4_23}</TableCell>
							<TableCell align="right">{row.q1_24}</TableCell>
							<TableCell align="right">{row.q2_24}</TableCell>
							<TableCell align="right">{row.q3_24}</TableCell>
							<TableCell align="right">{row.q4_24}</TableCell>
							<TableCell align="right">{row.q1_25}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default DataTable;
