// @ts-nocheck
import { CardBox } from "@/components/card";
import { TextBox } from "@/components/text";
import { TitleBox } from "@/components/title";
import { P166, TextContainerBox, W1400 } from "@/styles";
import { Image } from "antd";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import NftList from "@/configs/nftList";

export const Arc20Box = styled.div`
  display: grid;
  height: min-content;
  gap: 36px;
  .nft-image {
    border-radius: 8px;
  }
  ${TitleBox} {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  ${TextBox} {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
`;

export const Arc20ContainerBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: min-content;
  gap: 36px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
   gap :16px ;
  }
`;

export const NftItem = styled.a`
  display: grid;
  height: min-content;
  gap: 8px;
  ${TitleBox},${TextBox} {
    padding: 0 8px;
  }
`;

export default function Arc20() {
  const { t, i18n } = useTranslation();

  return (
    <W1400>
      <P166>
        <Arc20Box>
          <TextContainerBox>
            <TitleBox>
              {t("opinions.title", { returnObjects: true })[0]}
              <label className="pi-color">
                {t("opinions.title", { returnObjects: true })[1]}
              </label>
            </TitleBox>
            <TextBox>{t("opinions.text")}</TextBox>
          </TextContainerBox>
          <Arc20ContainerBox>
            {NftList.map((item, index) => (
              <NftItem key={index} href={item.url} target="_blank">
                <Image src={item.image} preview={false} className="nft-image" />
                <TitleBox style={{ fontSize: 20 }} className="pi-color">
                  {
                    item[
                      String(
                        (i18n.language === "zh" ? "zh" : "en" || "en") +
                          "_title"
                      )
                    ]
                  }
                </TitleBox>
                <TextBox style={{ fontSize: 14 }}>
                  {
                    item[
                      String(
                        (i18n.language === "zh" ? "zh" : "en" || "en") + "_text"
                      )
                    ]
                  }
                </TextBox>
              </NftItem>
            ))}
          </Arc20ContainerBox>
        </Arc20Box>
      </P166>
    </W1400>
  );
}
