import List from '../pages/POM.spec';


describe('Appium', () => {
    it('Add List', async () => {
        await List.clickOkBtn();
        await List.addList('Test');
    })
});
