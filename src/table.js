import React from "react";
import { makeData, Logo, Tips } from "./utils";

import ReactTable from "react-table";
import "react-table/react-table.css";

export default class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  id: "fullName",
                  Header: "Full Name",
                  accessor: row => `${row.firstName} ${row.lastName}`,
                  filterMethod: (filter, row) =>
                    row._original.firstName.startsWith(filter.value) ||
                    row._original.lastName.startsWith(filter.value)
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age"
                },
                {
                  Header: "Status",
                  accessor: "status"
                }
              ]
            },
            {
              Header: "Stats",
              columns: [
                {
                  Header: "Visits",
                  accessor: "visits"
                }
              ]
            }
          ]}
          defaultSorted={[
            {
              id: "fullName",
              desc: false
            }
          ]}
          filterable={true}
          defaultFiltered={[
            {
              "id": "fullName",
              "value": "acc"
            }]}
          onFilteredChange={filtered => this.setState({ filtered })}
          defaultPageSize={20}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
  }
}

