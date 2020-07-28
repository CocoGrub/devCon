import React from "react";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Moment from "react-moment";
import {deleteExperience} from "../../reducers/profileReducer";

const Experience = ({experience,deleteExperience}) => {
    const experiences = experience.map((v) => {
        return <tr key={v._id}>
            <td>{v.company}</td>
            <td className={"hide-sm"}>{v.title}</td>
            <td>
                <Moment format={"YYYY/MM/DD"}>{v.from}</Moment> - {
                v.to===null?(' Now'):(<Moment format={"YYYY/MM/DD"}>{v.to}</Moment>)}
            </td>
            <td>
                <button className={"btn btn-danger"} onClick={()=>deleteExperience(v._id)}>Delete</button>
            </td>
        </tr>
    })
    return (
        <>
            <h2 className={"my-2"}>Experience Credentials</h2>
            <table className={"table"}>
                <thead>
                <tr>
                    <th>Company</th>
                    <th className={"hide-sm"}>Title</th>
                    <th className={"hide-sm"}>Years</th>
                </tr>
                </thead>
                <tbody>{experiences}</tbody>
            </table>
        </>
    )
}

Experience.propTypes = {
    experience:PropTypes.array.isRequired,
    deleteExperience:PropTypes.func.isRequired
}

export default connect(null, {deleteExperience})(Experience)