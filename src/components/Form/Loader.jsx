
import { RevolvingDot } from 'react-loader-spinner';
import styles from '../../components/Form/loader.module.css';


export function Loader() {
    return (
        <RevolvingDot
  visible={true}
  height="80"
  width="80"
  color="rgb(42, 10, 55)"
  ariaLabel="revolving-dot-loading"
  wrapperStyle={{}}
  wrapperClass={styles.customLoaderClass}
        />
    )

}
export function LoaderMini() {
    return (
        <RevolvingDot
  visible={true}
  height="10"
  width="10"
  color="rgb(42, 10, 55)"
  ariaLabel="revolving-dot-loading"
  wrapperStyle={{}}
  wrapperClass={styles.customLoaderClass}
        />
    )
}
