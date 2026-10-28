import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Movie from './components/Movie';

class AllMovies extends React.Component {
  render() {
    return (
        <ScrollView>
          <Movie
            title={"Doctor Sleep"}
            year={2019}
            icon_name={"skull"}
            icon_color={"red"}
            poster={require('./img/doctor-sleep.jpg')}
          />
          <Movie
            title={"MidWay"}
            year={2020}
            icon_name={"person"}
            icon_color={"black"}
            poster={require('./img/midway.jpg')}
          />
          <Movie
            title={"Infinity War"}
            year={2018}
            icon_name={"hand"}
            icon_color={"red"}
            poster={{ uri: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg' }}
          />
        </ScrollView>
    );
  }
}

export default AllMovies;