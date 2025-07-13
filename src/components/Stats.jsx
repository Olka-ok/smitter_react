import React, {useContext} from 'react';
import Avatar from "./Avatar.jsx";
import {ShmitterContext} from "../utils/context.js";

const Stats = () => {
    const {user, stats} = useContext(ShmitterContext);
    return (
        <div>
            <div className={'user-stats'}>
                <Avatar />
                {user.name}
            </div>
            <div className={'stats'}>
                <div>Followers: {stats.followers} </div>
                <div>Following: {stats.following}</div>
            </div>
        </div>
    );
};

export default Stats;