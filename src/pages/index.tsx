import React, { useEffect } from 'react'
import DefaultLayout from 'src/frameworks/layouts/default'
import { Button } from '../frameworks/components/Button'
import { Text } from '../frameworks/components/Text'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, setUser } from '../redux/slices/userSlice'
import { useTranslation } from 'react-i18next'
import RealEstateService from '@/services/realEstate'
import { MPostRealEstate } from '@/models/postRealEstate'
import styles from '@/styles/pages/home.module.scss'

export default function Landing(props: MPostRealEstate) {
  const {t} = useTranslation()
  const dispatch = useDispatch()
  const user = useSelector(getUser)

  useEffect(() => {
    dispatch(
      setUser({
        id: 1,
        username: 'benja',
      })
    )
  })

  return (
    <DefaultLayout>
      <h1 className={styles.title}>{t('home.title')}</h1>
      <Button size="md">{t('home.filter')}</Button>
      <Text>{t('home.content')}</Text>
    </DefaultLayout>
  )
}

export async function getServerSideProps(context: any) {
  const {query = {}} = context

  //TODO: this is demo data, remove later
  const filter = {
    "syt_spt": "Rao bán",
    "ar_cn": "VI",
    "ar_dn": "Quận Gò Vấp",
    "ar_pn": "Thành phố Hồ Chí Minh",
    "ar_tn": "Nhà phố"
  };
  
  const result: any = await RealEstateService.getPostListByArea(filter, 0)
  const newData = result.data

  return {
    props: newData,
  }
}
