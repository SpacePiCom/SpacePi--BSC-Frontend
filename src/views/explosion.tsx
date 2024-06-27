// @ts-nocheck
import { TextBox } from "@/components/text";
import { TitleBox } from "@/components/title";
import { P166, TextContainerBox, W1400 } from "@/styles";
import { Image } from "antd";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import SpacepiEthPng from "@/assets/spacepi-eth.png";
import MoonPng from "@/assets/moon.png";

export const ExplosionBox = styled.div`
  display: grid;
  height: min-content;
  align-items: flex-start;
  grid-auto-flow: column;
  grid-auto-columns: 1fr 35%;
  gap: 36px;
  @media screen and (max-width: 1024px) {
    grid-auto-flow: row;
    grid-auto-columns: 1fr 1fr;
  }
`;

export const ExplosionBgBox = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  .explosion-bg {
    height: 360px;
    overflow: hidden;
    border-radius: 20px;
    @media screen and (max-width: 1024px) {
      height: 100%;
    }
    .ant-image-img {
      border-radius: 20px;
    }
  }
  .spaceship {
    width: 100%;
    height: auto;
    position: absolute;
    top: 166px;
    right: -126px;
    @media screen and (max-width: 1024px) {
      right: 0;
      left: 24%;
      top: 166px;
      width: 80%;
      height: auto;
    }
    @media screen and (min-width: 1024px) and (max-width: 1200px) {
      width: 80%;
      top: 136px;
      left: 13%;
      right: 0;
    }
    @-webkit-keyframes aircraftOut {
      0% {
        -webkit-transform: translate(-20px, -20px);
      }

      100% {
        -webkit-transform: translate(0, 0);
      }
    }

    -webkit-transform: translate(0px, 0px);
    -webkit-animation-name: aircraftOut;
    -webkit-animation-duration: 0.5s;
    -webkit-animation-iteration-count: 1;
    -webkit-animation-delay: 0;
    &:hover {
      @-webkit-keyframes aircraft {
        0% {
          -webkit-transform: translate(0px, 0px);
        }

        10% {
          -webkit-transform: translate(-2px, -2px);
        }

        20% {
          -webkit-transform: translate(-4px, -4px);
        }

        30% {
          -webkit-transform: translate(-6px, -6px);
        }

        40% {
          -webkit-transform: translate(-8px, -8px);
        }

        50% {
          -webkit-transform: translate(-10px, -10px);
        }

        60% {
          -webkit-transform: translate(-12px, -12px);
        }

        70% {
          -webkit-transform: translate(-14px, -14px);
        }

        80% {
          -webkit-transform: translate(-16px, -16px);
        }

        90% {
          -webkit-transform: translate(-18px, -18px);
        }

        100% {
          -webkit-transform: translate(-20px, -20px);
        }
      }

      -webkit-transform: translate(-20px, -20px);
      -webkit-animation-name: aircraft;
      -webkit-animation-duration: 0.5s;
      -webkit-animation-iteration-count: 1;
      -webkit-animation-delay: 0;
    }
  }
`;

export default function Explosion() {
  const { t } = useTranslation();
  return (
    <W1400>
      <P166>
        <ExplosionBox>
          <TextContainerBox data-aos="zoom-in-right">
            <TitleBox>
              {t("explosion.title", { returnObjects: true })[0]}
              <span className="pi-color">
                {t("explosion.title", { returnObjects: true })[1]}
              </span>
            </TitleBox>
            <TextBox>{t("explosion.text")}</TextBox>
          </TextContainerBox>
          <ExplosionBgBox>
            <div className="explosion-bg">
              <Image
                data-aos="zoom-in-left"
                src={
                  "https://imagedelivery.net/OhcNFig7WudIXwDM7XpTdw/89d98d4c-3ba6-44b9-6475-979be5248f00/public"
                }
                preview={false}
              />
            </div>
            <div className="spaceship">
              <Image
                data-aos="zoom-in-left"
                src="https://imagedelivery.net/OhcNFig7WudIXwDM7XpTdw/2ee9422a-c4ac-4e61-df68-f5e9eac09300/public"
                preview={false}
              />
            </div>
          </ExplosionBgBox>
        </ExplosionBox>
      </P166>
    </W1400>
  );
}
