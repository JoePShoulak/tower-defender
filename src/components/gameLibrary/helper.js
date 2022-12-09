const display = (p5) => ({
  path: (path) => {
    path.forEach((px, i) => {
      if (i === 0) return;
      const prev = path[i - 1];

      p5.line(prev.x, prev.y, px.x, px.y);
    });
  },
});

module.exports = { display };
