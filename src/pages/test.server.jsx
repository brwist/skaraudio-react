import Layout from '../components/Layout.server.jsx';
import Welcome from '../components/Welcome.server.jsx';

export default function Page() {
  return (
    <Layout hero={<Welcome />}>
      <div className="relative mb-12">
        <div>Login form</div>
      </div>
    </Layout>
  );
}
