import React from 'react';
import RoomFilter from './roomFilter';
import RoomList from './roomList';
import Loading from './loading';
import { RoomConsumer } from '../context';

const RoomsContainer = () => {
	return (
		<RoomConsumer>
			{(value) => {
				const { loading, sortedRooms, rooms } = value;
				if (loading) {
					return <Loading />;
				}
				return (
					<>
						<RoomFilter rooms={rooms} />
						<RoomList rooms={sortedRooms} />
					</>
				);
			}}
		</RoomConsumer>
	);
};

export default RoomsContainer;
