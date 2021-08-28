import React, { Component } from 'react'
import * as StyledTable from '../styles/StyledTable'
import {  getAllWaitListTeams,deleteTeamById,changTeamState } from '../api_config/api'
import Footer from '../footer/Footer'
import Swal from "sweetalert2";

export default class TeamRegisterRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TeamData: [],
            teamCount: 0
        }
    }
    componentDidMount() {
        getAllWaitListTeams()
            .then((response) => {
                const TeamData = response.data
                const teamCount = TeamData.length
                this.setState({ TeamData, teamCount });
            })
            .catch((error) => {
                console.log(error);
            })
        }
        deleteHandler=(data)=>{
            const id = data._id
            Swal.fire({
                title: 'هل انت متأكد من الحذف؟',
                text: "لن تستطيع استعادة الفريق مرة اخرى!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'نعم متأكد!'
              }).then((result) => {          
                if (result.isConfirmed) {
                    deleteTeamById(id)
                    .then((response) => {
                        console.log(response);
                        Swal.fire(
                            'Deleted!',
                            ` تم حذف الفريق بتجاح  ${data.data.TeamName} `,
                            'success'
                          )
                    })
                    .catch((error) => {
                        console.log(error);
                    })

                }
              })
        }
        changeHandler=(data)=>{
            const id = data._id
            changTeamState(id)
            .then((response) => {
                Swal.fire({ icon: 'success', title: ` مرحبا  ${data.data.TeamName} `,showConfirmButton: false,timer: 1500 });
            })
            .catch((error) => {
                console.log(error);
            })
        }
    render() {
        let allTeam = <div class="spinner tableSp">Loading...</div>
        if (this.state.TeamData) {
            if (this.state.TeamData.length > 0) {
                allTeam = this.state.TeamData.map((data, index) => {
                    return (
                        <StyledTable.TableTr key={index}>
                            <StyledTable.TableTd className="tableBody">{data.data.TeamName}</StyledTable.TableTd>
                            <StyledTable.TableTd className="tableBody">{data.Leader.FullName}</StyledTable.TableTd>
                            <StyledTable.TableTd className="tableBody">{data.Leader.Phone}</StyledTable.TableTd>
                            <StyledTable.TableTd className="tableBody">{data.Leader.Email}</StyledTable.TableTd>
                            <StyledTable.TableTd className="tableBody">
                                <StyledTable.AcReButton  onClick={()=>this.changeHandler(data)}>قبول</StyledTable.AcReButton>|<StyledTable.AcReButton onClick={()=>this.deleteHandler(data)} >رفض</StyledTable.AcReButton>
                            </StyledTable.TableTd>
                        </StyledTable.TableTr>
                    )
                })
            }
        }
        return (
            <>
            <StyledTable.TableWrapper>
                <StyledTable.TableContainer>
                    <StyledTable.TableHedContainer>
                        <tr>
                            <StyledTable.TableTh className="tableHeader">اسم الفريق</StyledTable.TableTh>
                            <StyledTable.TableTh className="tableHeader">قائد الفريق</StyledTable.TableTh>
                            <StyledTable.TableTh className="tableHeader">الجوال</StyledTable.TableTh>
                            <StyledTable.TableTh className="tableHeader">البريد الاليكتروني</StyledTable.TableTh>
                            <StyledTable.TableTh className="tableHeader">إجراء</StyledTable.TableTh>
                        </tr>
                    </StyledTable.TableHedContainer>
                    <StyledTable.TableBodyContainer>
                        {allTeam}
                    </StyledTable.TableBodyContainer>
                </StyledTable.TableContainer>
            </StyledTable.TableWrapper>
            <Footer />
            </>
        )
    }
}
