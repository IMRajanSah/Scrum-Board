import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router'
import MyHeader from './MyHeader';
import axios from 'axios'
import { Button, Card } from 'react-bootstrap';
const Story = () => {
    const [ stories, setStories] = useState([] );
    const history = useHistory();

    const getAllStories = async()=> {
        let response = await axios.get( 'http://localhost:3001/story');
        setStories(response.data);
    }

    useEffect(()=>{
        getAllStories();
    },[]);

    const handleDelete =async(id) => {
         await axios.delete(`http://localhost:3001/story/${id}`);
       
       

        getAllStories();
       
        return;
    }
    return (
        <div>
            <MyHeader/>
            <h3 style={{textAlign:"center",margin:"15px 0"}}>Hi User! Welcome to the Scrum Board </h3>    
          <div className="card-wrapper">
              {stories.map((story)=>( 
                  <Card style={{ width: '16rem' }}>
                  <Card.Body>
                    <Card.Header>Title:{story.title}</Card.Header>
                    <Card.Text>Description:{story.description}</Card.Text>
                    <Card.Text>Task:{story.task}</Card.Text>
                    <Card.Text>Status:{story.status}</Card.Text>

                    <Button variant="success" onClick ={()=>history.push(`/editStory/${story.id}`)}>Edit</Button>&nbsp;&nbsp;
                    <Button variant="danger"  onClick ={()=> handleDelete(story.id)}>Delete </Button>
                  </Card.Body>
                </Card>
                                 ))}

                 <Card style={{ width: '16rem' }}>
                 <Card.Header>Add New Story</Card.Header>
                 <Card.Body> 
                     <Button 
                      onClick = {()=> {
                          history.push("/addStory");
                      }}
                     variant="dark">Click Here</Button>
                 </Card.Body>   
                 </Card> 
          
          </div>

        </div>
    )
}

export default Story
