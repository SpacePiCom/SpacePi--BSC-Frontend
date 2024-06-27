
// @ts-nocheck
import { TextBox } from "@/components/text";
import { TitleBox } from "@/components/title";
import { W1400, P166, TextContainerBox } from "@/styles";
import { Image } from "antd";
import styled from "styled-components";
// import IntroductionPng from "@/assets/introduction.png";
import { useTranslation } from "react-i18next";
// import SpacepiFigurePng from "@/assets/spacepi-figure.png";
import CeoPng from "@/assets/ceo.png"
import { QuarkBox } from "./quark";


export const IntroductionBox = styled.div`
  display: grid;
  grid-auto-flow: column;
  height: min-content;
  align-items: flex-start;
  grid-auto-columns: 35% 1fr;
  gap: 36px;
  img{
    border-radius: 20px;
    object-fit: cover;
  }
  @media screen and (max-width: 1024px) {
    grid-auto-flow: row;
    grid-auto-columns: 1fr 1fr;
  }
`;

export const IntroductionBgBox = styled.div`
  position: relative;
  width: 100%;
  .introduction-bg {
    .ant-image-img {
      border-radius: 20px;
    }
  }
  .Figure {
    position: absolute;
    bottom: -36px;
    left: -36px;
    right: auto;
    width: 50%;
    height: min-content;
    @media screen and (max-width: 768px) {
      bottom: 0;
      left: 0;
    }
    @-webkit-keyframes fadeOut {
      0% {
        -webkit-transform: translate(10px, -10px);
      }

      100% {
        -webkit-transform: translate(0px, 0px);
      }
    }

    -webkit-transform: translate(0px, 0px);
    -webkit-animation-name: fadeOut;
    -webkit-animation-duration: 0.5s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-delay: 0;
    &:hover {
      @-webkit-keyframes fadeIn {
        0% {
          -webkit-transform: translateY(0px);
        }

        10% {
          -webkit-transform: translate(1px, -1px);
        }

        20% {
          -webkit-transform: translate(2px, -2px);
        }

        30% {
          -webkit-transform: translate(3px, -3px);
        }

        40% {
          -webkit-transform: translate(4px, -4px);
        }

        50% {
          -webkit-transform: translate(5px, -5px);
        }

        60% {
          -webkit-transform: translate(6px, -6px);
        }

        70% {
          -webkit-transform: translate(7px, -7px);
        }

        80% {
          -webkit-transform: translate(8px, -8px);
        }

        90% {
          -webkit-transform: translate(9px, -9px);
        }

        100% {
          -webkit-transform: translate(10px, -10px);
        }
      }

      -webkit-transform: translate(10px, -10px);
      -webkit-animation-name: fadeIn;
      -webkit-animation-duration: 0.5s;
      -webkit-animation-iteration-count: 1;
      -webkit-animation-delay: 0;
    }
  }
`;

export default function Introduction() {
  const { t } = useTranslation();
  return (
    <W1400>
      <P166>
        <QuarkBox>
        <IntroductionBox>
          <IntroductionBgBox style={{display:'none'}}>
            <div className="introduction-bg">

              {/* <Image
                src={
                  "https://imagedelivery.net/OhcNFig7WudIXwDM7XpTdw/0641911b-918c-4c04-d2e2-01d72ae7a200/public"
                }
                preview={false}
                data-aos="zoom-in-right"
              /> */}
            </div>
            {/* <div className="Figure">
              <Image src={SpacepiFigurePng} preview={false} data-aos="zoom-in-right"/>
            </div> */}
            {/* <Image src={CeoPng} preview={false}/> */}
          </IntroductionBgBox>
          <Image src={CeoPng} preview={false} className=""/>
          <TextContainerBox data-aos="zoom-in-left">
            <TitleBox>
              {t("introduction.title", { returnObjects: true })[0]}
              <span className="pi-color">
                {t("introduction.title", { returnObjects: true })[1]}
              </span>
            </TitleBox>
            <TextBox>{t("introduction.text")}</TextBox>
          </TextContainerBox>
        </IntroductionBox>
        </QuarkBox>

      </P166>
    </W1400>
  );
}
