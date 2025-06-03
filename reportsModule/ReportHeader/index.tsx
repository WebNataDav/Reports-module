import { Box, Typography } from '@mui/material';
import styles from './styles.module.scss';

type ReportHeaderProps = {
  title: string;
};

const ReportHeader = ({ title }: ReportHeaderProps) => {
  return (
    <Box className={styles.sectionWrapper}>
      <Typography variant="h5">{title}</Typography>
    </Box>
  );
};

export default ReportHeader;
