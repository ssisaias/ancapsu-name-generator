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
         <Grid container textAlign='center' style={{ height: '30em' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Form size='large'>
                
                <Button onClick={handleNameSelect} color='yellow' fluid size='large'>
                    Gerar
                </Button>
                
            </Form>
            <Header as='h2' color='black' textAlign='center'>
                Essa notícia foi sugerida por....
            </Header>
            <Message>
               {selectedName}
            </Message>
            </Grid.Column>
        </Grid>
       </>
    );
}