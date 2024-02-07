
import { RevolvingDot } from 'react-loader-spinner';
import styles from '../../components/Form/loader.module.css';


export function Loader() {
    return (
        <RevolvingDot
  visible={true}
  height="80"
  width="80"
  color="rgb(55, 12, 95)"
  ariaLabel="revolving-dot-loading"
  wrapperStyle={{}}
  wrapperClass={styles.customLoaderClass}
        />
    )

}
