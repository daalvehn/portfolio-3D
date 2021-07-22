import { Model } from '../../types/interfaces';
import {
  ModalBackground,
  ModalWrapper,
  CardIframe,
  ModalInfo,
} from '../../style/Models/StyledCardModal';
import { Wrapper, ModalLink } from '../../style/GlobalStyle';

interface Props {
  model: Model | undefined;
  setdisplayModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CardModal({ setdisplayModal, model }: Props) {
  return (
    <ModalBackground onClick={() => setdisplayModal(false)}>
      <ModalWrapper>
        <CardIframe
          title={model?.name}
          frameBorder="0"
          allowFullScreen
          allow="fullscreen; autoplay; vr"
          src={model?.embedUrl}
          xr-spatial-tracking="true"
          execution-while-out-of-viewport="true"
          execution-while-not-rendered="true"
          web-share="true"
        />
        <ModalInfo>
          <Wrapper>
            <Wrapper fontSize="25px" fontWeight="700">
              <ModalLink
                href={model?.viewerUrl}
                target="_blank"
                rel="norefferer"
              >
                {model?.name}
              </ModalLink>
            </Wrapper>
            <ModalLink
              href={model?.user?.profileUrl}
              target="_blank"
              rel="norefferer"
            >
              <Wrapper row align="center" width="7rem" justify="space-evenly">
                <img
                  alt="user-avatar"
                  src={model?.user?.avatar.images[0].url}
                  width="30"
                  height="30"
                />

                <h3>{model?.user?.displayName}</h3>
              </Wrapper>
            </ModalLink>
          </Wrapper>
          <Wrapper row align="center" justify="space-between" width="35px">
            <img
              alt="views"
              src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/view-512.png"
              width="20"
              height="20"
            ></img>
            <p>{model?.viewCount}</p>
          </Wrapper>
        </ModalInfo>
      </ModalWrapper>
    </ModalBackground>
  );
}
