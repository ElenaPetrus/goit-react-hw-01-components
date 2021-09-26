import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ title, stats }) {
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const randomColor = () => {
    return `rgb(${randomIntegerFromInterval(
      0,
      255,
    )}, ${randomIntegerFromInterval(0, 255)},${randomIntegerFromInterval(
      0,
      255,
    )})`;
  };
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statList}>
        {stats.map(stat => {
          return (
            <li
              className={s.item}
              style={{ backgroundColor: randomColor() }}
              key={stat.id}
            >
              <span className={s.label}>{stat.label}</span>
              <span className={s.percentage}>{stat.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.prototype = {
  Statistics: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
