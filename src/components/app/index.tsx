import { AppProps } from './types.ts';

import MainPage from '../../pages/main-page';

function App({ offersCount }: AppProps): JSX.Element {
  return <MainPage offersCount={offersCount} />;
}

export default App;
