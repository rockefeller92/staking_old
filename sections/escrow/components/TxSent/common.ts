import styled from 'styled-components';
import { FlexDivColCentered } from 'styles/common';

export const SectionHeader = styled.div`
	font-family: ${(props) => props.theme.fonts.expanded};
	color: ${(props) => props.theme.colors.white};
	font-size: 12px;
	text-align: center;
	margin: 5px 0 20px 0;
`;

export const SectionSubtext = styled.div`
	font-family: ${(props) => props.theme.fonts.regular};
	color: ${(props) => props.theme.colors.gray10};
	font-size: 12px;
`;

export const InfoContainer = styled(FlexDivColCentered)`
	border-bottom: 1px solid ${(props) => props.theme.colors.linedBlue};
	width: 150px;
	margin: 25px 0;
`;

export const InfoTitle = styled.div`
	margin-top: 5px;
	font-family: ${(props) => props.theme.fonts.interBold};
	color: ${(props) => props.theme.colors.gray10};
	font-size: 12px;
	margin-bottom: 25px;
	text-transform: uppercase;
`;

export const InfoData = styled.div`
	font-family: ${(props) => props.theme.fonts.interBold};
	color: ${(props) => props.theme.colors.white};
	font-size: 12px;
	margin-bottom: 25px;
`;