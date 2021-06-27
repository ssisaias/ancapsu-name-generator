import './App.css';
import MainPage from '../features/mainpage/MainPage';
import { Grid, Header } from 'semantic-ui-react';

function App() {
  
  return (
    <>
      <MainPage>

      </MainPage>

      <Grid.Column container width={6}>
        <Header as='h5' color='yellow' content='nano_137fc688z3qy8wt8s7yzrtj5uzx8zhgdz6o87yu6y3ycbsdyadxpsb7c1q8o' />
      </Grid.Column>
    </>
  );
}

export default App;
