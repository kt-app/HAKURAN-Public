
export const About = () => {


    console.log("about")
    return (

        <div className="bg-slate-200">
            <div className='max-w-4xl px-5 pt-10 m-auto pb-36'>
                <h1 className='text-center text-4xl mb-6'>サイト運営者について</h1>
                <p>このサイトは向陽高校による運営ではなく、生徒個人によって非公式に運営されています。</p>
                <p>何かあれば、こちらまでお願いします(☆を@にしてください)</p>
                <p>---gmail---</p>
            </div>


            <div className='max-w-4xl px-5 pt-10 m-auto pb-36'>
                <h1 className='text-center text-4xl mb-6'>個人情報等について</h1>
                <p>このサイトでは、サーバー側で、一切のユーザーに関する情報を保存していません。</p>
                <p>ユーザがログインする際にメールアドレスを要求しますが、そのメールアドレスはgoogleのサーバーで適切な処理を行うため、このサイトではメールアドレスなどの情報を扱っていません。</p>
                <p>このサイトでは、ログイン状態を保持するためにcookieを使用しています。一度ログインすると2時間自由にアクセス可能です。</p>
            </div>


            <div className='max-w-4xl px-5 pt-10 m-auto pb-36'>
                <h1 className='text-center text-4xl mb-6'>主な使用した技術</h1>

                <img className="slide-img m-auto mt-5 h-16" src="/images/nodejs.svg" alt="node.js" />
                <p className='text-center'>node.js:バックエンド、フロントエンドともに使用</p>
                <img className="slide-img m-auto mt-5 h-16" src="/images/express.svg" alt="express" />
                <p className='text-center'>express:バックエンドのフレームワークとして使用 ログイン機能等の実装をした。</p>


                <img className="slide-img m-auto mt-5 h-16" src="/images/jwt.svg" alt="express" />
                <p className='text-center'>jwt:cookie用の暗号として使用</p>

                <img className="slide-img m-auto mt-5 h-16" src="/images/socket.io.svg" alt="express" />

                <p className='text-center'>socket.io:WebSocket通信を用いてサーバとの接続を維持し、ログイン機能を実装するために使用</p>
                <img className="slide-img m-auto mt-5 h-16" src="/images/react.svg" alt="react" />
                <p className='text-center'>react:フロントエンドの構成(ページの構成)に使用</p>
                <img className="slide-img m-auto mt-5 h-16" src="/images/tailwindcss-icon.svg" alt="tailwind" />
                <p className='text-center'>tailwind:フロントエンドのcssとして使用</p>

                <img className="slide-img m-auto mt-5 h-16" src="/images/github-icon.svg" alt="tailwind" />
                <p className='text-center'>github:ソースコードの管理、デプロイに使用 デプロイ先は<a href="https://render.com/" className="text-cyan-400">render</a></p>
                <p className='text-center'>このサイトのリポジトリ(ページ部分はない):<a href="https://github.com/kt-app/HAKURAN_Public " target="_blank" className="text-cyan-400">github</a></p>

            </div>


            <div>


            </div>

        </div>


    )
}