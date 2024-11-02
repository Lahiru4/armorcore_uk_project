import React from 'react';
import {Card} from 'antd';

const {Meta} = Card;
export const Cards = ({title, description, imgUrl}) => {
    return (
        <Card
            hoverable
            className={'cards'}
            style={{
                width: 300,
                height:500,
                backgroundColor: '#151515',
                borderColor: '#151515',
                background: '#151515',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            }}
            cover={<img alt="example" src={imgUrl} style={{
                width: 300,
                position: 'relative',
                left: '-12px',

            }} className={'cardImage'}/>}
        >
            <span style={{color: '#0f8548', fontSize: '18px', fontWeight: 'bold'}}>{title}</span>
            <br/>
            <span style={{color: '#B8B8B8', fontSize: '16px'}}>{description}</span>
        </Card>
    )
};


