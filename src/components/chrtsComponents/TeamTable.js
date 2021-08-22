import React, { Component } from 'react'
import {TableContainer} from './StyledLabel'

export default class TeamTable extends Component {
    render() {
        let allTeam = "...."
        if(this.props.data.length > 0){
        allTeam = this.props.data.map((data,index)=>{
            return (
            <tr key={index}>
            <td>{data.data.TeamName}</td> 
            <td>{data.Leader.FullName}</td> 
            <td>{data.Members.length}</td> 
            <td>{data.data.NumberOfII}</td>
            </tr>
            )
        })
    }
    console.log(allTeam);
        return (
            <div>
        <TableContainer>
     <table className="striped highlight">
        <thead>
          <tr>
              <th>اسم الفريق</th>
              <th>قئد الفريق</th>
              <th>عدد الاعضاء</th>
              <th>عدد المبادرات</th>
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
