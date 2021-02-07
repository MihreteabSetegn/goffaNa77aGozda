import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import Main from './Main';
// import Footer from './Footer';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
// import Main from './Main';
import Sidebar from './Sidebar';

//posts
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const mainFeaturedPost = {
  title: ' Goffa Gara Organization Official Website',
  description:
    " We are Group of individuals mainly inspired to help our community and give back in many different ways. Being originally from Goffa area, and located in most part of the world,we are dedicated in providing multiple assists to those in need.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Learn more about Goffa Area...',
};

const posts = [post1, post2, post3];

const featuredPosts = [
  {
    title: 'Visit Goffa',
    date: 'Feb 7, 2021',
    description:
      'Goffa is a wonder land of multiple scenary.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Goffa Area',

  },
  {
    title: 'Support Us',
    date: 'Feb 7, 2021',
    description:
      'There are multiple ways you can support us.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

const sidebar = {
  title: 'Goffa Gara Blogs',
  description:
    'The following are list of posts we made since April 1999 on Goffa Gara',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Instagram', icon: InstagramIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

function App() {
  
  const classes = useStyles();
  return (
    <React.Fragment>
      {/* <Container maxWidth="lg"> */}
        <div className="App">
          <Header/>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
                {featuredPosts.map((post) => (
                  <FeaturedPost key={post.title} post={post} />
                ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Today's Post" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
          <Footer/>
        </div>
      {/* </Container> */}
    </React.Fragment>
  );
}
export default App;