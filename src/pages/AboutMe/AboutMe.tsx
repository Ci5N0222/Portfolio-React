import { FaRegUser, FaSchool } from 'react-icons/fa'
import styles from './AboutMe.module.css'
import { MdOutlinePhoneAndroid } from 'react-icons/md'
import { LuMapPin } from 'react-icons/lu'
import { IoMailOpenOutline } from 'react-icons/io5'

export const AboutMe = () => {
    return (
        <div className={ styles.container }>
            <div className={ styles.title }> About Me!</div>

            <div className={ styles.profiles }>
                <div className={ styles.profile }>
                    <div className={ styles.image}>
                    </div>
                    <div className={ styles.info }>
                        <p><FaRegUser />　노시온( Sion Noh )</p>
                        <p><MdOutlinePhoneAndroid />　010-5122-4519</p>
                        <p><IoMailOpenOutline />　vmfpsel@gmail.com</p>
                        <p><LuMapPin />　경기도 부천시</p>
                        <p><FaSchool />　고려사이버대학교 - 소프트웨어공학 졸업</p>
                    </div>
                </div>

                {/* 학력, 자격증, 경력 */}
                <div className={ styles.study }>
                    <div className={ styles.education }>
                        <div>Education</div>
                        <p>· 24.03 ~ 24.09 </p>
                        <p>　K-Degital 클라우드 활용 풀스택 개발</p>
                        <p>　( Java, Spring, React, AWS, GCP )</p>
                        <p>· 22.12 ~ 23.04</p>
                        <p>　[과정평가형] 자바 웹 프로그래밍</p>
                        <p>　( Java, Spring, 정보처리 산업기사 )</p>
                    </div>
                    <div className={ styles.license }>
                        <div>License</div>
                        <p>· 25.09 정보처리 기사 취득</p>
                        <p>· 25.04 SQLD 취득</p>
                        <p>· 23.05 정보처리 산업기사 취득</p>
                    </div>
                </div>
            </div>

            {/* 자기소개 */}
            <div className={ styles.introduce }>
                안녕하세요
            </div>
        </div> 
    )
}