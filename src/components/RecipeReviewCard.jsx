import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function RecipeReviewCard({listdata}) {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card sx={{
      width: {
        xs: 320, // theme.breakpoints.up('xs')
        sm: 500, // theme.breakpoints.up('sm')
        md: 750, // theme.breakpoints.up('md')
        lg: 820, // theme.breakpoints.up('lg')
        xl: 900, // theme.breakpoints.up('xl')
      },
    }} className="rounded-xl bg-white shadow-lg bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-20 text-white ">
      <CardHeader
        avatar={
                
          <Avatar   aria-label="recipe" src={listdata.avatar}>
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={listdata.nickname}
        subheader={listdata.createTime}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" className='truncate '>
          {listdata.title}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="120"
        image={listdata.thumbnail}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {listdata.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* <Typography paragraph>??????:</Typography> */}
          <Typography paragraph>

            {listdata.content}
          </Typography>
        
        </CardContent>
      </Collapse>
    </Card>
  )
}
