import styles from './logo.module.scss';
import logo from '../../../core/img/nyc-logo-lrg.png';

const Logo = () => {
	return (
		<div className={styles.logo}>
			<img
				src={logo}
				alt='New York Canna Club Logo'
			/>
		</div>
	);
};

export default Logo;
