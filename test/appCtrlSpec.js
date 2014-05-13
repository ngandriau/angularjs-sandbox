/**
 * Created by ngandriau on 5/13/14.
 */
describe("hello world", function(){

    var appCtrl;
    beforeEach(module("app"))
    beforeEach(inject (function ($controller) {
        appCtrl = $controller("AppCtrl")
    }))

    describe("AppCtrl", function () {
        it("should have a 'hello' message ", function(){
            expect(appCtrl.message).toBe("Hello")
        })
    });

})