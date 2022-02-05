import React from 'react';

import {Button, VideoPlayer} from 'components';
import {Source} from 'types/tutorials';

import * as S from './styles';

const TutorialsHero = () => {
  return (
    <S.Container>
      <S.Player>
        <VideoPlayer source={Source.youtube} videoId="6IAgRS66JrU" />
      </S.Player>
      <S.Content>
        <S.Heading>Explore thousands of tutorials to learn in-demand skills</S.Heading>
        <S.Paragraph>
          Watch free coding tutorials created by thenewboston YouTube channel to help you develop apps in any language
          and earn TNBC.
        </S.Paragraph>
        <Button color="quaternary">Learn How to Submit an App for TNBC {'-->'} </Button>
      </S.Content>
    </S.Container>
  );
};

export default TutorialsHero;