import React from 'react'
import axios from 'axios'
export default class StudentList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            students:[]
        }
        // this.deleteStudent=this.deleteStudent.bind(this)
    }
    showItems(){
        
            axios.get('http://localhost:4000/students')
            .then(res=>{
                console.log(res.data)
                this.setState({
                students: res.data})
            })
            .catch(err=>console.log(err))
        
    }
    componentDidMount(){
        this.showItems();
       
    }
    render(){
        return(
            <table className='table  table-bordered table-striped'>
                <tr className='bg-info'>
                <th>Id</th>
                <th>Name</th>
                <th>College</th>
                <th>Action</th>
                </tr>
                {this.state.students.map((stu)=> 
                    <tr key={stu.id}>
                        <td>{stu.id}</td>
                        <td>{stu.name}</td>
                        <td>{stu.clg}</td>
                        <td>
                            <button className='btn btn-danger' onClick={()=>this.deleteStudent(stu.id)}>Delete</button> 
                            <button >Update</button>
                             <button >Display</button>
                        </td>
                    </tr>
                
                )}

            </table>
        )
    }
    deleteStudent(id){
        axios.delete('http://localhost:4000/students/'+id)
.then(res=>alert("deleted"))
.catch(err=>console.log(err))
this.showItems()
        
    }
}