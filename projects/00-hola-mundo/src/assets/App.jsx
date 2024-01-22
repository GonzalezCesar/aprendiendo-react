import './App.css'
import { TwitterFollowCards } from "./TwitterFollowCards";

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true,
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false,
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: true,
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: false,
    }
]

export function App() {

    return(
        <section className="App">
            {
                users.map(({ userName, name, isFollowing}) => (
                    <TwitterFollowCards
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                        >
                            {name}
                        
                    </TwitterFollowCards>
                ))
                
            }
        </section>
    )
}