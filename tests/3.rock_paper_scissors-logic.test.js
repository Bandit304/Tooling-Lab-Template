const { RockPaperScissors } = require(`../resources/scripts/rock_paper_scissors.js`);
const mathRandomSpy = jest.spyOn(Math, `random`);

describe(`RockPaperScissors class`, function () {
  describe(`determineWinner()`, function () {
    test(`win cases`, function () {
      const game = new RockPaperScissors();
      expect(game.determineWinner(`rock`, `scissors`)).toBe(`win`);
      // Complete the test

      // P1 Choice: Paper
      expect(game.determineWinner(`paper`, `rock`)).toBe(`win`);

      // P1 Choice: Scissors
      expect(game.determineWinner(`scissors`, `paper`)).toBe(`win`);
    });

    test(`tie cases`, function () {
      // Write your test here
      const game = new RockPaperScissors();

      // P1 Choice: Rock
      expect(game.determineWinner(`rock`, `rock`)).toBe(`tie`);
      
      // P1 Choice: Paper
      expect(game.determineWinner(`paper`, `paper`)).toBe(`tie`);

      // P1 Choice: Scissors
      expect(game.determineWinner(`scissors`, `scissors`)).toBe(`tie`);

    });

    test(`lost cases`, function () {
      // Write your test here
      const game = new RockPaperScissors();

      // P1 Choice: Rock
      expect(game.determineWinner(`rock`, `paper`)).toBe(`lose`);
      
      // P1 Choice: Paper
      expect(game.determineWinner(`paper`, `scissors`)).toBe(`lose`);

      // P1 Choice: Scissors
      expect(game.determineWinner(`scissors`, `rock`)).toBe(`lose`);

    });
  });

  describe(`generateCPUResponse()`, function () {
    it(`Math.Random = 0.1 -> Rock`, function() {
      mathRandomSpy.mockImplementation(() => 0.1);
      const game = new RockPaperScissors();
      expect(game.generateCPUResponse()).toBe(`rock`);
    });

    it(`Math.Random = 0.5 -> Paper`, function() {
      // Write your test here
      mathRandomSpy.mockImplementation(() => 0.5);
      const game = new RockPaperScissors();
      expect(game.generateCPUResponse()).toBe(`paper`);
    });

    it(`Math.Random = 0.9 -> Paper`, function() {
      // Write your test here
      mathRandomSpy.mockImplementation(() => 0.9);
      const game = new RockPaperScissors();
      expect(game.generateCPUResponse()).toBe(`scissors`);
    });

  });
});