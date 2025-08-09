import Avatar from "./Avatar.jsx";
import {useDispatch, useSelector} from "react-redux";
import {changeFollowers, changeFollowing} from "../actions/userAction.js";

const Stats = () => {
    const {followers, following} = useSelector(state => state.stats);
    const {name} = useSelector(state => state.user);
    const dispatch = useDispatch();
    return (

        <div className={'user-stats'}>
            <div>
                <Avatar/>
                {name}
            </div>
            <div className={'stats'}>
                <div
                    onClick ={() => {
                    const countFollower = followers + 1;
                    dispatch(changeFollowers(countFollower));
                }}
                onContextMenu={e =>{
                    e.preventDefault()
                    const countFollower = followers - 1;
                    if (countFollower >= 0) {
                    dispatch(changeFollowers(countFollower));
                    }}}
                >
                    Followers: {followers}
                </div>
                <div
                    onClick ={() => {
                        const countFollowing = following + 1;
                        dispatch(changeFollowing(countFollowing));
                    }}
                    onContextMenu={e =>{
                        e.preventDefault()
                        const countFollowing = following - 1;
                        if (countFollowing >= 0) {
                            dispatch(changeFollowing(countFollowing));
                        }}}
                >Following: {following}</div>
            </div>
        </div>
    );
};

export default Stats;