import React from 'react'
import { useTranslation } from 'react-i18next'

function OurProjects() {

  const [t, i18n] = useTranslation()

  return (
    <div id='enterprises' className='mb-10'>
        <div className='container'>
            <h2 className='text-xl sm:text-3xl font-bold pb-10'>{t('ourprojects.title')}</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-[40px] text-white'>
                <div style={{background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url("https://www.gazeta.uz/media/img/2020/10/3boGgk16027478149798_b.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} className='h-[300px] relative project overflow-hidden'>
                    <div className='project-info'>
                        <h3 className='text-2xl font-semibold my-5'>{t('ourprojects.card1.title')}</h3>
                        <p>{t('ourprojects.card1.info')}</p>
                    </div>
                </div>
                <div style={{background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url("https://www.gazeta.uz/media/img/2021/10/yOmtRp16334371894391_b.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} className='h-[300px] relative project overflow-hidden'>
                    <div className='project-info'>
                        <h3 className='text-2xl font-semibold my-5'>{t('ourprojects.card2.title')}</h3>
                        <p>{t('ourprojects.card2.info')}</p>
                    </div>
                </div>
                <div style={{background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url("https://upload.wikimedia.org/wikipedia/commons/2/22/Tashkent-City_name_statue.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} className='h-[300px] relative project overflow-hidden'>
                    <div className='project-info'>
                        <h3 className='text-2xl font-semibold my-5'>{t('ourprojects.card3.title')}</h3>
                        <p>{t('ourprojects.card3.info')}</p>
                    </div>
                </div>
                <div style={{background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url("https://api.uznews.uz/storage/uploads/posts/images/18490/inner/XQKQwudMB5.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} className='h-[300px] relative project overflow-hidden'>
                    <div className='project-info'>
                        <h3 className='text-2xl font-semibold my-5'>{t('ourprojects.card4.title')}</h3>
                        <p>{t('ourprojects.card4.info')}</p>
                    </div>
                </div>
                <div style={{background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url("https://voicesoncentralasia.org/wp-content/uploads/2018/06/city21.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} className='h-[300px] relative project overflow-hidden'>
                    <div className='project-info'>
                        <h3 className='text-2xl font-semibold my-5'>{t('ourprojects.card5.title')}</h3>
                        <p>{t('ourprojects.card5.info')}</p>
                    </div>
                </div>
                <div style={{background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), url("https://president.uz/uploads/36edb0dd-8c07-8aea-5a4c-990ba0486c4c.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} className='h-[300px] relative project overflow-hidden'>
                    <div className='project-info'>
                        <h3 className='text-2xl font-semibold my-5'>{t('ourprojects.card6.title')}</h3>
                        <p>{t('ourprojects.card6.info')}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurProjects