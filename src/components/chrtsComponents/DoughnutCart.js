import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';
import '../styles/chart.css';
import { getAllUserGender, getAllTeams } from '../api_config/api'
export default class DoughnutCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MaleCount: 0,
            FemaleCount: 0,

        }
    }
    componentDidMount() {
        this.getAllUser()
        this.getTeams()
    }
    getAllUser(){
        getAllUserGender()
        .then((response) => {

            const Male = response.data.filter((Male) => {
                return Male.Gender === 'M'
            })
            const Female = response.data.filter((Female) => {
                return Female.Gender === 'F'
            })
            const MaleCount = Male.length
            const FemaleCount = Female.length
            this.setState({ MaleCount, FemaleCount });
        })
        .catch((error) => {
        })
    }
    getTeams(){
        getAllTeams()
        .then((response) => {
            const data = response.data
            var count
            data.map((members)=>{
                // if(members.Members.length>1){
                  return  count  += members.Members.length
                // }
            })
            this.setState({ count });
        })
        .catch((error) => {
        })
    }

    render() {
        const { MaleCount, FemaleCount } = this.state
        const genderData = {
            labels: [`عدد الذكور:  ${MaleCount}`
                , `عدد الاناث: ${FemaleCount}`],
            datasets: [
                {
                    data: [MaleCount, FemaleCount],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 99, 132, 0.2)',

                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        };

        return (
            <div>
                <div className="chartBar">
                    <div className="chartDiscretion">
                        Test chart
                    </div>
                    <div className="chartContainer">
                        <div className="genderChart">
                            <Doughnut data={genderData} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
