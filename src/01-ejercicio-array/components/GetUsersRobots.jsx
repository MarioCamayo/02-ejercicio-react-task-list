import { usersRobots } from '../backend/array.js';

export const GetUsersRobots = () => {
  
  return (
    <div>
      <ul>
        {usersRobots.map((item, index) => (
          <li key={item.id} style={{ listStyle: 'none' }}>
            <img src={item.imagen} />
            <p>
              {index + 1}. {item.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
