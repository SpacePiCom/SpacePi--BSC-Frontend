// @ts-nocheck
import { Button, ButtonBox } from '@/components/button'
import Icon from '@/components/icon'
import { TextBox } from '@/components/text'
import { TitleBox } from '@/components/title'
import { P166, W1400 } from '@/styles'
import { ellipsisMiddle } from '@/utils'
import { Collapse } from 'antd'
import styled from 'styled-components'
import LockInfo from '@/configs/lock/info'
import LockList from '@/configs/lock/list'
import { useLayoutEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const LockBox = styled.div`
  display: grid;
  gap: 36px;
  justify-items: center;
  height: min-content;
  @media screen and (max-width: 768px) {
    gap: 26px;
  }
  ${ButtonBox} {
    .shadow__btn {
      padding: 6px 16px;
      min-width: 140px;
    }
  }
`

export const LockContainerBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 66px;
  /* justify-content: space-between; */
  @media screen and (max-width: 768px) {
    gap: 22px;
    display: grid;
    height: min-content;
    width: -webkit-fill-available;
    grid-template-columns: repeat(2,1fr);
    justify-items: center;
  }
`

export const LockInfoBox = styled.div`
  display: grid;
  height: min-content;
  gap: 0;
  justify-items: center;
`

export const LockAddressBox = styled(TitleBox)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  font-size: 22px;
  @media screen and (max-width: 768px) {
    /* font-size: 20px; */
  }
  a {
    text-decoration: underline;
  }
  .pc {
    display: block;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .m {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`

export const LockListBox = styled.div`
  width: -webkit-fill-available;
  display: grid;
  gap: 16px;
  height: min-content;
  ${TitleBox} {
    font-size: 22px;
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
`

export const LockListHeaderBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  .icon {
    @media screen and (max-width: 768px) {
      width: 1rem;
      height: 1rem;
    }
  }
`

export const LockListContentBox = styled.div`
  display: grid;
  height: min-content;
  gap: 16px;
  padding: 16px;
`

export default function Lock(props: { totalSupplyOfLP: string }) {
  const { t } = useTranslation()
  const [date, setDate] = useState<string>('000:00:00:00')
  const { totalSupplyOfLP } = props
  const lockCountDown = (time: string = LockInfo.lockTime) => {
    var nowtime = new Date()
    var endtime = new Date(time)
    var lefttime = endtime.getTime() - nowtime.getTime()
    var leftd = Math.floor(lefttime / (1000 * 60 * 60 * 24))
    var lefth = Math.floor((lefttime / (1000 * 60 * 60)) % 24)
    var leftm = Math.floor((lefttime / (1000 * 60)) % 60)
    var lefts = Math.floor((lefttime / 1000) % 60)
    if (nowtime >= endtime) {
      setDate('000:00:00:00')
    } else {
      setDate(String(leftd + ':' + lefth + ':' + leftm + ':' + lefts))
    }
  }

  useLayoutEffect(() => {
    const time = setInterval(() => lockCountDown(), 1000)
    return () => {
      clearInterval(time)
    }
  }, [])
  return (
    <W1400>
      <P166>
        <LockBox>
          <TitleBox>
            {t('lock.title', { returnObjects: true })[0]}
            <span className='pi-color'>
              {t('lock.title', { returnObjects: true })[1]}
            </span>
          </TitleBox>
          <LockContainerBox>
            <LockInfoBox>
              <TitleBox style={{ fontSize: 22 }}>{totalSupplyOfLP}</TitleBox>
              <TextBox style={{ fontSize: 14 }}>
                {t('lock.totalSupplyofLP')}
              </TextBox>
            </LockInfoBox>
            <LockInfoBox>
              <TitleBox style={{ fontSize: 22 }}>
                {LockInfo.lPInLocker.number}
              </TitleBox>
              <TextBox style={{ fontSize: 14 }}>
                {t('lock.lPinLocker')} ({LockInfo.lPInLocker.percentage})
              </TextBox>
            </LockInfoBox>
            <LockInfoBox>
              <TitleBox style={{ fontSize: 22 }}>
                {LockInfo.unlockDate}
              </TitleBox>
              <TextBox style={{ fontSize: 14 }}>{t('lock.unlockDate')}</TextBox>
            </LockInfoBox>
            {/* <LockInfoBox>
              <TitleBox style={{ fontSize: 22 }}>{LockInfo.lockers}</TitleBox>
              <TextBox style={{ fontSize: 14 }}>{t("lock.lcokers")}</TextBox>
            </LockInfoBox>
            <LockInfoBox>
              <TitleBox style={{ fontSize: 22 }}>{date}</TitleBox>
              <TextBox style={{ fontSize: 14 }}>{t("lock.lockTimer")}</TextBox>
            </LockInfoBox> */}
          </LockContainerBox>
          <LockAddressBox>
            <a className='pc' href={LockInfo.url} target='_blank'>
              {LockInfo.address}
            </a>
            <a className='m' href={LockInfo.url} target='_blank'>
              {ellipsisMiddle(LockInfo?.address, 7, 7)}
            </a>
            <TextBox>{t('lock.isTheOwner')}</TextBox>
          </LockAddressBox>
          <LockListBox>
            {LockList.map((item, index: number) => (
              <Collapse
                key={index}
                expandIconPosition='end'
                items={[
                  {
                    key: item.address,
                    label: (
                      <LockListHeaderBox>
                        <TitleBox>{index + 1}</TitleBox>
                        <Icon name='text' />
                        <Icon name='lock' />
                        <TitleBox className='pi-color'>
                          {ellipsisMiddle(item.address, 6, 6)}
                        </TitleBox>
                      </LockListHeaderBox>
                    ),
                    children: (
                      <LockListContentBox>
                        <TitleBox>{t('lock.lockeoDetails')}</TitleBox>
                        <TitleBox>No1: {item.spacePi} SpacePi (BSC)</TitleBox>
                        <TextBox>
                          <span className='pi-color'>
                            {t('lock.startUpdate')}&nbsp;&nbsp;
                          </span>
                          {t('lock.time')}:&nbsp;&nbsp;
                          <span className='pi-color'>{item.startTime}</span>
                          &nbsp;&nbsp; (UTC) {t('lock.endTime')}:&nbsp;&nbsp;
                          <span className='pi-color'>{item.endTime}</span>
                          &nbsp;&nbsp; (UTC)
                        </TextBox>
                        <a href={item.url} target='_blank'>
                          <Button>
                            <Icon name='moreArrow' />
                          </Button>
                        </a>
                      </LockListContentBox>
                    ),
                    extra: (
                      <TitleBox className='pi-color'>
                        {item.percentage}
                      </TitleBox>
                    ),
                  },
                ]}
              />
            ))}
          </LockListBox>
          <TextBox style={{ textAlign: 'left' }}>{t('lock.text')}</TextBox>
        </LockBox>
      </P166>
    </W1400>
  )
}
