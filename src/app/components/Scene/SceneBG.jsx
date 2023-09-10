// src/app/components/Scene/SceneBG.jsx
import city from '../../../core/img/newyork.png';
import plane from '../../../core/img/plane.png';
import cloud from '../../../core/img/cloud.png';
import boat from '../../../core/img/boat.png';
import styles from './scene.module.scss';

const SceneBG = () => {
	return (
		<div className={styles['scene-bg']}>
			<img
				src={city}
				alt='City Background'
				className={styles.city}
			/>
			<img
				src={plane}
				alt='Plane'
				className={styles.plane}
			/>
			<img
				src={cloud}
				alt='Cloud 1'
				className={styles['cloud-1']}
			/>
			<img
				src={cloud}
				alt='Cloud 2'
				className={styles['cloud-2']}
			/>
			<img
				src={cloud}
				alt='Cloud 3'
				className={styles['cloud-3']}
			/>
			<img
				src={cloud}
				alt='Cloud 4'
				className={styles['cloud-4']}
			/>
			<img
				src={cloud}
				alt='Cloud 5'
				className={styles['cloud-5']}
			/>
			<img
				src={boat}
				alt='Boat'
				className={styles.boat}
			/>
		</div>
	);
};

export default SceneBG;
