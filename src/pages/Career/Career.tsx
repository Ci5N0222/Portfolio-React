import { useEffect, useState } from 'react';
import styles from './Career.module.css'

export const Career = () => {

    type DateValue = number | "";
    interface WorkPeriod {
        start: DateValue;
        end: DateValue;
    }
    type WorkHistory = Record<string, WorkPeriod>;

    const param: WorkHistory = {
        ABC : {
            start : 20230524,
            end : 20240118
        },
        NextICT: {
            start: 20241023,
            end: ""
        } 
    }

    const [ career, setCareer ] = useState<Record<string, number>>({});

    const today = new Date();

    const pareDate = (date: number | string) => {
        const str = String(date);
        if(!str || str === "") return today;
        const year = parseInt(str.slice(0, 4));
        const month = parseInt(str.slice(4, 6)) - 1;
        const day = parseInt(str.slice(6, 8));
    
        return new Date(year, month, day);
    }

    const getDaysBetween = (start: Date, end: Date) => {
        const oneDay = 1000 * 60 * 60 * 24;
        return Math.floor((end.getTime() - start.getTime()) / oneDay) + 1;
    }


    const companyCareer = (param: WorkHistory) => {
        // 총경력
        let total = 0;

        // 업체별 경력
        let company = {};

        for(const key in param) {
            const range = param[key];
            const startDate = pareDate(range.start);
            const endDate = pareDate(range.end);
            const days = getDaysBetween(startDate, endDate);
            console.log(`${key} 기간 : ${days}일`);
            total += days;
            company = { ...company, [key]: days };
        }
        company = { total, ...company }

        return company;
    }
    

    const workingDays = (totalDays: number) => {
        const years = Math.floor(totalDays / 365);
        const remainingDays = totalDays % 365;
        const months = Math.floor(remainingDays / 30);
        // const days = remainingDays % 30;
        if(years === 0) return `${months}개월`;
            else return `${years}년 ${months}개월`
    }

    useEffect(() => {
        const company = companyCareer(param)
        setCareer(prev => {
            const career = { ...prev, ...company};
            return career;
        });

    }, []);

    return (
        <div className={ styles.container }>
            <div className={ styles.title }> Career!</div>
            <div className={ styles.company }>
                {
                    Object.keys(career).map(key => {
                        const workingDay = workingDays(career[key]);
                        return (
                            <div className={ styles.info }>
                                <div>{ key } <span>{ workingDay }</span></div>
                            </div>
                        )
                    })
                }
            </div>
            
        </div> 
    )
}