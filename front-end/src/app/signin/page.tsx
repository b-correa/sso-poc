'use client'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent, useEffect, useRef } from 'react';

const SignIn = () => {
  const { status } = useSession();
  const router = useRouter();
  const callbackUrl = getCallbackUrl(router);

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace(callbackUrl);
    }
  }, [status, router, callbackUrl]);

  if (status === 'loading') {
    return <>Loading sign in...</>;
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: callbackUrl
    })
  }

  return (
    <>
      <div className="surface-ground px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center h-full">
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
          <div className="text-center mb-5">
            <div className="text-900 text-3xl font-medium mb-3">Welcome</div>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <button
                onClick={() => {
                  signIn('auth0');
                }}
              >
                Azure
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const getCallbackUrl = (router: any) => {
  let callbackUrl = router.query?.callbackUrl as string ?? '/';
  if (callbackUrl.indexOf('/signin') > 0) {
    callbackUrl = '/';
  }
  return callbackUrl;
}

export default SignIn;
