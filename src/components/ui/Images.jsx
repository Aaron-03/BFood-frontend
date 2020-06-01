import styled from '@emotion/styled';

const ImageSvg = styled.img`
    width: ${ props => props.customWidth ? props.customWidth : '7rem' };
    height: ${ props => props.customHeight ? props.customHeight : '7rem' };
    float: left;
    opacity: ${ props => props.customOpacity ? props.customOpacity : '1' };
`;

export {
    ImageSvg
}