import axios from '../config';
import { useEffect, useState } from 'react';
import ModelCard from './ModelCard';
import { Model, User } from '../../types/interfaces';
import { ModelsWrapper } from '../../style/Models/StyledCardList';
import { Wrapper } from '../../style/GlobalStyle';

export default function DisplayLikes() {
  const [loading, setLoading] = useState(true);
  const [dataModels, setdataModels] = useState<Model[]>();
  const [userMe, setUserMe] = useState<User>();

  useEffect(() => {
    const requestUserMe = async () => {
      try {
        const responseMe = await axios.get('https://api.sketchfab.com/v3/me');

        setUserMe(responseMe.data);
      } catch (err) {
        console.log(err);
      }
    };

    const requestUserMeLikes = async () => {
      try {
        const response = await axios.get('https://api.sketchfab.com/v3/me');
        const likesurl = response.data.likesUrl;
        const responseLikes = await axios.get(likesurl);
        setdataModels(responseLikes.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    if (loading) {
      requestUserMe();
      requestUserMeLikes();
      setLoading(false);
    }
  }, [loading]);

  return (
    <>
      <Wrapper
        color="white"
        fontSize="2rem"
        fontWeight="700"
        margin="1rem 0 1rem"
      >
        {!userMe
          ? 'Loading...'
          : `${userMe?.displayName} 's  
          Likes`}
      </Wrapper>
      <ModelsWrapper>
        {dataModels?.map((model) => (
          <ModelCard
            key={model.uid}
            name={model?.name}
            viewCount={model?.viewCount}
            user={model?.user}
            embedUrl={model?.embedUrl}
            viewerUrl={model?.viewerUrl}
            thumbnails={model?.thumbnails}
          />
        ))}
      </ModelsWrapper>
    </>
  );
}
