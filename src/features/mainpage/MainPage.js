import React, {useState} from 'react';
import { Button, Grid, Form, Message, Header } from 'semantic-ui-react';
import nameList from '../../app/store/nameList';

export default function MainPage(){
    
    const [selectedName, setSelectedName] = useState('');

    function handleNameSelect(){
        const namelist = nameList();
        var item = namelist[Math.floor(Math.random()*namelist.length)]; //1st ans from stackoverflow
        setSelectedName(item);
    }

    return(
       <>
         <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='black' textAlign='center'>
                Gerador de nick - Ancapsu
            </Header>
            <Form size='large'>
                
                <Button onClick={handleNameSelect} color='yellow' fluid size='large'>
                    Gerar
                </Button>
                
            </Form>
            <Message>
               {selectedName}
            </Message>
            </Grid.Column>
        </Grid>
       </>
    );
}