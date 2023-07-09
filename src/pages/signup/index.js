import { withAuthUser, AuthAction } from 'next-firebase-auth';
import 'firebase/firestore';
import 'firebase/auth';
import Loader from 'components/common/elements/Loader';
import Layout from 'components/common/layout/Layout';
import Main from 'components/modules/signup/Main';

const Loading = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-base-800">
      <Loader />
    </div>
  );
};

const SignUp = () => {
  return (
    <Layout headerFixed={true}>
      <Main />
    </Layout>
  );
};

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenAuthedBeforeRedirect: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.RENDER,
  LoaderComponent: Loading,
})(SignUp);
