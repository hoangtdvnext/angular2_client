declare var $: any;
export const MSG = {

}

export default class Message {
    static get(msgId: string, ...args) {
        let template = $.validator.format(msgId);
        let msg = template(args);
        return msg;
    }
}