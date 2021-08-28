import React, { Component } from 'react'
import '../styles/spinner.css'
import * as StyledTable from '../styles/StyledTable'
export default class TeamTable extends Component {
    render() {
        let allTeam = <div class="spinner tableSp">Loading...</div>
        if (this.props.data) {
            if (this.props.data.length > 0) {
                allTeam = this.props.data.map((data, index) => {
                    return (
                        <StyledTable.TableTr key={index}>
                            <StyledTable.TableTd className="tableBody">{data.data.TeamName}</StyledTable.TableTd>
                            <StyledTable.TableTd className="tableBody">{data.Leader.FullName}</StyledTable.TableTd>
                            <StyledTable.TableTd className="tableBody">{data.Members.length}</StyledTable.TableTd>
                            <StyledTable.TableTd className="tableBody">{data.data.NumberOfII}</StyledTable.TableTd>
                        </StyledTable.TableTr>
                    )
                })
            }
        }
        return (
            <StyledTable.TableWrapper>
                <StyledTable.TableContainer>
                    <StyledTable.TableHedContainer>
                        <tr>
                            <StyledTable.TableTh className="tableHeader">اسم الفريق</StyledTable.TableTh>
                            <StyledTable.TableTh className="tableHeader">قئد الفريق</StyledTable.TableTh>
                            <StyledTable.TableTh className="tableHeader">عدد الاعضاء</StyledTable.TableTh>
                            <StyledTable.TableTh className="tableHeader">عدد المبادرات</StyledTable.TableTh>
                        </tr>
                    </StyledTable.TableHedContainer>
                    <StyledTable.TableBodyContainer>
                        {allTeam}
                    </StyledTable.TableBodyContainer>
                </StyledTable.TableContainer>
            </StyledTable.TableWrapper>
        )
    }
}
