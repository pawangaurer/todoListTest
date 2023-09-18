
//element 
const okBtn = `//*[@resource-id='android:id/button1']`;
const addBtn = `//*[@resource-id='com.cherryblossoms.todo_list:id/tuika']`;
const addListText = `//*[@resource-id='com.cherryblossoms.todo_list:id/todo']`;
const listAddBtn = `//*[@resource-id='com.cherryblossoms.todo_list:id/add']`;
const listName=(name)=> `//android.widget.TextView[@text='${name}']`;
const dltEl=`//*[@resource-id="com.cherryblossoms.todo_list:id/delate"]`



class App {

    async clickOkBtn() {
        await $(okBtn).touchAction('tap');
    }


    //add list
    async addList(listName) {
        await $(addBtn).touchAction('tap')
        await $(addListText).setValue(listName);
        await $(listAddBtn).touchAction('tap');
    }

    //delete list
    async deleteList(name) {
        await $(listName(name)).touchAction([
            'press',
            { action: 'moveTo', x:76,y:2084 },
            'release'
        ])
    }

}
export default new App();