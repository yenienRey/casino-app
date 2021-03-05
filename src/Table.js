import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", type: "number", width: 100 },
  { field: "slot1", headerName: "Slot 1", type: "number", sortable: false, width: 100 },
  { field: "slot2", headerName: "Slot 2", type: "number", sortable: false, width: 100 },
  { field: "slot3", headerName: "Slot 3", type: "number", sortable: false, width: 100 },
  { field: "date", headerName: "Date", width: 440 },
];

export default function DataTable({ rows }) {
  return (
    <div style={{ height: 500, width: 700 }}>
      <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
    </div>
  );
}
