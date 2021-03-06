import styles from "./styles.module.scss";

export const Social = () => {
	return (
		<div className={styles.container}>
			<div className={styles.box}>
				<a href="mailto:p.brbsa@gmail.com" target="_blank" rel="noreferrer">
					<img src="/mail.svg" alt="" />
				</a>
				<h3>E-Mail</h3>
				<h4>p.brbsa@gmail.com</h4>
			</div>
			<div className={styles.box}>
				<a href="https://www.linkedin.com/in/pedroab0/" target="_blank" rel="noreferrer">
					<img src="/linkedin.svg" alt="" />
				</a>
				<h3>Linkedin</h3>
				<h4>pedroab0</h4>
			</div>
			<div className={styles.box}>
				<a href="https://github.com/pedrobarbosa0" target="_blank" rel="noreferrer">
					<img src="/github-transparent.svg" alt="" />
				</a>
				<h3>GitHub</h3>
				<h4>pedrobarbosa0</h4>
			</div>
		</div>
	);
};
