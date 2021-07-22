import { useState } from 'react';
import { Wrapper, ModalLink } from '../../style/GlobalStyle';
import {
  Button,
  CardImage,
  Thumbnail,
  CardInfo,
  StyledModelCard,
} from '../../style/Models/StyledCard';
import { Model } from '../../types/interfaces';
import CardModal from './CardModal';

export default function ModelCard(model: Model) {
  const [displayModal, setdisplayModal] = useState(false);
  const [modalModel, setmodalModel] = useState<Model>();

  const handleModal = (model: Model) => {
    setdisplayModal(!displayModal);
    setmodalModel(model);
  };

  return (
    <StyledModelCard>
      <Thumbnail>
        <CardImage src={model?.thumbnails?.images[2].url}></CardImage>
      </Thumbnail>
      <CardInfo>
        <Wrapper
          heigth="100%"
          justify="space-between"
          align="flex-start"
          width="100%"
        >
          <ModalLink
            href={model?.user?.profileUrl}
            target="_blank"
            rel="norefferer"
          >
            <img
              alt="user-avatar"
              src={model?.user?.avatar.images[0].url}
              width="30"
              height="30"
            />
          </ModalLink>
        </Wrapper>
        <Button onClick={() => handleModal(model)}>See Model</Button>
        <ModalLink href={model?.viewerUrl} target="_blank" rel="noreferrer">
          <Wrapper
            color="white"
            fontWeight="700"
            fontSize="1.5rem"
            margin="1rem"
          >
            {model?.name}
          </Wrapper>
        </ModalLink>
      </CardInfo>
      {displayModal && (
        <CardModal setdisplayModal={setdisplayModal} model={modalModel} />
      )}
    </StyledModelCard>
  );
}
