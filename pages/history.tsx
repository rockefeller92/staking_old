import { useMemo } from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { StatsSection, LineSpacer } from 'styles/common';

import TransactionsContainer from 'sections/history/TransactionsContainer';

import useFeeClaimHistoryQuery from 'queries/staking/useFeeClaimHistoryQuery';
import useSynthBurnedQuery from 'queries/staking/useSynthBurnedQuery';
import useSynthIssuedQuery from 'queries/staking/useSynthIssuedQuery';

import StatBox from 'components/StatBox';

const HistoryPage = () => {
	const { t } = useTranslation();
	const issuedQuery = useSynthIssuedQuery();
	const burnedQuery = useSynthBurnedQuery();
	const feesClaimedQuery = useFeeClaimHistoryQuery();

	const isLoaded = issuedQuery.isSuccess && burnedQuery.isSuccess && feesClaimedQuery.isSuccess;
	const issued = issuedQuery.data ?? [];
	const burned = burnedQuery.data ?? [];
	const feesClaimed = feesClaimedQuery.data ?? [];

	const txCount = useMemo(
		() => (isLoaded ? issued.length + burned.length + feesClaimed.length : 0),
		[isLoaded, issued.length, burned.length, feesClaimed.length]
	);

	return (
		<>
			<Head>
				<title>{t('history.page-title')}</title>
			</Head>
			<StatsSection>
				<TxCount title={t('common.stat-box.tx-count')} value={txCount} size="lg" />
			</StatsSection>
			<LineSpacer />
			<TransactionsContainer
				burned={burned}
				issued={issued}
				feesClaimed={feesClaimed}
				isLoaded={isLoaded}
			/>
		</>
	);
};

const TxCount = styled(StatBox)`
	.value {
		text-shadow: ${(props) => props.theme.colors.blueTextShadow};
		color: ${(props) => props.theme.colors.black};
	}
`;

export default HistoryPage;
