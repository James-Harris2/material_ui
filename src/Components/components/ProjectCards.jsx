import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography } from '@mui/material'; // Use '@mui/material' for v5

function ProjectCards() {
  const projectURL = "https://fe-render-test.onrender.com/";

  return (
    <Card>
      <CardMedia component="img" height="140" img src="../../../public/react_fun.png" alt="React Fun Project" />
      <CardContent>
        <Link to={projectURL} style={{ textDecoration: 'none' }}> {/* Link to project URL */}
          <Typography gutterBottom variant="h5" component="div">
            React Fun 1
          </Typography>
        </Link> 
      </CardContent>
    </Card>
  );
}

export default ProjectCards;
