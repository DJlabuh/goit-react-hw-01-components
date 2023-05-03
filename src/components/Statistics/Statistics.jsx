import PropTypes from 'prop-types';

import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statlist}>
        {stats.map(stats => (
          <li className={css.item} key={stats.id}>
            <span className={css.label}>{stats.label}</span>
            <span className={css.percentage}>{stats.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
