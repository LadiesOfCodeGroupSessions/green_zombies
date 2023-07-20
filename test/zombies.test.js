const Zombies = require('../models/Zombies');
jest.mock('../models/Zombies');

test('test1', () => {
   const zombi =  new Zombies();
   const addSpy = jest.spyOn(zombi, 'getName');
   // configure the spy behaviour
   addSpy.mockReturnValue('Jim');
   const name = zombi.getName();
   
    expect(name).toBe('Jim');

    addSpy.mockRestore();

});