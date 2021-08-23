import React, { Component } from 'react'
import { TableContainer } from './StyledLabel'

export default class TeamTable extends Component {
    render() {
        let allTeam = "...."
        if (this.props.data) {
            if (this.props.data.length > 0) {
                allTeam = this.props.data.map((data, index) => {
                    return (
                        <tr key={index}>
                            <td className="tableBody">{data.data.TeamName}</td>
                            <td className="tableBody">{data.Leader.FullName}</td>
                            <td className="tableBody">{data.Members.length}</td>
                            <td className="tableBody">{data.data.NumberOfII}</td>
                        </tr>
                    )
                })
            }
        }
        console.log(allTeam);
        return (
            <div>
                <TableContainer>
                    <table className="fl-table ">
                        <thead className="tHeadContainer">
                            <tr>
                                <th className="tableHeader">اسم الفريق</th>
                                <th className="tableHeader">قئد الفريق</th>
                                <th className="tableHeader">عدد الاعضاء</th>
                                <th className="tableHeader">عدد المبادرات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allTeam}
                        </tbody>
                    </table>
                </TableContainer>
            </div>
        )
    }
}
