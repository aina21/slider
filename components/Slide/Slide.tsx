import React from 'react';
import styled from 'styled-components';
import { Text } from '@components/Text/Text';
import { Header } from '@components/Header/Header';
import { Info } from '@components/Info/Info';

export interface SlideProps {
    color: 'blue' | 'pink';
    icon: 'face' | 'cupcake';
    text: string;
    highlightedText?: string;
    extendedText?: string;
    infoText : string;
    company : string;
 }

const StyledSection = styled.div`
    height: 400px;
    background-color: black;
    color: white;
    text-align: center;
    flex-grow: 1;
    width: 120rem;
    margin-top: 70px;
`;

const SectionText = styled.section`
    height: auto;
    background-color: black;
    color: white;
    text-align: center;
    padding: 10px 0px 45px 0px;
    margin-left: 35rem;
    margin-right: 35em;
`;

export const Slide = ({
    color,
    icon,
    text,
    highlightedText,
    extendedText,
    infoText,
    company,
}: SlideProps) => (
    <StyledSection>
        <Header color={color} />
        <SectionText>
            <Text
                fontWeight="bolder"
                size="h1"
                letterSpacing={0.8}
                color="white">
                {text}
            </Text>
            <Text
                color={color}
                fontWeight="bolder"
                size="h1"
                fontStyle={color == 'pink' ? 'normal' : 'italic'}
                letterSpacing={0.8}>
                {highlightedText}
            </Text>
            <Text
                color="white"
                fontWeight="bolder"
                size="h1"
                letterSpacing={0.8}>
                {extendedText}
            </Text>
        </SectionText>
        <Info icon={icon} infoText={infoText} company={company}/>
    </StyledSection>
);
