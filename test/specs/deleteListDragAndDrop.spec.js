import List from '../pages/POM.spec';

describe('Appium', () => {
    const listName='Test';
    it('Delete List', async () => {
        await List.clickOkBtn();
        await List.addList(listName);
        await List.deleteList(listName);
    })
});
